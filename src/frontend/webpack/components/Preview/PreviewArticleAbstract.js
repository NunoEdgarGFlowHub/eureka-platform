import React, {Fragment} from 'react';
import styled from 'styled-components';
import {renderField} from '../TextEditor/DocumentRenderer.mjs';
import {PreviewArticleTitleByField} from './PreviewArticleTitleByField.js';
import {
  FieldContainer,
  ReviewsWriterFieldContainer
} from '../Reviews/Annotations/ReviewsWriterField.js';
import ReviewsWriterContainer from '../Reviews/Annotations/WriterContainer.js';
import {tokenizeSentence} from '../Reviews/Annotations/SentenceTokenizer.js';
import GridSpinner from '../../views/spinners/GridSpinner.js';
import {CommentIcon} from '../Reviews/Annotations/CommentIcon.js';
import Icon from '../../views/icons/Icon.js';

const Container = styled.div``;

const Circle = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  margin-top: ${props => props.marginTop}px;
  right: -65px;
  z-index: 100000000;
  width: 30px;
  height: 30px;
`;
const FIELD = 'abstract';

class PreviewArticleAbstract extends React.Component {
  constructor(props) {
    super(props);
    const abstract =
      'African sleeping sickness is a tropical disease caused by Trypanosoma brucei gambiense or T. b. rhodesiense. Both subspecies are transmitted by the tsetse fly. In general, an infection is lethal without an effective treatment. We used a rodent efficacy model to test 4 compounds that had been previously identified in a novel in vitro screen as activators of parasite differentiation from bloodstream towards procyclic forms. The 4 compounds were trypanocidal in vitro. However, none of the compounds showed trypanocidal activity in vivo. Snapshot pharmacokinetic (PK) profiles indicated that the compound exposure was too low after intraperitoneal administration, which explains the lack of efficacy. Garden eels live in burrows from which they protrude their bodies to feed on planktonic organisms, show courtship behavior and reproduce, and in which they seek refuge from predators. Despite universal acceptance that garden eels retract into their burrows for predator avoidance, a surprising lack of published accounts of this behaviour exists. Here, opportunist observations made during shark abundance video surveys, show reactions of garden eels during encounters with potential predators and other large-bodied organisms. Brown garden eels (Heteroconger longissimus) were observed during ten encounters with larger fish, and showed variable responses to five different large-bodied species. Varied responses suggested an ability to discriminate between organisms and react according to relative predation risk and proximity. The largest reactions were in response to encounters with piscivorous teleosts, the most likely predators of garden eels. Multiple encounters with two species of sharks, both improbable predators, resulted in a less pronounced reaction, consistent across encounters but variable with proximity. An encounter with a non-predator teleost resulted in the mildest response, despite very close proximity. These observations suggest that garden eels have the ability to discriminate between large-bodied organisms, and react according to relative predation risk.';
    this.state = {
      sentences: tokenizeSentence(abstract).map(sentence => {
        return {
          text: sentence,
          offsetTop: null
        };
      }),
      onShow: null
    };
  }
  componentDidMount() {
    const sentences = [...this.state.sentences];
    this.setState({
      sentences: sentences.map((s, i) => {
        const ref = this.refs[`${FIELD}${i}`];
        const offsetTop = ref.offsetTop;
        return {
          text: s.text,
          offsetTop
        };
      })
    });
  }

  render() {
    return (
      <Container id={FIELD}>
        <PreviewArticleTitleByField field={FIELD} />
        <ReviewsWriterFieldContainer>
          <FieldContainer>
            {this.state.sentences.map((sentence, i) => {
              const id = FIELD + i;
              let marginTop = 0;

              if (i !== this.state.sentences.length - 1) {
                if (
                  sentence.offsetTop === this.state.sentences[i + 1].offsetTop
                )
                  marginTop = -12;
                {
                }
              }

              return (
                <Fragment key={i}>
                  {this.props.isReview ? (
                    <Circle
                      id={id}
                      index={i}
                      marginTop={marginTop}
                      top={sentence.offsetTop}
                      onMouseEnter={() => {
                        this.setState({onShow: i});
                      }}
                      innerRef={ref => (this[`${FIELD}${i}`] = ref)}
                    >
                      {this.state.onShow === i ? (
                        <CommentIcon show={true} />
                      ) : null}
                    </Circle>
                  ) : null}
                  <span
                    id={id}
                    key={i}
                    ref={id}
                    className={this.state.onShow === i ? 'highlightSpan' : null}
                  >
                    {sentence.text + ' '}
                  </span>
                </Fragment>
              );
            })}
          </FieldContainer>
          {this.props.isReview ? (
            <Fragment>
              <ReviewsWriterContainer
                onShow={this.state.onShow}
                field={FIELD}
                {...this.props}
              />
            </Fragment>
          ) : null}
        </ReviewsWriterFieldContainer>
      </Container>
    );
  }
}
export default PreviewArticleAbstract;
