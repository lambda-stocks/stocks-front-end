import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { Chevron } from '../icons'
import { FadeIn } from '../Animations'

const Selected = styled.div`
  display: flex;
  justify-content: space-around;
  height: 32px;
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 2px;
  position: relative;
  background-color: ${({
    theme: {
      colors: { colorPrimaryLight }
    }
  }) => `${lighten(0.15, colorPrimaryLight)}`};

  &:hover {
    background-color: ${({
      theme: {
        colors: { colorPrimaryHover }
      }
    }) => colorPrimaryHover};
  }

  span {
    margin-left: 10px;
    transition: all 0.3s ease;
  }

  ${props =>
    props.openDropdown &&
    css`
      &:hover {
        background-color: ${({
          theme: {
            colors: { colorPrimaryHover }
          }
        }) => colorPrimaryHover};
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
  height: auto;
  width: 300px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  text-transform: none;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.14);
  background-color: ${({
    theme: {
      colors: { colorPrimaryMed }
    }
  }) => colorPrimaryMed};

  li {
    text-align: center;

    &:hover {
      background-color: ${({
        theme: {
          colors: { colorPrimaryHover }
        }
      }) => colorPrimaryHover};
    }
  }

  ${({
    theme: {
      breakPoints: { large }
    }
  }) => large`
      height: 215px;
    `}

  ${({
    theme: {
      breakPoints: { small }
    }
  }) => small`
      right: -46%;
      height: auto;
    `}
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
