import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  counter = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">
          The Button has been clicked <span className="span-ele">{count}</span>
          times
        </h1>
        <p className="desc">Click the button to increase the count</p>
        <button type="button" onClick={this.counter} className="but">
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
