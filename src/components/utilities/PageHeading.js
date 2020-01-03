import React from 'react'
import styled from 'styled-components'

import { Chevron } from '../icons'

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
  display: inline;
  margin-right: 10px;
`

const PageHeading = ({ title }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Chevron width={15} height={15} />
    </>
  )
}

export default PageHeading
