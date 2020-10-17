import React, { Component } from 'react'

class ClassEvent extends Component {
  handleClick(){
    console.log('Button clicked from class component')
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ClassEvent
