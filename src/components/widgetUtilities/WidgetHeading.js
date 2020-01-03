import React from 'react'
import styled from 'styled-components'

import WidgetDropdown from './WidgetDropdown'

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
`

const HeadingContainer = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const WidgetHeading = ({ title, hasButton }) => {
  return (
    <HeadingContainer>
      <Heading>{title}</Heading>
      {hasButton && <WidgetDropdown />}
    </HeadingContainer>
  )
}

WidgetHeading.defaultProps = {
  hasButton: false
}

export default WidgetHeading
