import { useTransform } from 'framer-motion'
import React from 'react'
import useWrapperScroll from '../Model/useWrapperScroll'

import { Container, Header, Logo, Burger, Footer, Menu } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Menu>
        <ul>
          <li>
            <a href='/'>Model One</a>
          </li>
          <li>
            <a href='/'>Model Two</a>
          </li>
          <li>
            <a href='/'>Model Three</a>
          </li>
          <li>
            <a href='/'>Model Four</a>
          </li>
          <li>
            <a href='/'>Model Five</a>
          </li>
          <li>
            <a href='/'>Model Six</a>
          </li>
          <li>
            <a href='/'>Model Seven</a>
          </li>
        </ul>
        </Menu>
        <Burger />
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href='/'>UI Clone</a>
          </li>
          <li>
            <a href='/'>Made with ❤ </a>
          </li>
          <li>
            <a href='/'>by Fernando Dias</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
