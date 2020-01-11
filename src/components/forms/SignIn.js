import React from 'react'

import { FormContainer, FormGroup, FormRow, FormInput } from './FormUtilities'
import { LoginButton as SignInButton } from '../utilities'

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

        <SignInButton type="submit">sign in</SignInButton>
      </form>
    </FormContainer>
  )
}

export default SignUp
