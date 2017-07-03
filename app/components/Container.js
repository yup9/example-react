import React from 'react'
import TabBar from './TabBar'

const tabs = [{
  icon: 'color',
  to: '/',
  label: '首页',
}, {
  icon: 'account',
  to: '/mine',
  label: '我的',
}, {
  icon: 'favorite',
  to: '/fav',
  label: '收藏',
}, {
  icon: 'pic',
  to: '/pic',
  label: '图片',
}]


const Container = ({ children }) => (
  <div className="container">
    <div className="content">{children}</div>
    <footer>
      <TabBar tabs={tabs} />
    </footer>
  </div>
)

export default Container