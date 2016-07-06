import React, { Component } from 'react'

class ComplimentMachine extends Component {

  constructor (props) {
    super(props)
    this.state = {name: ''}
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }
  render () {
    return(
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} />
        <p>{this.props.compliment}, {this.state.name}</p>
      </div>
      )
  }
}

export default ComplimentMachine