/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const ContactWrapper = styled('div')`
  background-image: linear-gradient(
    ${colors.primaryLight},
    ${colors.primaryDark}
  );
  color: ${colors.black};
  border-right: 8px solid ${colors.black};
  max-width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  margin: 0.5rem 0 0 0.5rem;
`;

const A = styled('a')`
  width: 4rem;
  color: #333;
  text-decoration: none;
  margin-bottom: 2rem;
  :hover {
    cursor: pointer;
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const Contact = () => (
  <ContactWrapper>
    <A href="https://www.linkedin.com/in/andreas-hansson-/">
      <i className="fab fa-linkedin fa-3x" title="LinkedIn" />
    </A>
    <A href="https://github.com/AndreasHansson1">
      <i className="fab fa-github-square fa-3x" title="Github" />
    </A>
    <A href="mailto:andreas_hansson@hotmail.se">
      <i
        className="fas fa-envelope-square fa-3x"
        title="andreas_hansson@hotmail.se"
      />
    </A>{' '}
    <A>
      <i className="fas fa-phone-square fa-3x" title="0735-75 35 36" />
    </A>
  </ContactWrapper>
);
