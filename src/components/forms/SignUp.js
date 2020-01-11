import React from 'react'
import styled from 'styled-components'

import { FormContainer, FormGroup, FormRow, FormInput } from './FormUtilities'
import { LoginButton as SignUpButton } from '../utilities'

const SignUp = ({ handleInput, email, name, password, onSignUp }) => {
  return (
    <FormContainer className="animate">
      <form onSubmit={e => onSignUp(e)}>
        <FormRow>
          <FormGroup>
            <FormInput
              placeholder="Full name"
              onChange={e => handleInput(e)}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => e.target.placeholder === '' && (e.target.placeholder = 'Full name')}
              type="text"
              name="name"
              value={name}
              pattern="^\S.*$"
              required
            />
          </FormGroup>
        </FormRow>
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

        <SignUpButton type="submit">sing up for free</SignUpButton>
      </form>
    </FormContainer>
  )
}

export default SignUp
