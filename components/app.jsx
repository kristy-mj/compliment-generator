import React, { Component } from 'react'
import ComplimentMachine from './compliments.jsx'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
    		<h1>What is your name?</h1>
    		<ComplimentMachine compliment='You are great'/>
    	</div>
    	)
  }

}

export default App
