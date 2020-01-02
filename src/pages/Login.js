import React from 'react'
import styled from 'styled-components'

import Row from '../components/layouts/Row'
import Column from '../components/layouts/Column'
import { Image } from '../components/utilities'
import { Logo } from '../components/icons'

import Hero from '../assets/login-hero.jpg'
import Hero2x from '../assets/login-hero@2x.jpg'

import GlobalStyles from '../components/base'

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 345px;
  margin: 55px auto 0;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  span {
    margin-top: -15px;
    text-transform: uppercase;
    color: black;
    font-size: 10px;
    font-weight: 700;

    span {
      color: #e95e00;
    }
  }
`

const Thumbnail = styled.span`
  font-size: 29px;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 25px;
`

const InfoContainer = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding: 40px 0;

  form {
    border: 0;
    margin: 0;
    padding: 0;
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  margin-bottom: 15px;
  align-items: center;
`

const FormInput = styled.input`
  width: 80%;
  background-color: transparent;
  transition: border 0.2s ease-out;
  border-bottom: 2px solid #000;
  border-radius: 0.25em;
  color: #f2f2f2;
  order: 1;
  padding: 10px 0;
  display: block;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;

  &::-webkit-input-placeholder {
    color: #e95e00;
    text-transform: uppercase;
  }

  &:focus {
    border-top: none;
    border-left: none;
    border-right: none;
  }
`

const HeroContainer = styled.div`
  img {
    min-width: 100%;
    display: block;
    height: 100vh;
  }
`

const Login = () => {
  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <Column size={6}>
          <ContentContainer>
            <LogoContainer>
              <Logo height={75} />
              <span>
                Curious<span>Trader</span>
              </span>
            </LogoContainer>

            <Thumbnail>Signup</Thumbnail>

            <InfoContainer>
              <form>
                <FormRow>
                  <FormGroup>
                    <FormInput
                      id="email"
                      placeholder="Email / Username"
                      type="email"
                      name="email"
                      required
                    />
                  </FormGroup>
                </FormRow>
              </form>
            </InfoContainer>
          </ContentContainer>
        </Column>
        <Column size={6}>
          <HeroContainer>
            <Image imageArr={[Hero, Hero2x, '']} />
          </HeroContainer>
        </Column>
      </LoginContainer>
    </>
  )
}

export default Login
