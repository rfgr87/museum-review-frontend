export const editMuseum = (description) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/museums/${description.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(description)
      })
      .then(response => response.json())
      .then(museum => dispatch({type: 'EDIT_MUSEUM', payload: museum}))
    }
  
  }