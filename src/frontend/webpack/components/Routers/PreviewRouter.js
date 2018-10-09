import React, {Component} from 'react';
import styled from 'styled-components';
import {Route} from 'react-router';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import Preview from '../Preview.js';
import {Card} from '../../views/Card.js';
import {Go} from './Go.js';
import GridSpinner from '../../views/spinners/GridSpinner.js';
import {renderField} from '../TextEditor/DocumentRenderer.mjs';
import Avatar from '../../views/Avatar.js';
import PreviewStatus from '../../views/PreviewStatus.js';
import {__FIFTH, __GRAY_100, __GRAY_200} from '../../../helpers/colors.js';
import {fetchArticle} from '../TextEditor/DocumentMainMethods.js';
import Document from '../../../../models/Document.mjs';
import {deserializeDocument} from '../../../../helpers/documentSerializer.mjs';
import queryString from 'query-string';
import {getDomain} from '../../../../helpers/getDomain.mjs';
import Modal from '../../design-components/Modal.js';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MySeparator = styled.div`
  height: 2px;
  display: flex;
  width: 75%;
  background: ${__GRAY_100};
  justify-content: center;
  margin-top: 25px;
`;

const MyPreview = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
`;

const LeftSide = styled.div`
  flex: 1 1 0;
`;

const ArticlePreview = styled.div`
  flex: 3.5 1 0;
  max-width: 820px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: bold;
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  margin-top: 0;
`;

const ArticlePreviewNavBar = styled.div`
  width: 95%;
  border-radius: 6px;
  margin: 50px 0;
  letter-spacing: 0.5px;
`;

const MyInfo = styled.div`
  background: ${__FIFTH};
  flex: 1;
`;

const MyAuthors = styled.div`
  flex: 1;
  background: ${__GRAY_200};
`;

const Navs = styled.div`
  display: flex;
  height: 4px;
`;

const MyLabels = styled.div`
  font-weight: bold;
  display: flex;
`;

const MyLink = styled(NavLink)`
  &:hover {
    transform: translateY(0.5px);
  }
  transition: 0.25s all;
  text-decoration: none;
  flex: 1;
  font-size: 16px;
  color: ${__FIFTH};
  margin-bottom: 10px;
  cursor: pointer;
  &.${props => props.activeClassName} {
    font-weight: bold;
    color: red;
  }
`;

MyLink.defaultProps = {
  activeClassName: 'active'
};

const Bar = styled.div`
  flex: 1;
  background: ${__GRAY_200};
  height: 4px;
  margin-top: 10px;
`;

const Avatars = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

class PreviewRouter extends Component {
  constructor() {
    super();
    this.state = {
      document: null,
      authorsData: null
    };
  }

  componentDidMount() {
    const draftId = this.props.match.params.id;
    fetchArticle(draftId)
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          let document = new Document(response.data.document);
          let deserialized = deserializeDocument(document);
          this.setState({
            _id: response.data._id,
            document: deserialized
          });
          this.fetchAuthorsData();
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
  }

  fetchAuthorsData() {
    const query = queryString.stringify({
      ethAddress: this.state.document.authors
    });

    fetch(`${getDomain()}/api/users?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          let authorsData = Array.isArray(response.data)
            ? response.data
            : [response.data];
          this.setState({authorsData});
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderModal() {
    return (
      <div>
        {' '}
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
      </div>
    );
  }
  render() {
    return (
      <Container>
        {this.renderModal()}

        <Card width={1000} title={'Preview '}>
          <Go back {...this.props} />
          <MySeparator />
          {!this.state.document || !this.state.authorsData ? (
            <GridSpinner />
          ) : (
            <MyPreview>
              <LeftSide />
              <ArticlePreview>
                <Title>{renderField(this.state.document, 'title')}</Title>
                <Avatars>
                  {this.state.authorsData.map((author, i) => {
                    return (
                      <Avatar
                        key={i}
                        avatar={author.avatar}
                        width={40}
                        height={40}
                        right={18}
                      />
                    );
                  })}
                </Avatars>

                <PreviewStatus status={this.state.document.state} />

                <ArticlePreviewNavBar>
                  <MyLabels>
                    <MyLink
                      to={`${this.props.base}/${
                        this.props.match.params.id
                      }/article`}
                    >
                      Article
                      <Bar />
                    </MyLink>
                    <MyLink
                      to={`${this.props.base}/${
                        this.props.match.params.id
                      }/authors`}
                    >
                      Authors
                      <Bar />
                    </MyLink>
                    <MyLink
                      to={`${this.props.base}/${
                        this.props.match.params.id
                      }/info`}
                    >
                      Info
                      <Bar />
                    </MyLink>
                  </MyLabels>
                </ArticlePreviewNavBar>

                <Route
                  exact
                  path={`${this.props.base}/${
                    this.props.match.params.id
                  }/article`}
                  render={() => <div>QUI RENDERI L'ARTICOLO</div>}
                />

                <Route
                  exact
                  path={`${this.props.base}/${
                    this.props.match.params.id
                  }/authors`}
                  render={() => <div>QUI RENDERI GLI AUTHORS</div>}
                />

                <Route
                  render={() => (
                    <Redirect
                      to={`${this.props.base}/${
                        this.props.match.params.id
                      }/article`}
                    />
                  )}
                />
              </ArticlePreview>
            </MyPreview>
          )}
        </Card>
      </Container>
    );
  }
}

export default withRouter(PreviewRouter);
