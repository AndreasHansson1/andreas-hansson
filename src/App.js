/** @jsx jsx */
import React, { Component } from 'react';
import Left from './components/Left/Left';
import Right from './components/Right/Right';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from './theme';

const MainWrapper = styled('div')`
  background-color: ${colors.darkGrey};
  max-width: 1400px;
  border-right: 1px solid ${colors.black};
  margin: auto;
  display: flex;
  overflow: hidden;
`;

class App extends Component {
  state = {
    isActiveRight: false,
    isActiveLeft: false
  };

  toggleStateRight = () => {
    const currentState = this.state.isActiveRight;
    this.setState({
      isActiveRight: !currentState
    });
  };
  toggleStateLeft = () => {
    const currentState = this.state.isActiveLeft;
    this.setState({
      isActiveLeft: !currentState
    });
  };

  render() {
    return (
      <MainWrapper
        css={css`
          @media (min-width: 800px) {
            flex-directions: column;
          }
        `}
      >
        <Left
          toggleState={this.toggleStateLeft}
          isActiveLeft={this.state.isActiveLeft}
        />
        <Right
          toggleState={this.toggleStateRight}
          isActiveRight={this.state.isActiveRight}
        />
      </MainWrapper>
    );
  }
}

export default App;
