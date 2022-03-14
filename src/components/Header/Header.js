import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai'
import { DiCssdeck, DiSass } from 'react-icons/di'
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'wheat',
            marginBottom: '10px',
          }}
        >
          <DiCssdeck size='3rem' />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
)

export default Header
