import React from 'react'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href='tel:7766856390'>Contact</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:isauravshing@gmail.com'>Connect</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Code to make a change, the world needs.</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href='https://github.com/Souraevshing'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/sourav-kumar-823b7415b/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.facebook.com/sauraevshing/'>
            <AiFillFacebook size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/thisis_souraev'>
            <AiFillTwitterSquare size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/sauraevshing/'>
            <AiOutlineInstagram size='3rem' />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>
  )
}

export default Footer
