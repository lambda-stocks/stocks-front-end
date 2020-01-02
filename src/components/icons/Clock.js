import React from 'react'

const Clock = props => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <path
        d="M9.99 0A10 10 0 1020 10 10 10 0 009.99 0zM10 18a8 8 0 118-8 8 8 0 01-8 8zm.5-13H9v6l5.25 3.15.75-1.23-4.5-2.67z"
        fill="#fff"
      />
    </svg>
  )
}

export default Clock
