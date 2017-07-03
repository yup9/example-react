import React from 'react'
import PropTypes from 'prop-types'

const humanize = (seconds, fmt) => {
  const convertIntoDoubleDigit = (num) => {
    return parseInt(num, 10) < 10 ? '0' + num : num
  }

  let s = seconds
  let m = Math.floor(s / 60)
  s = s % 60
  let h = Math.floor(m / 60)
  m = m % 60
  h = h % 24

  h = convertIntoDoubleDigit(h)
  m = convertIntoDoubleDigit(m)
  s = convertIntoDoubleDigit(s)

  let resultText = `${h}:${m}:${s}`
  if (fmt) {
    resultText = fmt.replace(/HH(\S*)MM(\S*)SS(\S*)/, `${h}$1${m}$2${s}$3`)
  }

  return resultText
}

class Timer extends React.Component {

  timer = null

  state = {
    count: this.props.seconds
  }
  
  componentDidMount() {
    const { seconds, onStart } = this.props
    if (seconds > 1) {
      onStart()
      this.countDown()
    }
  }

  countDown() {
    let { count } = this.state
    if (count < 1) {
      return this.clearTimer()
    }
    count --
    this.setState({
      count,
    })
    this.timer = setTimeout(() => {
      this.countDown()
    }, 1000)
  }

  clearTimer() {
    this.props.onStop()
    clearTimeout(this.timer)
  }


  render() {
    const { count } = this.state
    const { fmt = 'HH时MM分SS秒' } = this.props
    return (
      <div>{humanize(count, fmt)}</div>
    );
  }

  componentWillUnmount() {
    this.clearTimer()
  }
}


Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
}

Timer.defaultProps = {
  onStart: function() {},
  onStop: function() {}
}

export default Timer