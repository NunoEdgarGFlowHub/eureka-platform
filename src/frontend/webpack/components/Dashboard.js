import React, {Component} from 'react';
import styled from 'styled-components';
import {Card} from '../views/Card.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Card width={1000} title={'Your Dashboard'} />
      </Container>
    );
  }
}

export default Dashboard;