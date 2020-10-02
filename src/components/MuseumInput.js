import React from 'react'
import {connect} from 'react-redux'
import {addMuseum} from '../actions/addMuseum'
import {Link} from 'react-router-dom'


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
    this.props.addDescription(this.state)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}><br></br>
          <label>Museum Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
        </form>
        <br></br><br></br>
        <Link to='/'> Home</Link>
      </div>
    )
  }
}

export default connect(null, {addMuseum})(MuseumInput)