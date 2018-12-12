/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';
import wine from '../../assets/images/wine.svg';
import run from '../../assets/images/run.svg';
import golf from '../../assets/images/golf-field.svg';
import family from '../../assets/images/family.svg';
import ski from '../../assets/images/ski.svg';
import hiking from '../../assets/images/hiking.svg';
import hammock from '../../assets/images/hammock.svg';

const InterestsWrapper = styled('div')`
  background-color: ${colors.yellow};
  color: #333;
  width: 90%;
  height: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const IconDiv = styled('div')`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 90%
margin: auto;
`;

const Img = styled('img')`
  position: absolute;
  bottom: 20%;
  right: 40%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${colors.black};
  margin: 0.5rem;
  :hover {
    position: static;
    bottom: 0;
    right: 0;
  }
`;
const iconList = [wine, hiking, golf, family, ski, run, hammock];

const list = iconList.map((item, index) => <Img key={index} src={item} />);

export const Interests = () => (
  <InterestsWrapper>
    <h2>Interests</h2>
    <IconDiv>{list}</IconDiv>
  </InterestsWrapper>
);
