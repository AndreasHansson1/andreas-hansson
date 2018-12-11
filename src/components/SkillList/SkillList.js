/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const ListWrapper = styled('div')`
  color: ${colors.black};
  min-width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

const UL = styled('ul')`
  list-style: none;
  padding: 0;
  text-decoration: none;
`;

const LI = styled('li')`
  margin: 1rem;
  margin-left: 0;
  font-size: 1.2rem;
  animation-duration: 3s;
  animation-name: slidein;
  :nth-child(1) {
    animation-delay: 0s;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    animation-delay: 0.4s;
  }
  :nth-child(4) {
    animation-delay: 0.6s;
  }
  :nth-child(5) {
    animation-delay: 0.8s;
  }
  :nth-child(6) {
    animation-delay: 1s;
  }
  :nth-child(7) {
    animation-delay: 1.2s;
  }
  :nth-child(8) {
    animation-delay: 1.4s;
  }
  :nth-child(9) {
    animation-delay: 1.6s;
  }
  :nth-child(10) {
    animation-delay: 1.8s;
  }

  @keyframes slidein {
    from {
      margin-left: 150%;
      opacity: 0;
      to {
        margin-left: 0%;
        opacity: ;
      }
    }
  }
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
    <UL>{props.animation ? list : null}</UL>
  </ListWrapper>
);
