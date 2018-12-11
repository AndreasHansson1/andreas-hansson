import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Contact } from './../Contact/Contact';
import { SkillList } from './../SkillList/SkillList';
import { Education } from './../Education/Education';
import { Work } from './../Work/Work';

const LeftText = styled('div')`
  background-color: ${colors.grey};
  color: ${colors.black};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const Button = styled('button')`
  position: fixed;
  top: 7px;
  left: 47vw;
`;
const ContactWorkWrapper = styled('div')`
  display: flex;
`;

const SkillEducationWrapper = styled('div')`
  display: flex;
`;

const LeftUnder = props => (
  <LeftText>
    <Button onClick={props.toggleState}>X</Button>
    <ContactWorkWrapper>
      <Contact />
      <Work />
    </ContactWorkWrapper>
    <SkillEducationWrapper>
      <SkillList animation={props.animation} />
      <Education />
    </SkillEducationWrapper>
  </LeftText>
);

export default LeftUnder;
