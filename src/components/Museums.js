import React from 'react'
import {Link} from 'react-router-dom'

import Museum from './Museum'

const Museums = (props) => {

  return (
    <div>
      {props.museums.map(museum =>
        <li key={museum.id}>
          <Link to={`/museums/${museum.id}`}>{museum.name}</Link>

        </li> )}
        
        <br></br><br></br>
        <Link to='/'> Home</Link>

    </div>

  )
}

export default Museums