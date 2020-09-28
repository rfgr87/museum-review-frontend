import React from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'
import {fetchReviews} from '../actions/fetchReviews'
//import rootReducers from '../reducers/rootReducers'
import reviewReducer from '../reducers/reviewReducer'
import museumReducer from '../reducers/museumReducer'




class ReviewsContainer extends React.Component {

  componentDidMount() {
    
    console.log("in componentDidMount", this.props.museum)
    if(this.props.museum)
     {this.props.fetchReviews(this.props.museum.id)}     
  }

  render() {
    return (
      <div>
          <ReviewInput museum={this.props.museum}/><br/>
          <Reviews reviews={this.props.museum && this.props.reviews.filter(review => review.museum_id == this.props.museum.id)}/><br/>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviewReducer.reviews
    //museum: state.museumReducer
  }
}

export default connect(mapStateToProps, {fetchReviews})(ReviewsContainer)