/** @jsx jsx */
import React, { Component } from 'react';
import Left from './components/Left/Left';
import Right from './components/Right/Right';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from './theme';

const MainWrapper = styled('div')`
  background-color: ${colors.darkGrey};
  max-width: 1200px;
  border-right: 1px solid ${colors.black};
  margin: auto;
  display: flex;
  box-shadow: 0 0 4rem black;
  @media (max-width: 700px) {
    display: flex;
    flex-directions: column;
    overflow: scroll;
  }
`;

class App extends Component {
  state = {
    isActiveRight: false,
    isActiveLeft: false,
    toggleLang: false
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

  toggleStateLang = () => {
    const currentState = this.state.toggleLang;
    this.setState({
      toggleLang: !currentState
    });
  };

  render() {
    return (
      <MainWrapper>
        <Left
          toggleState={this.toggleStateLeft}
          isActiveLeft={this.state.isActiveLeft}
        />
        <Right
          toggleState={this.toggleStateRight}
          isActiveRight={this.state.isActiveRight}
          toggleStateLang={this.toggleStateLang}
          toggleLang={this.state.toggleLang}
        />
      </MainWrapper>
    );
  }
}

export default App;
