import React from 'react'

import BaseCss from './BaseCss'
import UtilityCss from './UtilityCss'
import Fonts from './Fonts'

const GlobalStyles = ({ bgColor }) => (
  <>
    <BaseCss bgColor={bgColor} />
    <UtilityCss />
    <Fonts />
  </>
)

GlobalStyles.defaultProps = {
  bgColor: true
}

export default GlobalStyles
