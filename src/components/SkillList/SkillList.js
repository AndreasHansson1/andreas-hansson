/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '../../theme';

const ListWrapper = styled('div')`
  color: #333;
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
  li {
    margin: 1rem;
    font-size: 1.2rem;
  }
`;

const animation = css`
  animation-duration: 2s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      opacity: 0;
      to {
        margin-left: 0%;
        opacity: 1;
      }
    }
  }
`;
const Li1 = styled('li')`
  ${animation};
  animation-delay: 1s;
`;
const Li2 = styled('li')`
  ${animation};
  animation-delay: 1.1s;
`;
const Li3 = styled('li')`
  ${animation};
  animation-delay: 1.2s;
`;
const Li4 = styled('li')`
  ${animation};
  animation-delay: 1.3s;
`;
const Li5 = styled('li')`
  ${animation};
  animation-delay: 1.4s;
`;
const Li6 = styled('li')`
  ${animation};
  animation-delay: 1.5s;
`;
const Li7 = styled('li')`
  ${animation};
  animation-delay: 1.6s;
`;
const Li8 = styled('li')`
  ${animation};
  animation-delay: 1.7s;
`;
const Li9 = styled('li')`
  ${animation};
  animation-delay: 1.8s;
`;
const Li10 = styled('li')`
  ${animation};
  animation-delay: 1.9s;
`;

export const SkillList = () => (
  <ListWrapper>
    <UL>
      <Li1>HTML/CSS</Li1>
      <Li2>JavaScript</Li2>
      <Li3>React</Li3>
      <Li4>Git</Li4>
      <Li5>SASS</Li5>
      <Li6>Emotion</Li6>
      <Li7>Node.js</Li7>
      <Li8>Scrum</Li8>
      <Li9>PHP/MySQL</Li9>
      <Li10>Photoshop</Li10>
    </UL>
  </ListWrapper>
);
