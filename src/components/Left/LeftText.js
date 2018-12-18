import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Contact } from './../Contact/Contact';
import { SkillList } from './../SkillList/SkillList';
import { Education } from './../Education/Education';
import { Work } from './../Work/Work';

const LeftText = styled('div')`
  background-color: ${colors.black};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const Button = styled('a')`
  position: absolute;
  color: ${colors.black},
  z-index: 5;
  top: 5px;
  right: 5px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 900;
  border-radius: 10rem;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
const ContactWorkWrapper = styled('div')`
  display: flex;
`;

const SkillEducationWrapper = styled('div')`
  display: flex;
`;

const LeftUnder = props => (
  <LeftText>
    <Button onClick={props.toggleState}>&rarr;</Button>
    <ContactWorkWrapper>
      <Contact />
      <Work />
    </ContactWorkWrapper>
    <SkillEducationWrapper>
      <SkillList isActiveLeft={props.isActiveLeft} />
      <Education />
    </SkillEducationWrapper>
  </LeftText>
);

export default LeftUnder;
