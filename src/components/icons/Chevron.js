import React from 'react'

const Chevron = ({ width, height, fill }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 8.645">
      <path d="M12.355 0L7 5.343 1.645 0 0 1.645l7 7 7-7z" fill={fill} />
    </svg>
  )
}

Chevron.defaultProps = {
  width: 14,
  height: 8.645,
  fill: '#dee2ec'
}

export default Chevron
