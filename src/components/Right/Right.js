import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import RightUnder from './RightText';
import { colors } from '../../theme';
import './Right.css';

const H2 = styled('h2')`
  padding-left: 5px;
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
    transform: translateX(10px);
  }
`;

const Right = props => {
  return (
    <>
      <RightUnder
        toggleState={props.toggleState}
        isActiveRight={props.isActiveRight}
        toggleStateLang={props.toggleStateLang}
        toggleLang={props.toggleLang}
      />

      <div
        className={
          props.isActiveRight
            ? ['rightSlider', 'active'].join(' ')
            : 'rightSlider'
        }
      >
        <H2 onClick={props.toggleState}>HANSSON</H2>
      </div>
    </>
  );
};
export default Right;
