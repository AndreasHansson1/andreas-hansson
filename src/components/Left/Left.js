import React from 'react';
import styled, { css } from '@emotion/styled';
import LeftUnder from './LeftText';
import { colors } from '../../theme';
import './Left.css';
import leftArrowBlack from '../../assets/images/left-arrow-black.png';

const LeftSlider = styled('div')`
  background-color: ${colors.white};
  color: ${colors.black};
  height: 100vh;
  width: 50%;
  display: flex;
  position: absolute;
  top: 0;
  right: 50vw;
  justify-content: flex-end;
  align-items: center;
  transition-duration: 1s;
  transform: translateX(0);
  :hover {
    cursor: pointer;
    right: 200%;
  }
`;

const H2 = styled('h2')`
  padding-right: 5px;
  padding-left: 1rem;
`;

const Left = props => {
  return (
    <>
      <LeftUnder toggleState={props.toggleState} />

      <div
        className={
          props.isActiveLeft ? ['leftSlider', 'active'].join(' ') : 'leftSlider'
        }
      >
        <img src={leftArrowBlack} alt="arrow" onClick={props.toggleState} />
        <H2>ANDREAS</H2>
      </div>
    </>
  );
};

export default Left;
