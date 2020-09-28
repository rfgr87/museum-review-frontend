import React from 'react'
import {Redirect} from 'react-router-dom'
import MuseumEdit from './MuseumEdit'

import ReviewsContainer from '../containers/ReviewsContainer'

const Museum = (props) => {

  // ARREGLAR PARA PONER LO DE LOS MUSEOS

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  
  // use find instead of filter
  let museum = props.museums.filter(museum => museum.id == props.match.params.id)[0]

  console.log(museum)
  return (

    <div>
      <h2>
        {museum ? museum.name : null} - {museum ? museum.description : null}
      </h2>
      {museum && <ReviewsContainer museum={museum}/>}
      <h4>Edit Museum</h4>
      <MuseumEdit museum={museum}/>
    </div>
  )


}

export default Museum