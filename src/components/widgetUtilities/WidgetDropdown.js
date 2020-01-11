import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { Chevron } from '../icons'
import { FadeIn } from '../Animations'

const Selected = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #6e6e91;
  height: 32px;
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 2px;
  position: relative;

  &:hover {
    background-color: #3c3c5e;
  }

  span {
    margin-left: 10px;
    transition: all 0.3s ease;
  }

  ${props =>
    props.openDropdown &&
    css`
      &:hover {
        background-color: #6e6e91;
      }

      span {
        transform: rotate(-180deg);
      }
    `}

  .animate {
    animation: ${FadeIn} 0.3s ease;
    animation-fill-mode: backwards;
  }
`

const DropDown = styled.ul`
  position: absolute;
  top: 14px;
  right: 0;
  height: 100px;
  width: 300px;
  background-color: #6e6e91;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  text-transform: none;

  li {
    text-align: center;

    &:hover {
      background-color: #3c3c5e;
    }
  }

  @media (max-width: 1055px) {
    height: 215px;
  }

  @media (max-width: 485px) {
    right: -46%;
    height: auto;
  }
`

const WidgetDropdown = () => {
  const [openDropdown, setDropdown] = useState(false)

  return (
    <Selected onClick={() => setDropdown(!openDropdown)} openDropdown={openDropdown}>
      placeholder
      <span>
        <Chevron />
      </span>
      <DropDown className={openDropdown ? 'animate' : 'no-display'}>
        <li>data</li>
        <li>data</li>
        <li>data</li>
        <li>data</li>
        <li>data</li>
        <li>data</li>
      </DropDown>
    </Selected>
  )
}

export default WidgetDropdown
