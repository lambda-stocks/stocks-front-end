import React from 'react'

const Chevron = props => {
  return (
    <svg width={14} height={8.645} viewBox="0 0 14 8.645" {...props}>
      <path d="M12.355 0L7 5.343 1.645 0 0 1.645l7 7 7-7z" fill={props.fill} />
    </svg>
  )
}

Chevron.defaultProps = {
  fill: '#dee2ec'
}

export default Chevron
