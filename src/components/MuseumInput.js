import React from 'react'
import {connect} from 'react-redux'
import {addMuseum} from '../actions/addMuseum'

class MuseumInput extends React.Component {

  state = {
    name: '',
    description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMuseum(this.state)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Museum Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Museum Description: </label>
          <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addMuseum})(MuseumInput)