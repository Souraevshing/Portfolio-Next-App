import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, Span } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my <br />
        <Span>PORTFOLIO</Span>
      </SectionTitle>
      <SectionText>Have a look at all my projects.</SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://mail.google.com/mail/?tab=rm&ogbl')
        }
      >
        GET IN TOUCH
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
