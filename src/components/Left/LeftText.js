import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../theme';
import { Contact } from './../Contact/Contact';
import { SkillList } from './../SkillList/SkillList';
import rightArrowBlack from '../../assets/images/right-arrow-black.png';

const LeftText = styled('div')`
  background-color: ${colors.white};
  height: 100vh;
  width: 50%;
  position: relative;
`;

const ContactSkillWrapper = styled('div')`
  display: flex;
`;

const LeftUnder = props => (
  <LeftText>
    <ContactSkillWrapper>
      <Contact />

      <SkillList animation={props.animation} />
    </ContactSkillWrapper>
    <img src={rightArrowBlack} alt="arrow" onClick={props.toggleState} />
  </LeftText>
);

export default LeftUnder;
