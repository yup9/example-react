import React from 'react'
import Timer from '../components/Timer'

const HelloWorld = () => (
  <div>
    <dl>
      <dt>倒计时</dt>
      <dd><Timer seconds={10000} /></dd>
      <dd><Timer seconds={20} onStart={() => {console.log('倒计时开始啦哈哈哈')}} onStop={() => {console.log('倒计时结束')}} /></dd>
    </dl>
  </div>
)

export default HelloWorld
