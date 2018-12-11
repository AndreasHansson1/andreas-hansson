/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const ListWrapper = styled('div')`
  background-color: ${colors.white};
  color: ${colors.black};
  max-width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const UL = styled('ul')`
  list-style: none;
  padding: 0;
  text-decoration: none;
`;

const LI = styled('li')`
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
  animation-duration: 3s;
  animation-name: slidein;
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
  :nth-of-type(8) {
    animation-delay: 1.4s;
  }
  :nth-of-type(9) {
    animation-delay: 1.6s;
  }
  :nth-of-type(10) {
    animation-delay: 1.8s;
  }
  ::before {
    opacity: 0;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
      visibility: visible;
      opacity: 0;
      to {
        margin-left: 0%;
        width: 100%;
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

const H2 = styled('h2')`
  padding-bottom: 0;
  margin-bottom: 0;
`;

const listItems = [
  'JavaScript',
  'React',
  'Git',
  'SASS',
  'Emotion',
  'Node.js',
  'Scrum',
  'PHP/MySQL',
  'Photoshop'
];

const list = listItems.map((item, index) => <LI key={index}>{item}</LI>);

export const SkillList = props => (
  <ListWrapper>
    <H2>Skills</H2>
    <UL>{props.animation ? list : null}</UL>
  </ListWrapper>
);
