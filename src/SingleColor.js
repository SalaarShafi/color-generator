import React from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, color, index}) => {
  const [r,g,b] = rgb
  const hexValue = rgbToHex(r,g,b);
  console.log(color.weight);
  console.log(r,g,b);
  console.log(index);

  return(
  <article
  className={`${index}` > 14 ? 'color color-light': 'color'}
  style={{background:`rgb(${r}, ${g}, ${b})`}}
  >
    <p className='percent-value'>{color.weight}%</p>
    <p className='color-value'>{hexValue}</p>
  </article>
  )
}

export default SingleColor
