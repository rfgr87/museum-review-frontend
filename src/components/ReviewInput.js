import React from 'react'
import {connect} from 'react-redux'
import {addReview} from '../actions/addReview'

class ReviewInput extends React.Component {

  state = {
    review: ''
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({review: this.state}, this.props.museum.id)
    this.setState({
      review: ''
    })
    //history.pushState(this.state, '', 'localhost:3000/museums/:id/reviews/new')
     window.location.reload(false)
  }

 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Review:</label>
          <input type="text" name="review" value={this.state.review} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

  
}


export default connect(null, {addReview})(ReviewInput)