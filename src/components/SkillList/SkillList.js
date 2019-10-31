/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '../../theme';

const ListWrapper = styled('div')`
  background-color: ${colors.black};
  color: ${colors.white};
  max-width: 35%;
  display: flex;
  border-right: 1px solid ${colors.white};
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  flex-wrap: wrap;
  margin: 0.5rem;
  /* overflow: hidden; */
`;

const UL = styled('ul')`
  list-style: none;
  padding: 0;
  text-decoration: none;
`;

const LI = styled('li')`
  margin-bottom: 0.7rem;
  font-size: 1rem;
  animation: slideIn 3s ease-in-out 0.5s;
  animation-fill-mode: backwards;

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

  @keyframes slideIn {
    from {
      margin-left: 100%;
      width: 300%;
      opacity: 0;
      to {
        margin-left: 0%;
        width: 100%;
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
  'HTML5/CSS3',
  'JavaScript',
  'React',
  'Git',
  'Emotion',
  'DatoCMS',
  'GraphQL'
];

const list = listItems.map((item, index) => <LI key={index}>{item}</LI>);

export const SkillList = props => (
  <ListWrapper>
    <H2>Skills</H2>
    <UL>{props.isActiveLeft ? list : null}</UL>
  </ListWrapper>
);
