import React from 'react';
import {connect} from 'react-redux';
import {Web3Context} from '../../../contexts/Web3Context.js';
import {addTransaction} from '../../../reducers/transactions.js';
import SC_TRANSACTIONS_TYPE from '../../../../../backend/schema/sc-transaction-state-enum.mjs';
import {fetchingArticleData} from '../../../reducers/article.js';
import ActionButton from './ActionButton.js';
import {__FIFTH} from '../../../../helpers/colors.js';
import {SIGN_UP_FOR_REVIEWING} from './ButtonsNaming.js';
import {isGanache} from '../../../../../helpers/isGanache.mjs';
import toast from 'react-toastify';

export const signUpForReviewing = async (web3Context, props, callback) => {
  let gasAmount;
  // gas estimation on ganache doesn't work properly
  if (!isGanache(web3Context.web3))
    gasAmount = await signUpForReviewing(
      web3Context.platformContract,
      props.article.articleHash
    ).estimateGas({
      from: props.selectedAccount.address
    });
  else gasAmount = 80000000;

  signUpForReviewing(
    web3Context.platformContract,
    props.article.articleHash
  )
    .send({
      from: props.selectedAccount.address,
      gas: gasAmount
    })
    .on('transactionHash', tx => {
      props.addTransaction(SC_TRANSACTIONS_TYPE.ARTICLE_ACCEPTED, tx);
      // toast.info(
      //   <EditorInfoMessage
      //     path={'signoff'}
      //     text={'Your article will be assigned to you in the next minutes.'}
      //   />
      // );
    })
    .on('receipt', async receipt => {
      console.log(
        'Accepting article version with article hash ' +
        props.article.articleHash +
        ' exits with status ' +
        receipt.status
      );
      callback();
    })
    .catch(err => {
      toast.error(err.toLocaleString(), {autoClose: false});
    });
};

const mapStateToProps = state => ({
  selectedAccount: state.accountsData.selectedAccount
});

const mapDispatchToProps = dispatch => ({
  addTransaction: (txType, tx) => {
    dispatch(addTransaction(txType, tx));
  },
  fetchingArticleData: articleId => {
    dispatch(fetchingArticleData(articleId));
  }
});

export const SignUpForExpertReviewButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  return (
    <Web3Context.Consumer>
      {web3Context => {
        return (
          <ActionButton
            icon={'myReviews'}
            background={__FIFTH}
            dataTip={'signUpForReviewing'}
            onClick={() => {
              signUpForReviewing(web3Context, props, () => {
                props.fetchingArticleData(props.article._id);
              });
            }}
            title={SIGN_UP_FOR_REVIEWING.tooltip}
          >
            {SIGN_UP_FOR_REVIEWING.label}
          </ActionButton>
        );
      }}
    </Web3Context.Consumer>
  );
});
