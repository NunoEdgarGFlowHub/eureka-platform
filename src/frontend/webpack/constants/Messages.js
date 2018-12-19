import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {openTxModal} from '../reducers/txPool.js';
import connect from 'react-redux/es/connect/connect.js';

const Notification = styled.div``;

const MyLink = styled(Link)`
  font-weight: bold;
  margin: 0 2px;
`;

const mapDispatchToProps = dispatch => ({
  openModal: () => {
    dispatch(openTxModal());
  }
});

const TransactionTracker = connect(
  null,
  mapDispatchToProps
)(({name, ...otherProps}) => {
  return (
    <Fragment>
      <strong>Dear {name},‍</strong>,
      <br />
      You can track this transaction by clicking{' '}
      <strong
        onClick={() => {
          otherProps.openModal();
        }}
      >
        here.
      </strong>
      <br />
    </Fragment>
  );
});

const Linker = ({path, ...otherProps}) => {
  return (
    <Fragment>
      <MyLink to={path}>{otherProps.children}</MyLink>
    </Fragment>
  );
};

export const EDITOR_ARTICLE_ASSIGNMENT = () => {
  return (
    <Notification>
      <TransactionTracker name={'handling Editor'} />
      If you want to sign off this article and thus continuing the editorial
      assessment process click
      <Linker path={'signoff'}>here</Linker>.
    </Notification>
  );
};
