import React from 'react'

const Logo = props => {
  return (
    <svg height={48} viewBox="0 0 40.032 41.953" {...props}>
      <text
        transform="translate(0 29)"
        fontSize={31}
        fill="#e95e00"
        fontFamily="Potra"
        letterSpacing=".217em"
      >
        <tspan x={0} y={0}>
          {'C'}
        </tspan>
      </text>
      <text
        transform="translate(20.032 33.953)"
        fontSize={32}
        fill="#e95e00"
        fontFamily="Potra"
        letterSpacing=".217em"
      >
        <tspan x={0} y={0}>
          {'T'}
        </tspan>
      </text>
    </svg>
  )
}

export default Logo
