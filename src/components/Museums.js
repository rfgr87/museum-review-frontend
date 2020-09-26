import React from 'react'
import {Route, Link} from 'react-router-dom'
import Museum from './Museum'

const Museums = (props) => {

  return (
    <div>
      {props.museums.map(museum =>
        <li key={museum.id}>
          <Link to={`/museums/${museum.id}`}>{museum.name} - ${museum.balance}</Link>
        </li> )}
    </div>

  )
}

export default Museums