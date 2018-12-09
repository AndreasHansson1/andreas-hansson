import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import RightUnder from './RightText';
import { colors } from '../../theme';
import './Right.css';

// const RightSlider = styled('div')`
//   background-color: ${colors.black};
//   color: #fff;
//   height: 100vh;
//   width: 50%;
//   display: flex;
//   position: absolute;
//   top: 0;
//   right: 0;
//   justify-content: flex-start;
//   align-items: center;
//   :active {
//     right: -50vh;
//   }
// `;

// const ActiveSlider = styled('div')`
//   background-color: ${colors.black};
//   color: #fff;
//   height: 100vh;
//   width: 50%;
//   display: flex;
//   position: absolute;
//   top: 0;
//   right: -50vh;
//   justify-content: flex-start;
//   align-items: center;
//   transition: all 1.5s ease;
// `;

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
