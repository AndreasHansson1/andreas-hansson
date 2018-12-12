/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';
import avatar from '../../assets/images/avatar.jpg';
import { Interests } from './../Interests/Interests';

const CoverWrapper = styled('div')`
  background-color: ${colors.yellow};
  color: ${colors.black};
  width: 90%;
  height: 95%;
  margin: auto;
  display: flex;

  justify-content: space-around;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

const H2 = styled('h2')`
  max-height: 2rem;
  width: 10rem;
  padding: 5px;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
`;

const P = styled('p')`
  line-height: 1.5;
`;

const A = styled('a')`
  :hover {
    cursor: pointer;
  }
`;

export const CoverText = () => (
  <CoverWrapper>
    <Avatar alt="avatar" src={avatar} />
    <H2>About Me</H2>
    <P>
      Im am changing my career from social work to web development right now and
      I´m so glad I´m doing this. Even though I liked my earlier job, this is so
      much fun. I love to learn so many new things! I´m studying at Nackademin,
      and
      <A href="https://nackademin.se/utbildningar/frontend-utvecklare/">
        {' '}
        HERE{' '}
      </A>
      you see my courses. I´ve done one internship at a digital agency called
      Glomo at the end of 2018. At Glomo I mostly worked on their own site,
      built with React on the frontend and Wordpress as backend. It was fun and
      I´ve learned a´lot! <br />
      <br />
      Best <br />
      Andreas Hansson
    </P>
    <Interests />
  </CoverWrapper>
);