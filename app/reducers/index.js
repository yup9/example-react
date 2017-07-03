import { combineReducers } from 'redux'
import counter from './counter'

const App = combineReducers({
  counter,
})

export default App