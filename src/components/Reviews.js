  import React from 'react'
  import {connect} from 'react-redux'
  import {deleteReview} from '../actions/deleteReview'
  import {Link} from 'react-router-dom'


  class Reviews extends React.Component {

  state = {}

  handleDelete = (review) => {
      this.props.deleteReview(review.id, review.museum_id)
      window.location.reload(false)

  }


  render() {
    console.log(this.props.reviews)
    return (
      <div> 
        {this.props.reviews ?   this.props.reviews.map(review =>{ return this.renderReview(review)})
  : <p>Reviews Loading</p>}
      </div>
    )
  }
  
  renderReview(review) {
    return (<div>      
      <li key={review.id}>{review.review}<button onClick={() => this.handleDelete(review)}>Delete</button></li>
      </div>
  )
  }

  // render() {
  //   console.log(this.props.reviews)
  //   return (
  //     <div> 
  //       {this.props.reviews ?   this.props.reviews.map(review =>{ this.renderReview(review)})
  // : <p>Reviews Loading</p>}
  //     </div>
  //   )
  // }

  // renderReview(review) {
  //   return (<div>      
  //     <li key={review.id}>{review.review}<Link to={`/museums/${review.museum_id}/reviews/${review.id}`}></Link>
  // <button onClick={() => this.handleDelete(review)}>Delete</button></li>
  //   <br></br><br></br>
  //         <Link to='/'> Home</Link>   
  //     </div>
  // )
  // }


  }

  export default connect(null, {deleteReview})(Reviews)