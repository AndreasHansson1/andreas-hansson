import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Cards } from './../Cards/Cards';
import rightArrowBlack from '../../assets/images/right-arrow-black.png';

const LeftText = styled('div')`
  background-color: ${colors.yellow};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const text1 =
  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugiat?';

const LeftUnder = props => (
  <LeftText>
    <Cards>
      <p>{text1}</p>
    </Cards>

    <img src={rightArrowBlack} alt="arrow" onClick={props.toggleState} />
  </LeftText>
);

export default LeftUnder;
