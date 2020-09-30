import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/museums' style={{paddingRight: '10px'}}>Museums  </Link>
      <Link to='/museums/new'> Add Museum</Link>
    </div>
  )
}

export default NavBar