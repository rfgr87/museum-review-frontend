export default function reviewReducer(state = {reviews: []}, action) {
    switch (action.type) {
      case 'FETCH_REVIEWS':
        return {reviews: action.payload}
    default:
        return state
    }
  }

  
  