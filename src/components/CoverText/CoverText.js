/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors } from '../../theme';

const CoverWrapper = styled('div')`
  background-color: transparent;
  color: ${colors.black};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
`;

const H2 = styled('h2')`
  max-height: 2rem;
  min-width: 10rem;
  padding: 5px;
  margin-right: 0.5rem;
  text-align: center;
  background-color: ${colors.primaryLight};
  color: ${colors.black};
`;

const ParagraphWrapperEn = styled('div')`
  width: 90%;
`;

const ParagraphWrapperSwe = styled('div')`
  width: 90%;
`;
const P = styled('p')`
  line-height: 1.7;
`;

const A = styled('a')`
  :hover {
    cursor: pointer;
  }
`;

export const CoverText = props => (
  <CoverWrapper>
    {props.toggleLang ? (
      <>
        <H2>Personligt Brev</H2>
        <ParagraphWrapperSwe>
          <P>
            Jag håller på att byta karriär just nu, från socialt arbete till
            webbutvecklare. Även om jag trivdes bra med mitt tidigare jobb är
            jag otroligt glad att jag gör detta. Jag älskar att få lära mig nya
            saker! Jag läser på
            <A href="https://nackademin.se/utbildningar/frontend-utvecklare/">
              {' '}
              Nackademin{' '}
            </A>{' '}
            och är klar till sommaren 2019. Jag har gjort min första LIA oktober
            - december 2018 på en webbyrå som heter Glomo. Där jobbade jag mest
            med deras egna webbsida. Den är byggd med React på frontend och
            Wordpress som backend. Det var roligt och jag lärde mig massor!{' '}
            <br />
            <br />
            Som person är jag ganska lugn av mig och försöker alltid göra mitt
            bästa. Jag är lojal och har hög integritet. Jag är gift och har två
            barn. Jag älskar att träna, även om det inte blir lika ofta som
            tidigare. Jag har dock bestämt mig för att genomföra ett marathon
            2019, vilket jag ser fram emot. Jag gillar också att spela golf,
            padel, fiska, laga mat och älskar att åka skidor.
            <br />
            <br />
            Hälsningar <br />
            Andreas Hansson
          </P>
        </ParagraphWrapperSwe>
      </>
    ) : (
      <>
        <H2>Cover Letter</H2>

        <ParagraphWrapperEn>
          <P>
            Im am changing my career from social work to web development right
            now and I am so glad I am doing this. Even though I liked my earlier
            job, this is so much fun. I love to learn so many new things! I am
            studying at
            <A href="https://nackademin.se/utbildningar/frontend-utvecklare/">
              {' '}
              Nackademin{' '}
            </A>
            I did one internship at a digital agency called Glomo at the end of
            2018. At Glomo I mostly worked on their own site, built with React
            on the frontend and Wordpress as backend. It was fun and did learn a
            lot! <br />
            <br />
            As a person I am pretty calm and always tries to do my best. I am
            loyal and have high integrity. I am married and have two kids. I
            like to workout, but can not do it as often as before. I have
            decided to complete a marathon during 2019 after all and is excited
            about that. I also like to play golf, padel, fishing, cook food and
            loves to ski.
            <br />
            <br />
            Best <br />
            Andreas Hansson
          </P>
        </ParagraphWrapperEn>
      </>
    )}
  </CoverWrapper>
);
