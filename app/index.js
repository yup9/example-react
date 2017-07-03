import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import HelloWorld from './pages/HelloWorld'
import Mine from './pages/Mine'
import Container from './components/Container'
import './styles/main.scss';


const store = createStore(reducers)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={HelloWorld} />
        <Route path="mine" component={Mine} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)