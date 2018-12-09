import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../theme';
import leftArrowBlack from '../../assets/images/left-arrow-black.png';
import avatar from '../../assets/images/avatar.jpg';

const RightText = styled('div')`
  background-color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const TextWrapper = styled('div')`
  width: 90%;
  border: 1px solid #333;
  padding: 0.5rem;
  display: flex;
`;

const TextDiv = styled('div')`
  display: flex;
  align-items: center;
  line-height: 1.7;
`;

const imageBase = css`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

const Avatar = styled.img`
  composes: ${imageBase};
  border: 2px solid ${colors.yellow};
`;

const RightUnder = props => (
  <RightText>
    <TextWrapper>
      <Avatar alt="avatar" src={avatar} />
      <h1>About Me</h1>
      <TextDiv>
        <p>
          Im am changing my career from social work to web development right now
          and im so glad I do this. Even though I liked my earlier job, this is
          so much fun. I love to learn so many new things! Im studying at
          Nackademin, and
          <a href="https://nackademin.se/utbildningar/frontend-utvecklare/">
            HERE
          </a>
          you see my courses. Im done one internship at a digital agency called
          Glomo. Now I rather look for companies who seems to have a wider
          spectrum and a good, healthy culture. Best Andreas Hansson
        </p>
      </TextDiv>
    </TextWrapper>
    <img src={leftArrowBlack} alt="arrow" onClick={props.toggleState} />
  </RightText>
);

export default RightUnder;
