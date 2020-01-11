import React from 'react'
import styled from 'styled-components'

import { FormContainer, FormGroup, FormRow, FormInput } from './FormUtilities'

const SignUpButton = styled.button`
  width: 100%;
  height: 51px;
  text-transform: uppercase;
  color: white;
  background-color: #2358db;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #4e79e2;
  }
`

const SignUp = ({ email, password, handleInput, onSignIn }) => {
  return (
    <FormContainer className="animate">
      <form onSubmit={e => onSignIn(e)}>
        <FormRow>
          <FormGroup>
            <FormInput
              placeholder="Email / Username"
              onChange={e => handleInput(e)}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e =>
                e.target.placeholder === '' && (e.target.placeholder = 'Email / Username')
              }
              type="email"
              name="email"
              value={email}
              pattern="^\S.*$"
              required
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <FormInput
              placeholder="Create a password"
              onChange={e => handleInput(e)}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e =>
                e.target.placeholder === '' && (e.target.placeholder = 'Create a password')
              }
              type="password"
              name="password"
              value={password}
              required
            />
          </FormGroup>
        </FormRow>

        <SignUpButton type="submit">sign in</SignUpButton>
      </form>
    </FormContainer>
  )
}

export default SignUp
