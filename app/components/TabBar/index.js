import React from 'react'
import classNames from 'classnames'
import { Link, IndexLink } from 'react-router'

import './index.scss'

const TabBarItem = ({ menu }) => {
  const Ele = menu.to === '/' ? IndexLink : Link
  return (
    <Ele to={menu.to} className="tab-bar-item" activeClassName="active">
      <i className={classNames('tab-bar-icon icon', `icon-${menu.icon}`)} />
      <span className="tab-bar-label">{menu.label}</span>
    </Ele>
  )
}

const TabBar = ({ tabs }) => {
  return (
    <nav className="tab-bar">
      {tabs.map((m, i) => <TabBarItem menu={m} key={`tab-bar-${i}`} />)}
    </nav>
  )
}

export default TabBar
