import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`

const Title = styled.h1 `
  font-size: 1.5em;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
      </Container>
    );
  }
}

export default App;
