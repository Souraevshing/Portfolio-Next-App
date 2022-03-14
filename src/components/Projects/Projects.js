import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>PROJECTS</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <br />
              <TitleContent>Technologies</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t.toUpperCase()}</Tag>
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks target='_blank' href={p.source}>
                Source Code
              </ExternalLinks>
              <ExternalLinks target='_blank' href={p.visit}>
                Visit
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
