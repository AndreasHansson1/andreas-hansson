import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Cards } from './../Cards/Cards';

const LeftText = styled('div')`
  background-color: ${colors.yellow};
  height: 100vh;
  width: 50%;
  position: relative;

  transform: translateX(0);
`;

const text1 =
  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugiat?';

const LeftUnder = props => (
  <LeftText>
    <Cards>
      <p>{text1}</p>
    </Cards>

    <button onClick={props.toggleState}>X</button>
  </LeftText>
);

export default LeftUnder;
