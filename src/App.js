import React, { Component } from 'react';

import Left from './components/Left/Left';
import Right from './components/Right/Right';
import styled from '@emotion/styled';

const MainWrapper = styled('div')`
  background-color: transparent;
  max-width: 100%;
  display: flex;
  overflow: hidden;
`;

class App extends Component {
  state = {
    isActiveRight: false,
    isActiveLeft: false,
    animation: false
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
    this.animationStart();
  };

  animationStart = () => {
    const currentState = this.state.animation;
    this.setState({ animation: !currentState });
  };

  render() {
    return (
      <MainWrapper>
        <Left
          toggleState={this.toggleStateLeft}
          isActiveLeft={this.state.isActiveLeft}
          animation={this.state.animation}
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
