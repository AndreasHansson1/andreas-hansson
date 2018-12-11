/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';
import wine from '../../assets/images/wine.png';
import jogging from '../../assets/images/jogging.png';
import golf from '../../assets/images/birdie.png';
import family from '../../assets/images/family.png';
import cableCar from '../../assets/images/cable-car-cabin.png';
import mountain from '../../assets/images/mountain.png';
import airplane from '../../assets/images/airplane.png';

const InterestsWrapper = styled('div')`
  background-color: ${colors.yellow};
  color: #333;
  width: 90%;
  height: 35%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const IconDiv = styled('div')`
display: flex;
justify-content: space-around;
width: 90%
margin: auto;
`;

const Img = styled('img')`
  width: 32px;
  height: 32px;
`;
const iconList = [wine, jogging, golf, family, cableCar, mountain, airplane];

const list = iconList.map((item, index) => <Img key={index} src={item} />);

export const Interests = () => (
  <InterestsWrapper>
    <h2>Interests</h2>
    <IconDiv>{list}</IconDiv>
  </InterestsWrapper>
);
