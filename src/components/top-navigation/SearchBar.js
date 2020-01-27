import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '../icons'

const SearchStyles = styled.div`
  margin: 0 50px;
  display: flex;
  align-items: center;

  input {
    margin-left: 5px;
    width: 300px;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 10px 5px;
    font-size: 14px;
    color: inherit;
    font-family: inherit;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-bottom-color: ${({
        theme: {
          colors: { colorWhite }
        }
      }) => colorWhite};
    }

    &::placeholder {
      color: ${({
        theme: {
          colors: { colorWhite }
        }
      }) => colorWhite};
    }
  }

  ${({
    theme: {
      breakPoints: { medium }
    }
  }) => medium`
    display: none;
  `}
`

const SearchBar = () => (
  <SearchStyles>
    <SearchIcon height={20} />
    <input type="text" placeholder="Search Reports and Help" />
  </SearchStyles>
)

export default SearchBar
