import React from 'react'
import PropTypes from 'prop-types'

/*
IMAGE ARR STRUCTURE
[small-1x, lg-1x, atl tag]
*/

const Image = ({ imageArr }) => (
  <img srcSet={`${imageArr[0]} 1x, ${imageArr[1]} 2x`} src={imageArr[0]} alt={imageArr[2]} />
)

/* eslint-disable react/require-default-props */
Image.propTypes = {
  className: PropTypes.string,
  imageArr: PropTypes.array.isRequired
}

export default Image
