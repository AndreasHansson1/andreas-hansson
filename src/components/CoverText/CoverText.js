/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '../../theme';

const CoverWrapper = styled('div')`
  background-color: transparent;
  color: ${colors.black};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
`;

const H2 = styled('h2')`
  max-height: 2rem;
  width: 10rem;
  padding: 5px;
  margin-right: 0.5rem;
  text-align: center;
  background-color: ${colors.primaryLight};
  color: ${colors.black};
`;

const ParagraphWrapper = styled('div')`
  width: 90%;
`;

const P = styled('p')`
  line-height: 1.7;
`;

const A = styled('a')`
  :hover {
    cursor: pointer;
  }
`;

export const CoverText = props => (
  <CoverWrapper>
    <H2>Cover Letter</H2>

    <ParagraphWrapper>
      <P>
        Im am changing my career from social work to web development right now
        and I´m so glad I´m doing this. Even though I liked my earlier job, this
        is so much fun. I love to learn so many new things! I´m studying at
        Nackademin, and
        <A href="https://nackademin.se/utbildningar/frontend-utvecklare/">
          {' '}
          HERE{' '}
        </A>
        you see my courses. I did one internship at a digital agency called
        Glomo at the end of 2018. At Glomo I mostly worked on their own site,
        built with React on the frontend and Wordpress as backend. It was fun
        and did learn a lot! <br />
        <br />
        As a person I am pretty calm and always tries to do my best. I am loyal
        and have high integrity. I am married and have two kids. I like to
        workout, but can not do it as often as before. I have decided to
        complete a marathon during 2019 thou and is excited about that. I also
        like to play golf, padel, fishing cook food and loves to ski.
        <br />
        <br />
        Best <br />
        Andreas Hansson
      </P>
    </ParagraphWrapper>
  </CoverWrapper>
);
