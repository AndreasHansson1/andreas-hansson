/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const ContactWrapper = styled('div')`
  background-color: ${colors.white};
  color: #333;
  max-width: 4rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const A = styled('a')`
  width: 4rem;
  color: #333;
  text-decoration: none;
  margin-bottom: 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const Contact = () => (
  <ContactWrapper>
    <A href="https://www.linkedin.com/in/andreas-hansson-/">
      <i className="fab fa-linkedin fa-4x" title="LinkedIn" />
    </A>
    <A href="https://github.com/AndreasHansson1">
      <i className="fab fa-github-square fa-4x" title="Github" />
    </A>
    <A href="mailto:andreas_hansson@hotmail.se">
      <i
        className="fas fa-envelope-square fa-4x"
        title="andreas_hansson@hotmail.se"
      />
    </A>{' '}
    <i className="fas fa-phone-square fa-4x" title="0735-75 35 36" />
  </ContactWrapper>
);
