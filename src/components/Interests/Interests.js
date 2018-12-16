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
import cooking from '../../assets/images/cooking.svg';

const InterestsWrapper = styled('div')`

  color: ${colors.black}
  display: flex;
  text-align: center;
  
`;

const IconDiv = styled('div')`
  position: relative;
`;

const H2 = styled('h2')``;

const Img = styled('img')`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid ${colors.black};
  margin: 0.5rem;
  animation: sliding 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;
  animation-fill-mode: backwards;

  :nth-of-type(1) {
    background-color: ${colors.primaryLight};
    animation-delay: 0s;
    transform: translate(-6rem, 0);
  }
  :nth-of-type(2) {
    background-color: ${colors.orange};
    animation-delay: 0.2s;
    transform: translate(-9rem, 5rem);
  }
  :nth-of-type(3) {
    background-color: ${colors.yellow};
    animation-delay: 0.4s;
    transform: translate(-8rem, 10rem);
  }
  :nth-of-type(4) {
    background-color: ${colors.tertiary};
    animation-delay: 0.6s;
    transform: translate(-3rem, 13rem);
  }
  :nth-of-type(5) {
    background-color: ${colors.secondary};
    animation-delay: 0.8s;
    transform: translate(2rem, 10rem);
  }
  :nth-of-type(6) {
    background-color: ${colors.primaryDark};
    animation-delay: 1s;
    transform: translate(4rem, 5rem);
  }
  :nth-of-type(7) {
    background-color: ${colors.primaryMedium};
    animation-delay: 1.2s;
    transform: translate(0, 0);
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
    60% {
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

const iconList = [wine, hiking, golf, family, ski, run, cooking];

const list = iconList.map((item, index) => <Img key={index} src={item} />);

export const Interests = props => (
  <InterestsWrapper>
    <H2>Interests</H2>
    <IconDiv>{props.isActiveRight ? list : null}</IconDiv>
  </InterestsWrapper>
);
