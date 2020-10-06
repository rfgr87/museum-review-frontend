import React from 'react'
import {Link} from 'react-router-dom'
import LikeButton from '../components/LikeButton'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/museums' style={{paddingRight: '10px'}}>Museums  </Link>
      <Link to='/museums/new'> Add Museum</Link><br></br>
      <LikeButton/>
    </div>
  )
}

export default NavBar