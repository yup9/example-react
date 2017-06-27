import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import TabBar from './components/TabBar'
import HelloWorld from './pages/HelloWorld'

import './styles/main.scss';


const tabs = [{
  icon: 'color',
  to: '/',
  label: '首页',
}, {
  icon: 'account',
  to: '/account',
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

const routes =  () => (
  <div className="page">
    <Router>
      <Route exact path="/" component={HelloWorld}/>
    </Router>
    <TabBar tabs={tabs} />
  </div>
  
)

ReactDOM.render(
  routes(),
  document.getElementById('app')
)