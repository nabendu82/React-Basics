import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoggenIn: false
    }
  }
  
  render() {
    return this.state.isLoggenIn && <h1>Welcome Nabendu</h1>
    // return this.state.isLoggenIn ? <h1>Welcome Nabendu</h1> : <h1>Welcome Guest</h1>
    // let message;
    // if(this.state.isLoggenIn)
    //   message = <h1>Welcome Nabendu</h1>
    // else
    //   message = <h1>Welcome Guest</h1>
    
    // return <>{message}</>
  }
}

export default UserGreeting
