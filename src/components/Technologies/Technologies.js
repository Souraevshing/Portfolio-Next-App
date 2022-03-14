import React from 'react'
import { DiMongodb, DiReact, DiNodejsSmall } from 'react-icons/di'
import {
  SiTailwindcss,
  SiBootstrap,
  SiOracle,
  SiNextDotJs,
} from 'react-icons/si'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Span,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionTitle>TECHNOLOGIES</SectionTitle>
    <SectionText>
      I've developed full stack <Span>MERN</Span> application and frameworks
      such as
      <Span>Tailwind,Bootstrap, Styled Components</Span> for styling.
      <br />
      Have worked on <Span>NextJs</Span> application.
      <br />
      Knowledge of <Span>OOPs</Span> in <Span>Java</Span>.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experienced with <Span>ReactJs</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size='3rem' />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experienced with <Span>MongoDB</Span>
          </ListParagraph>
        </ListContainer>
        <SiOracle size='3rem' />
        <ListContainer>
          <ListParagraph>
            Experienced with <Span>OracleDB</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experienced with <Span>NodeJs</Span>
          </ListParagraph>
        </ListContainer>
        <SiNextDotJs size='3rem' />
        <ListContainer>
          <ListParagraph>
            Experienced with <Span>NextJs</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size='3rem' />
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            Experienced with <Span>Tailwind Css</Span>
          </ListParagraph>
        </ListContainer>
        <SiBootstrap size='3rem' />
        <ListContainer>
          <ListParagraph>
            Experienced with <Span>Bootstrap</Span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
