import React from 'react'
import {Redirect} from 'react-router-dom'
import ReviewInput from './ReviewInput'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'


import ReviewsContainer from '../containers/ReviewsContainer'

const Review = (props) => {

  // ARREGLAR PARA PONER LO DE LOS MUSEOS

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  
  // use find instead of filter
  let review = props.reviews.filter(review => review.id == props.match.params.id)[0]

  console.log(review)
  return (

    <div>
      <h2>
        {review ? review.review : null}
      </h2>
    </div>
  )


}

export default Review