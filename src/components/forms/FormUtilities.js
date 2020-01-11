import styled from 'styled-components'

import { FadeIn } from '../Animations'

export const FormContainer = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  padding-top: 40px;
  margin-bottom: 10px;

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
  border-bottom: 2px solid #000;
  border-radius: 0.25em;
  color: #e95e00;
  order: 1;
  padding: 10px 0;
  display: block;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  transition: all 0.3s ease-out;

  &::-webkit-input-placeholder {
    font-size: 10px;
    color: #e95e00;
    text-transform: uppercase;
  }

  &::-moz-placeholder {
    font-size: 10px;
    color: #e95e00;
    text-transform: uppercase;
  }

  &:focus {
    outline: 0;
    border-bottom: 2px solid #cccccc;
  }

  &:hover {
    border-bottom: 2px solid #cccccc;
  }
`
