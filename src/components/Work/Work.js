/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '../../theme';

const WorkWrapper = styled('div')`
  background-image: linear-gradient(
    ${colors.primaryLight},
    ${colors.primaryDark}
  );
  color: ${colors.black};
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex-wrap: wrap;
  margin-right: 0.5rem;
  border-radius: 0 0 10rem 0;
  @media (max-width: 900px) {
    padding: 0 0.5rem;
  }
`;

const H3 = styled('h3')`
  max-width: 55%;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const Work = () => (
  <WorkWrapper>
    <h2>Work Experience</h2>

    <H3>We ahead</H3>
    <small>May 2019 - Oct 2019</small>
    <p>Frontend Developer</p>

    <H3>Glomo </H3>
    <small>Oct 2018 - Dec 2018</small>
    <p>Internship as a front-end developer</p>
    <H3>Sundbyberg Stad </H3>
    <small>Aug 2013 - Aug 2017</small>
    <p>Social Worker</p>
    <div>
      <H3>Sigtuna Kommun</H3>
      <small>Jan 2011 - Aug 2013</small>
      <p>Social Worker</p>
    </div>
  </WorkWrapper>
);
