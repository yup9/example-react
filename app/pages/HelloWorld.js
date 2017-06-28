import React from 'react'
import Timer from '../components/Timer'

const HelloWorld = () => (
  <div>
    <dl>
      <dt>倒计时</dt>
      <dd><Timer seconds={10000} /></dd>
    </dl>
    
  </div>
)

export default HelloWorld
