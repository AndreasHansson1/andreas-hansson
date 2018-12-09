import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import leftArrowBlack from '../../assets/images/left-arrow-black.png';

const RightText = styled('div')`
  background-color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const RightUnder = props => (
  <RightText>
    <img src={leftArrowBlack} alt="arrow" onClick={props.toggleState} />
  </RightText>
);

export default RightUnder;
