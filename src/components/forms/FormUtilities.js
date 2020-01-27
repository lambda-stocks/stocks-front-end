import styled from 'styled-components'

import { FadeIn } from '../Animations'

export const FormContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  margin-bottom: 10px;
  background-color: ${({
    theme: {
      colors: { colorLightGrey }
    }
  }) => colorLightGrey};

  &.animate {
    animation: ${FadeIn} 0.5s ease-in;
    animation-fill-mode: backwards;
  }

  form {
    border: 0;
    margin: 0;
    padding: 0;
  }
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 100%;
  margin-bottom: 15px;
  align-items: center;
`

export const FormInput = styled.input`
  width: 80%;
  background-color: transparent;
  border-radius: 0.25em;
  order: 1;
  padding: 10px 0;
  display: block;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  transition: all 0.3s ease-out;
  color: ${({
    theme: {
      colors: { colorSecondary }
    }
  }) => colorSecondary};

  border-bottom: ${({
    theme: {
      colors: { colorBlack }
    }
  }) => `2px solid ${colorBlack}`};

  &::-webkit-input-placeholder {
    font-size: 10px;
    text-transform: uppercase;
    color: ${({
      theme: {
        colors: { colorSecondary }
      }
    }) => colorSecondary};
  }

  &::-moz-placeholder {
    font-size: 10px;
    text-transform: uppercase;
    color: ${({
      theme: {
        colors: { colorSecondary }
      }
    }) => colorSecondary};
  }

  &:focus {
    outline: 0;
    border-bottom: ${({
      theme: {
        colors: { colorMedGrey }
      }
    }) => `2px solid ${colorMedGrey};`};
  }

  &:hover {
    border-bottom: ${({
      theme: {
        colors: { colorMedGrey }
      }
    }) => `2px solid ${colorMedGrey};`};
  }
`
