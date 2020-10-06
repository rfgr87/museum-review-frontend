import React from 'react'
import {Redirect} from 'react-router-dom'
import ReviewInput from './ReviewInput'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'


import ReviewsContainer from '../containers/ReviewsContainer'

const Museum = (props) => {

  // ARREGLAR PARA PONER LO DE LOS MUSEOS

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  
  // use find instead of filter
  let museum = props.museums.filter(museum => museum.id == props.match.params.id)[0]

  return (

    <div>
      <h2>
        {museum ? museum.name : null}
      </h2><br>
      {museum ? museum.description : null}</br>
      {museum && <ReviewsContainer museum={museum}/>}
      <br></br><br></br>
        <Link to='/'> Home</Link>
    </div>
  )


}

export default Museum