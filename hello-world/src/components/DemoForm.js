import React, { Component } from 'react'

class DemoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        comment: '',
        language: 'flutter'
    }
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleLangChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name- ${this.state.username}, Coment- ${this.state.comment}, Language- ${this.state.language}`);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
        </div>
        <div>
          <label htmlFor="comment">Comments</label>
          <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select id="language" value={this.state.language} onChange={this.handleLangChange}>
            <option value="react">React</option>
            <option value="reactnative">React Native</option>
            <option value="flutter">Flutter</option>
            <option value="swift">Swift</option>
            <option value="python">Python</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default DemoForm
