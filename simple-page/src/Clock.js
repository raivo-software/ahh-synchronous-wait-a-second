import React, {Component} from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      time: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const now = new Date();
      this.setState({
        time: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
      });
    }, 1000);
    this.setState({
      interval: interval
    })
  }

  stopClock() {
    const interval = this.state.interval;
    if(interval){
      clearInterval(interval);
      this.setState({interval: null});
    }
  }

  render() {
    return (
      <div>
        <pre>{this.state.time}</pre>
        <button onClick={() => this.stopClock()} >Stop</button>
      </div>
    )
  }
}

export default Clock;