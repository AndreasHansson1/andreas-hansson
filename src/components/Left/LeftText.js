import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Contact } from './../Contact/Contact';
import { SkillList } from './../SkillList/SkillList';
import { Education } from './../Education/Education';
import { Work } from './../Work/Work';

const LeftText = styled('div')`
  background-color: ${colors.black};
  color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const Button = styled('button')`
  position: fixed;
  z-index: 1;
  top: 9px;
  left: 44vw;
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
      <SkillList isActiveLeft={props.isActiveLeft} />
      <Education />
    </SkillEducationWrapper>
  </LeftText>
);

export default LeftUnder;
