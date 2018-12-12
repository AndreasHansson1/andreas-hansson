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
  background-color: ${colors.white};
  color: ${colors.black};
  width: 90%;
  height: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const IconDiv = styled('div')`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 90%
height: 30%;
margin: auto;
`;

const H2 = styled('h2')``;

const Img = styled('img')`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid ${colors.black};
  margin: 0.5rem;
  animation: sliding 5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s;
  animation-fill-mode: backwards;

  :nth-of-type(1) {
    animation-delay: 0s;
  }
  :nth-of-type(2) {
    animation-delay: 0.2s;
  }
  :nth-of-type(3) {
    animation-delay: 0.4s;
  }
  :nth-of-type(4) {
    animation-delay: 0.6s;
  }
  :nth-of-type(5) {
    animation-delay: 0.8s;
  }
  :nth-of-type(6) {
    animation-delay: 1s;
  }
  :nth-of-type(7) {
    animation-delay: 1.2s;
  }

  @keyframes sliding {
    0% {
      opacity: 0;
      transform: translate3d(20rem, 20rem, 0);
    }
    20% {
      opacity: 0;
      transform: translate3d(18rem, 25rem, 0);
    }
    40% {
      opacity: 0;
      transform: translate3d(15rem, 18rem, 0);
    }
    600% {
      opacity: 0;
      transform: translate3d(17rem, 14rem, 0);
    }
    80% {
      transform: translate3d(-1.8rem, -1rem, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0);
    }
  }
`;

const iconList = [wine, hiking, golf, family, ski, run, hammock];

const list = iconList.map((item, index) => <Img key={index} src={item} />);

export const Interests = props => (
  <InterestsWrapper>
    <H2>Interests</H2>
    <IconDiv>{props.isActiveRight ? list : null}</IconDiv>
  </InterestsWrapper>
);
