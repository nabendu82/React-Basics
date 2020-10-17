import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle';

class ParentLifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: 'ParentLifecycle'
    }
    console.log('Parentlifecycle constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Parentlifecycle getDerivedStateFromProps');
    return null;
  }

  componentDidMount(){
    console.log('Parentlifecycle componentDidMount')
  }

  shouldComponentUpdate(){
    console.log('Parentlifecycle shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Parentlifecycle getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate(){
    console.log('Parentlifecycle componentDidUpdate')
  }
  
  render() {
    console.log('Parentlifecycle render')
    return (
      <>
        <h1>Parentlifecycle</h1>
        <button onClick={() => this.setState({ name: 'TheWebDev' })}>Change State</button>  
        <ChildLifecycle />
      </>
    )
  }
}

export default ParentLifecycle
