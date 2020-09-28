import React from 'react'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/deleteReview'

class Reviews extends React.Component {

state = {}

handleDelete = (review) => {
    this.props.deleteReview(review.id, review.museum_id)
}

render() {
  console.log(this.props.reviews.reviews)
  return this.props.reviews.reviews.map(review =>{
    if(review.museum_id){
      return(<div>      
            <li key={review.id}>{review.review}<button onClick={() => this.handleDelete(review)}>Delete</button></li>
            </div>
          )
    }
  }
)
}
}

export default connect(null, {deleteReview})(Reviews)