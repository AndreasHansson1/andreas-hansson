import React from 'react';
import styled from '@emotion/styled';
import LeftUnder from './LeftText';
import { colors } from '../../theme';
import './Left.css';

const H2 = styled('h2')`
  padding-right: 5px;
  display: inline-block;
  background-image: linear-gradient(
    ${colors.primaryLight},
    ${colors.primaryDark}
  );
  -webkit-background-clip: text;
  color: transparent;
  transition: transform 300ms ease-in;
  :hover {
    cursor: pointer;
    transform: translateX(-10px);
  }
`;

const Left = props => {
  return (
    <>
      <LeftUnder
        toggleState={props.toggleState}
        isActiveLeft={props.isActiveLeft}
      />

      <div
        className={
          props.isActiveLeft ? ['leftSlider', 'active'].join(' ') : 'leftSlider'
        }
      >
        <H2 onClick={props.toggleState}>ANDREAS</H2>
      </div>
    </>
  );
};

export default Left;
