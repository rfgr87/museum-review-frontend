export const fetchReviews = (museumId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/museums/${museumId}/reviews`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(reviews => dispatch({type: 'FETCH_REVIEWS', payload: reviews}))
    }
  }