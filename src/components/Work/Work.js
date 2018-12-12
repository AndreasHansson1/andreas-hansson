/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const WorkWrapper = styled('div')`
  background-color: ${colors.grey};
  color: ${colors.black};
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem 0.5rem 0 0;
`;

const H3 = styled('h3')`
  background-color: ${colors.yellow};
  max-width: 55%;
`;

export const Work = () => (
  <WorkWrapper>
    <div>
      <h2>Work Experience</h2>
      <H3>Glomo </H3>
      <small>Oct 2018 - Dec 2018</small>
      <p>Internship as a front-end developer</p>
      <H3>Sundbyberg Stad </H3>
      <small>Aug 2013 - Aug 2017</small>
      <p>Social Worker</p>
    </div>
    <div>
      <H3>Sigtuna Kommun</H3>
      <small>Jan 2011 - Aug 2013</small>
      <p>Social Worker</p>
    </div>
  </WorkWrapper>
);
