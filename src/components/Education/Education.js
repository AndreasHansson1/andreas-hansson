/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const EducationWrapper = styled('div')`
  background-color: ${colors.yellow};
  color: ${colors.black};
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const H2 = styled('h2')`
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const Education = () => (
  <EducationWrapper>
    <div>
      <H2>Education</H2>
      <h3>Nackademin </h3>
      <p>Front-End Developer 2017-2019</p>
    </div>
    <div>
      <h3>Örebro University</h3>
      <p>Bachelor Social Science 2007-2011</p>
    </div>
  </EducationWrapper>
);
