import React from 'react'
import classNames from 'classnames'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import './index.scss'

const TabBarItem = ({ menu }) => (
  <NavLink to={menu.to} className="tab-bar-item" activeClassName="active">
    <i className={classNames('tab-bar-icon icon', `icon-${menu.icon}`)} />
    <span className="tab-bar-label">{menu.label}</span>
  </NavLink>
)

const TabBar = ({ tabs}) => {
  return (
    <Router>
      <nav className="tab-bar">
        {tabs.map((m, i) => <TabBarItem menu={m} key={`tab-bar-${i}`} />)}
      </nav>
    </Router>
  )
}

export default TabBar
