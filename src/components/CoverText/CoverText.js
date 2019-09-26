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
            Jag har nyligen bytt karriär, från myndighetsutövning till
            webbutvecklare. Även om jag trivdes bra med mitt tidigare jobb är
            jag otroligt glad att jag gjort detta. Jag älskar att få lära mig
            nya saker! Jag gick ut 2-årig kurs som frontendutvecklare på
            <A href='https://nackademin.se/utbildningar/frontend-utvecklare/'>
              {' '}
              Nackademin{' '}
            </A>{' '}
            maj 2019. Efter det har jag jobbat som frontendutvecklare på en
            konsultbyrå som heter We ahead. Där gjorde jag även min andra LIA.
            Tekniker jag använde mest där var React (GatsbyJS, NextJS),
            Javasctipt, HTML5, CSS3 (Emotion, Styled Components), Headless CMS
            såsom Dato och Contentful, Git, GraphQL.
            <br />
            <br />
            Som person är jag ganska lugn av mig och försöker alltid göra mitt
            bästa. Jag är lojal och har hög integritet. Jag är gift och har två
            barn. Jag älskar att träna, även om det inte blir lika ofta som
            tidigare. Jag tränar nu för att genomföra mitt första marathon våren
            2020, vilket jag ser fram emot. Jag gillar också att spela golf,
            padel, fiska, laga mat och älskar att åka skidor.
            <br />
            <br />
            <strong>Ett par saker jag gjort</strong> <br />
            Sidoprojekt sommaren 2019. Byggt med GatsbyJS, GraphQL,
            Gatsby-Image:{' '}
            <A href='https://blanchard.netlify.com'> blanchard </A> <br />{' '}
            <br />
            Ex-jobb (tillsammans med en kurskamrat) våren 2019. Byggt med Vue
            samt Firebase: <A href='https://www.carcalc.se/'> carcalc.se </A>
            <br /> <br />
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
            Im have just changed my career from social work to web development
            and I am so glad I did this. Even though I liked my earlier job,
            this is so much fun. I love to learn so many new things! I studied 2
            years to frontend developer at
            <A href='https://nackademin.se/utbildningar/frontend-utvecklare/'>
              {' '}
              Nackademin{' '}
            </A>
            . After that I worked at We ahead, a consultant company. Techniques
            I worked with: React (GatsbyJS, NextJS), Javasctipt, HTML5, CSS3
            (Emotion, Styled Components), Headless CMS (Dato, Contentful), Git,
            GraphQL. <br />
            <br />
            As a person I am pretty calm and always tries to do my best. I am
            loyal and have high integrity. I am married and have two kids. I
            like to workout, but can not do it as often as before. Right now I
            training to run a marathon spring 2020, and is excited about that. I
            also like to play golf, padel, fishing, cook food and loves to ski.
            <br />
            <br />
            <strong>A couple of things I have done</strong> <br />
            Own project summer 2019. Built with GatsbyJS, GraphQL, Gatsby-Image:{' '}
            <A href='https://blanchard.netlify.com'> blanchard </A> <br />{' '}
            <br />
            Ex-job (with a classmate) spring 2019. Built with Vue and Firebase:{' '}
            <A href='https://www.carcalc.se/'> carcalc.se </A>
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
