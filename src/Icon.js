import React from 'react'
import './icons.svg'

const Icon = (props) => (
  <svg className={`icon icon-${props.name}`} viewBox="0 0 32 32">
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
)

export default Icon
