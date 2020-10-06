export default function museumReducer(state = {museums: []}, action) {
    switch (action.type) {
      case 'FETCH_MUSEUMS':
        return {museums: action.payload}
      case 'ADD_MUSEUM':
        return {...state, museums: [...state.museums, action.payload]}
      case 'ADD_DESCRIPTION':
        let museums = state.museums.map(museum => {
          if (museum.id === museum.payload.id) {
            return museum.payload
          } else {
            return museum
          }
        })
        return {...state, museums: museums}
      case 'DELETE_DESCRIPTION':
        let museumsTwo = state.museums.map(museum => {
          if (museum.id === action.payload.id) {
            return action.payload
          } else {
            return museum
          }
        })
        return {...state, museums: museumsTwo}
      case 'EDIT_MUSEUM':
        let museumsThree = state.museums.map(museum => {
          if (museum.id === action.payload.id) {
            return action.payload
          } else {
            return museum
          }
        })
        return {...state, accounts: museumsThree}
      default:
        return state
    }
  }