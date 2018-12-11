import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { CoverText } from './../CoverText/CoverText';

import { colors } from '../../theme';

const RightText = styled('div')`
  background-color: ${colors.grey};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const Button = styled('button')`
  position: fixed;
  top: 7px;
  right: 47vw;
`;

const RightUnder = props => (
  <RightText>
    <Button onClick={props.toggleState}>X</Button>
    <CoverText />
  </RightText>
);

export default RightUnder;
