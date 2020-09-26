import React from 'react'
import {connect} from 'react-redux'
import {editMuseum} from '../actions/editMuseum'

class MuseumEdit extends React.Component {

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
    let museum = {...this.state, id: this.props.museum.id}
    this.props.editMuseum(museum)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Museum Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Checking Museum Description: </label>
          <input type='text' placeholder='Description' value={this.state.balance} name="description" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

MuseumEdit.defaultProps = {
  museums: {}
}


export default connect(null, {editMuseum})(MuseumEdit)