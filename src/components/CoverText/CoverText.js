/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '../../theme';
import { Interests } from './../Interests/Interests';

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
  background-color: ${colors.secondary};
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
    <H2>About Me</H2>

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
        you see my courses. I´ve done one internship at a digital agency called
        Glomo at the end of 2018. At Glomo I mostly worked on their own site,
        built with React on the frontend and Wordpress as backend. It was fun
        and I´ve learned a´lot! <br />
        <br />
        Best <br />
        Andreas Hansson
      </P>
    </ParagraphWrapper>
    <Interests isActiveRight={props.isActiveRight} />
  </CoverWrapper>
);
