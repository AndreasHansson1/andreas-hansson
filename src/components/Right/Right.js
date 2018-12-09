import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import RightUnder from './RightText';
import { colors } from '../../theme';
import './Right.css';

const H2 = styled('h2')`
  padding-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

const Right = props => {
  return (
    <>
      <RightUnder toggleState={props.toggleState} />

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
