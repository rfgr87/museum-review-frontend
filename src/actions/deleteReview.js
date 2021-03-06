export const deleteReview = (reviewId, museumId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/museums/${museumId}/reviews/${reviewId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(review => dispatch({type: 'DELETE_REVIEW', payload: review}))
    }
  }