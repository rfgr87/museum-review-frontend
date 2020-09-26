export const addReview = (review, museumId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/museums/${museumId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      .then(response => response.json())
      .then(museum => {
          if (museum.error) {
            alert(museum.error)
          } else {
            dispatch({type: 'ADD_REVIEW', payload: museum})
          }
        }
      )
    }
  }