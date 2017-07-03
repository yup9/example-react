import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './index.scss'

class Stepper extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    console.log('+1')
    this.props.onIncrement()
  }

  decrement() {
    console.log('-1')
     this.props.onDecrement()
  }

  render() {
    const { count } = this.props
    return (
      <div className="stepper">
        <button className="stepper-button" onClick={this.increment}>+</button>
        <strong className="stepper-text">{`计数：${count}`}</strong>
        <button className="stepper-button" onClick={this.decrement}>-</button>
      </div>
    );
  }
}

Stepper.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  count: state.counter,
})

const mapDispatchToProps = {
  onIncrement: () => ({
    type: 'INCREMENT',
  }),
  onDecrement: () => ({
    type: 'DECREMENT',
  })
}

const connectedStepper = connect(mapStateToProps, mapDispatchToProps)(Stepper)

export default connectedStepper
