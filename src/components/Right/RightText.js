import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { CoverText } from './../CoverText/CoverText';

import { colors } from '../../theme';

const RightText = styled('div')`
  background-color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const Button = styled('a')`
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 5px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 900;
  border-radius: 10rem;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const RightUnder = props => (
  <RightText>
    <Button
      css={`
        color: ${colors.black};
      `}
      onClick={props.toggleState}
    >
      X
    </Button>
    <CoverText isActiveRight={props.isActiveRight} />
  </RightText>
);

export default RightUnder;
