export const addMuseum = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3000/museums', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'ADD_MUSEUM', payload: account}))
    }
  }