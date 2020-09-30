export default function reviewReducer(state = {reviews: []}, action) {
    switch (action.type) {
      case 'FETCH_REVIEWS':
        return {reviews: action.payload}
      case 'ADD_REVIEW':
        return {...state, reviewss: [...state.reviews, action.payload]}
        case 'DELETE_REVIEW':
        let reviewTwo = state.reviews.map(review => {
          if (review.id === action.payload.id) {
            return action.payload
          } else {
            return review
          }
        })
      case 'ADD_REVIEW':
        let reviewsThree = state.reviews.map(review => {
          if (review.id === review.payload.id) {
            return review.payload
          } else {
            return review
          }
        })
    default:
        return state
    }
  }

  
  