import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { lighten } from 'polished'

import Column from '../components/layouts/Column'
import { Image } from '../components/utilities'
import { Logo } from '../components/icons'
import GlobalStyles from '../components/base'
import SignUpForm from '../components/forms/SignUp'
import SignInForm from '../components/forms/SignIn'
import { FadeIn } from '../components/Animations'

import Hero from '../assets/login-hero.jpg'
import Hero2x from '../assets/login-hero@2x.jpg'

/* eslint-disable-next-line */
const url = `${process.env.REACT_APP_BASE_URL}/api/register`

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;

  &.animate {
    animation: ${FadeIn} 0.5s ease-in;
    animation-fill-mode: backwards;
  }
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
  margin-bottom: 35px;

  span {
    margin-top: -15px;
    text-transform: uppercase;
    color: black;
    font-size: 10px;
    font-weight: 700;

    span {
      color: ${({
        theme: {
          colors: { colorSecondary }
        }
      }) => colorSecondary};
    }
  }
`

const Thumbnail = styled.span`
  font-size: 29px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 25px;
  color: ${({
    theme: {
      colors: { colorBlack }
    }
  }) => colorBlack};
`

const HeroContainer = styled.div`
  img {
    min-width: 100%;
    display: block;
    height: 100vh;
  }
`

const AccountLoginButton = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 12px;
  color: ${({
    theme: {
      colors: { colorSecondary }
    }
  }) => colorSecondary};

  &:hover {
    color: ${({
      theme: {
        colors: { colorSecondary }
      }
    }) => `${lighten(0.3, colorSecondary)}`};
  }
`

class Login extends Component {
  state = {
    switchForm: false,
    email: '',
    name: '',
    password: ''
  }

  handleInput = ({ target: { value, name } }) => this.setState({ [name]: value })

  onSignUp = e => {
    e.preventDefault()

    /* eslint-disable-next-line */
    const url = `${process.env.REACT_APP_BASE_URL}/api/register`

    const { email, name, password } = { ...this.state }

    const [firstName, lastName] = name.split(' ')

    const data = {
      first_name: firstName,
      last_name: lastName,
      password,
      email
    }

    axios({
      method: 'post',
      url,
      data
    })
      .then(res => {
        const user = { firstName: res.data.first_name, lastName: res.data.last_name }
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '/'
      })
      .catch(err => console.log(err))
  }

  onSignIn = e => {
    e.preventDefault()

    /* eslint-disable-next-line */
    const url = `${process.env.REACT_APP_BASE_URL}/api/login`

    const { email, password } = { ...this.state }

    const data = {
      email,
      password
    }

    axios({
      method: 'post',
      url,
      data
    })
      .then(res => {
        console.log(res.data)
        const user = { firstName: res.data.first_name, lastName: res.data.last_name }
        localStorage.setItem('token', JSON.stringify(res.data.token))
        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '/'
      })
      .catch(err => console.log(err))
  }

  render() {
    const { switchForm, email, name, password } = this.state

    return (
      <>
        <GlobalStyles bgColor={false} />
        <LoginContainer className="animate">
          <Column size={6}>
            <ContentContainer>
              <LogoContainer>
                <Logo height={75} />
                <span>
                  Curious<span>Trader</span>
                </span>
              </LogoContainer>

              <Thumbnail>{!switchForm ? <span>Signup</span> : <span>Signin</span>}</Thumbnail>

              {!switchForm ? (
                <SignUpForm
                  handleInput={this.handleInput}
                  email={email}
                  name={name}
                  password={password}
                  onSignUp={this.onSignUp}
                />
              ) : (
                <SignInForm
                  handleInput={this.handleInput}
                  email={email}
                  password={password}
                  onSignIn={this.onSignIn}
                />
              )}

              <AccountLoginButton onClick={() => this.setState({ switchForm: !switchForm })}>
                {!switchForm ? (
                  <span>Have an account? Login</span>
                ) : (
                  <span>Oops! No I don&apos;t, go back</span>
                )}
              </AccountLoginButton>
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
}

export default Login
