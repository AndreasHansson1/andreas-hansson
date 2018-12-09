import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';

const RightText = styled('div')`
  background-color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
  overflow: hidden;
  transform: translateX(0);
`;

const RightUnder = props => (
  <RightText>
    Some text
    <button onClick={props.toggleState}>X</button>
  </RightText>
);

export default RightUnder;
