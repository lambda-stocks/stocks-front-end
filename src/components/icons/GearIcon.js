import React from 'react'

const Gear = props => {
  return (
    <svg height={16} viewBox="0 0 16 16" width={16} {...props}>
      <path
        d="M13.3 5.2l1.1-2.1L13 1.7l-2.1 1.1a3.582 3.582 0 00-1.1-.4L9 0H7l-.8 2.3a4.179 4.179 0 00-1 .4L3.1 1.6 1.6 3.1l1.1 2.1a4.179 4.179 0 00-.4 1L0 7v2l2.3.8c.1.4.3.7.4 1.1L1.6 13 3 14.4l2.1-1.1a3.582 3.582 0 001.1.4L7 16h2l.8-2.3c.4-.1.7-.3 1.1-.4l2.1 1.1 1.4-1.4-1.1-2.1a3.582 3.582 0 00.4-1.1L16 9V7l-2.3-.8a4.179 4.179 0 00-.4-1zM8 11a2.946 2.946 0 01-3-3 2.946 2.946 0 013-3 2.946 2.946 0 013 3 2.946 2.946 0 01-3 3z"
        fill="#2358db"
      />
    </svg>
  )
}

export default Gear