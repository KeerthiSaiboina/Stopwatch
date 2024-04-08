// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount =()=>{
    clearInterval(this.timeInterval)
  }

  updateTime = () =>{
    this.setState(prevState=>({timeElapsedInSeconds: prevState.timeElapsedInSeconds+1}))
  }

  onStartTimer = () =>{
    this.timeInterval = setInterval(this.updateTime,1000)
    this.setState({isTimeRunning : true})
  }

  onStopTimer = () =>{
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning : false})
  }

  onResetTimer = () =>{
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning : false, timeElapsedInSeconds:0})
  }
  

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }
  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}: ${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-clock"
              />
              <p className="timer-label">Timer</p>
            </div>
            <h1 className="timer-count">{time}</h1>
            
            <div className="timer-buttons">
              <button className="timer-btn" type="button" onClick={this.onStartTimer} disable={isTimeRunning}>
                Start
              </button>
              <button className="timer-btn" type="button" onClick={this.onStopTimer}>
                Stop
              </button>
              <button className="timer-btn" type="button" onClick={this.onResetTimer}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
