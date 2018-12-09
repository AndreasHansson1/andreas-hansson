import React from 'react';
import styled, { css } from '@emotion/styled';
import LeftUnder from './LeftText';
import { colors } from '../../theme';
import './Left.css';

const H2 = styled('h2')`
  padding-right: 5px;
  :hover {
    cursor: pointer;
  }
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
        <H2 onClick={props.toggleState}>ANDREAS</H2>
      </div>
    </>
  );
};

export default Left;
