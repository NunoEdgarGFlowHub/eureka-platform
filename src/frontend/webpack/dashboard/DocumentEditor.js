import Editor from 'draft-js-plugins-editor';
import createSingleLinePlugin from 'draft-js-single-line-plugin';
import React, {Component} from 'react';
import styled from 'styled-components';
import {TopContainer} from './TopContainer.js';
import {getDomain} from '../../../helpers/getDomain.js';
import GridSpinner from '../../webpack/spinners/GridSpinner.js';
import Toolbar from './editor/Toolbar.js';
import {__GRAY_500, __GRAY_600} from '../../helpers/colors.js';
import {customStyleMap} from './editor/customStyleMap.js';
import './editor/new-article.css';
import 'draft-js/dist/Draft.css';
import TitleWithHelper from './editor/TitleWithHelper.js';
import Document from '../../../models/Document.mjs';
import {
  deserializeDocument,
  serializeSavePatch
} from '../../../helpers/documentSerializer.mjs';
import getChangedFields from '../../../helpers/compareDocuments.js';
import {pick, debounce} from 'underscore';
import DocumentDisciplinePicker from './editor/DocumentDisciplinePicker.js';
import Requirement from '../../../models/Requirement.mjs';
import DocumentSubDisciplinePicker from './editor/DocumentSubDisciplinePicker.js';
import DocumentKeywordsPicker from './editor/DocumentKeywordsPicker.js';
import ObservationTypePicker from './editor/DocumentObservationTypePicker.js';
import Icon from '../icons/Icon.js';
import Modal from '../../webpack/design-components/Modal.js';
import {fromS3toCdn} from '../../../helpers/S3UrlConverter.js';
import DropZoneHandler from './editor/DropZoneHandler.js';

const titleStyle = () => 'title';

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
`;

const EditorParent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 20px;
  margin-top: -275px !important;
`;
const EditorCard = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  background-color: #ffffff;
  background-clip: border-box;
  min-height: 420px;
  width: 1070px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  padding: 40px 80px;
`;

const Title = styled.h2`
  text-align: center;
  color: ${__GRAY_500};
`;

const EditorContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;

const Line = styled.div`
  margin: 15px 0;
`;

const TitleContainer = styled.div`
  color: inherit;
`;
const ButtonContainer = styled.div`
  align-self: center;
`;
const Button = styled.button``;

const Authors = styled.div``;

const LeftTopContainer = styled.div`
  padding: 15px;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  background-color: #ffffff;
  margin-right: 20px;
  height: 100%;
  margin-top: 73px;
`;

const RightTopContainer = styled.div`
  padding: 15px 10px;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  background-color: #ffffff;
  margin-bottom: 20px;
  align-self: flex-end;
  width: 200px;
`;

const SaveChanges = styled.div`
  color: ${__GRAY_600};
  display: flex;
  justify-content: center;
`;
class DocumentEditor extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: null,
      loading: false,
      lastSavedVersion: null,
      modifiedFields: [],
      document: null,
      saving: false,
      saved: false
    };

    this.updateModifiedFieldsDebounced = debounce(
      this.updateModifiedFields,
      200
    );
  }

  componentDidMount() {
    this.setState({loading: true});
    const draftId = this.props.match.params.id;
    fetch(`${getDomain()}/api/articles/drafts/${draftId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          let document = new Document(response.data.document);
          let deserialized = deserializeDocument(document);
          this.setState({
            document: deserialized,
            lastSavedVersion: deserialized
          });
        } else {
          this.setState({
            errorMessage: response.error
          });
        }
        this.setState({loading: false});
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: 'Ouh. Something went wrong.',
          loading: false
        });
      });

    this.saveInterval = setInterval(() => {
      this.save();
    }, 7500);
  }

  componentWillUnmount() {
    if (this.saveInterval) {
      clearInterval(this.saveInterval);
    }
  }

  updateModifiedFields() {
    const modifiedFields = this.getModifiedFields();
    this.setState({modifiedFields});
  }

  onTitleChange = title => {
    this.updateDocument({
      document: {
        ...this.state.document,
        title
      }
    });
  };

  updateDocument({
    document,
    otherStatesToSet = {},
    modifications = true,
    citationsToRemove = []
  }) {
    this.setState({
      document,
      ...otherStatesToSet
    });

    //TODO: change this
    const i = Math.floor(Math.random() * 40) % 4;
    if (i <= 0) {
      this.save();
    }
    this.updateModifiedFieldsDebounced();
  }

  getModifiedFields() {
    if (!this.state.lastSavedVersion) {
      return [];
    }
    return getChangedFields(this.state.lastSavedVersion, this.state.document);
  }

  save() {
    this.setState({saved: false, saving: true});
    const changedFields = this.getModifiedFields();
    const toSave = new Document(this.state.document);
    let patch = pick(toSave, ...changedFields);
    const draftId = this.props.match.params.id;

    if (toSave.figure.length > 0) {
      patch.figure = toSave.figure;
    }

    fetch(`${getDomain()}/api/articles/drafts/${draftId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        document: serializeSavePatch(patch)
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          this.setState({saved: true, saving: false});
        } else {
          this.setState({
            errorMessage: response.error
          });
          this.setState({saved: false, saving: false});
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: 'Ouh. Something went wrong.',
          loading: false
        });
      });
  }

  renderTitle() {
    const singleLinePlugin = createSingleLinePlugin();
    return (
      <TitleContainer className="title">
        <TitleWithHelper
          field="title"
          requirement={{required: true, hint: 'this is a test rqureiaijsfijas'}}
          document={{title: 'test'}}
          title="Title"
          id="title"
        />
        <Editor
          plugins={[singleLinePlugin]}
          editorState={this.state.document.title}
          onChange={this.onTitleChange.bind(this)}
          blockStyleFn={titleStyle}
          blockRenderMap={singleLinePlugin.blockRenderMap}
          placeholder="Please enter your title..."
          customStyleMap={customStyleMap}
        />
      </TitleContainer>
    );
  }

  renderAuthors() {
    return (
      <div>
        {' '}
        <TitleWithHelper
          field="authors"
          requirement={{required: true, hint: 'this is a test rqureiaijsfijas'}}
          document={{title: 'test'}}
          title="Authors"
          id="authors"
        />
        <Authors>{this.state.document.authors}</Authors>
      </div>
    );
  }

  requirementForField(field) {
    return (
      new Document(this.state.document).getTextRequirements()[field] ||
      new Requirement()
    );
  }

  renderSelectMenus() {
    return (
      <div>
        <DocumentDisciplinePicker
          document={this.state.document}
          value={this.state.document.main_discipline}
          requirement={this.requirementForField('main_discipline')}
          onChange={main_discipline => {
            this.updateDocument({
              document: {
                ...this.state.document,
                main_discipline
              }
            });
            this.save();
          }}
          type={this.state.document.type}
        />
        <DocumentSubDisciplinePicker
          value={this.state.document.discipline}
          requirement={this.requirementForField('discipline')}
          document={this.state.document}
          mainDisciplines={this.state.document.main_discipline}
          onChange={discipline => {
            this.updateDocument({
              document: {
                ...this.state.document,
                discipline
              }
            });
            this.save();
          }}
        />
        <DocumentKeywordsPicker
          value={this.state.document.keywords}
          requirement={this.requirementForField('keywords')}
          document={this.state.document}
          onChange={keywords => {
            this.updateDocument({
              document: {
                ...this.state.document,
                keywords
              }
            });
            this.save();
          }}
        />
        {['replication'].includes(this.state.document.type) ? null : (
          <ObservationTypePicker
            value={this.state.document.link.observation_type}
            document={this.state.document}
            requirement={this.requirementForField('link.observation_type')}
            type={this.state.document.type}
            onChange={observation_type => {
              this.updateDocument({
                document: {
                  ...this.state.document,
                  link: {
                    ...this.state.document.link,
                    observation_type
                  }
                }
              });
              this.save();
            }}
          />
        )}
      </div>
    );
  }

  renderModal() {
    return (
      <Modal
        type={'notification'}
        toggle={isErrorMessage => {
          this.setState({errorMessage: null});
        }}
        show={this.state.errorMessage}
        title={'You got the following error'}
      >
        {this.state.errorMessage}
      </Modal>
    );
  }

  renderSaveButtons() {
    if (this.state.saving) {
      return (
        <div>
          {' '}
          <Icon
            icon={'cloud-upload'}
            width={20}
            height={20}
            color={__GRAY_600}
          />{' '}
          Saving...
        </div>
      );
    }
    return (
      <div>
        <Icon icon={'cloud'} width={20} height={20} /> All changes saved{' '}
      </div>
    );
  }

  renderFigures() {
    return (
      <div>
        <DropZoneHandler
          onChangeFigure={f => {
            let figures = this.state.document.figure
              ? this.state.document.figure
              : [];
            let figure = f.contents[0];
            figure.cdn = fromS3toCdn(f.contents[0].url);
            figures.push(figure);
            console.log(figures);

            // this.props.addImage(figure, 'featuredIn');
          }}
        />
        {/*{this.state.document.figure ? (*/}
        {/*<MultiImagesContainer images={this.props.partners}>*/}
        {/*{this.props.partners.map((partner, i) => {*/}
        {/*return (*/}
        {/*<FeaturedInContainer key={i}>*/}
        {/*<ImageContainer>*/}
        {/*<Image src={partner.imgUrl} />*/}
        {/*</ImageContainer>*/}
        {/*<RemoveContainer>*/}
        {/*<Icon*/}
        {/*icon={'delete'}*/}
        {/*width={10}*/}
        {/*height={10}*/}
        {/*color={__ALERT_ERROR}*/}
        {/*onClick={() => {*/}
        {/*// this.props.removeImage(partner.imgUrl, 'partners');*/}
        {/*}}*/}
        {/*/>*/}
        {/*</RemoveContainer>*/}
        {/*</FeaturedInContainer>*/}
        {/*);*/}
        {/*})}*/}
        {/*</MultiImagesContainer>*/}
        {/*) : null}*/}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderModal()}</div>
        {this.state.loading || !this.state.document ? (
          <GridSpinner />
        ) : (
          <Parent>
            <TopContainer />
            <Container>
              <LeftTopContainer>
                <Toolbar />
              </LeftTopContainer>

              <EditorParent>
                <RightTopContainer>
                  <SaveChanges>{this.renderSaveButtons()}</SaveChanges>
                </RightTopContainer>
                <EditorCard>
                  <Title>Write your article</Title>
                  <EditorContent>
                    <Line>{this.renderTitle()}</Line>
                    <Line>{this.renderAuthors()}</Line>
                    <Line>{this.renderSelectMenus()}</Line>
                    <Line>{this.renderFigures()}</Line>
                  </EditorContent>
                  <ButtonContainer>
                    <Button>Submit Article</Button>
                  </ButtonContainer>
                </EditorCard>
              </EditorParent>
            </Container>
          </Parent>
        )}
      </div>
    );
  }
}

export default DocumentEditor;
