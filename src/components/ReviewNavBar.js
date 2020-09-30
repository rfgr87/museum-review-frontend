import React from 'react'
import {Link} from 'react-router-dom'

const ReviewNavBar = (props) => {

  return (
    <div>
      <Link to='/museums/:museumId/reviews' style={{paddingRight: '10px'}}>Reviews  </Link>
      <Link to='/museums/:museumId/reviews/new'> Add Review</Link>    
    </div>
  )
}

export default ReviewNavBar