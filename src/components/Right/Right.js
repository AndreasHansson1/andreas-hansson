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
    to right,
    ${colors.orange},
    ${colors.darkOrange}
  );
  -webkit-background-clip: text;
  color: transparent;
  :hover {
    cursor: pointer;
  }
`;

const Right = props => {
  return (
    <>
      <RightUnder
        toggleState={props.toggleState}
        isActiveRight={props.isActiveRight}
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
