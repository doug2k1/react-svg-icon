import React from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon'

ReactDom.render((
  <div>
    <Icon name="home" />
    <Icon name="camera" />
    <Icon name="headphones" />
  </div>
), document.getElementById('app'))
