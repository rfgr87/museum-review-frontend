export function fetchMuseums() {
    return (dispatch) => {
      fetch('http://localhost:3000/museums.json')
      .then(resp => resp.json())
      .then(museums => dispatch({
        type: 'FETCH_MUSEUMS',
        payload: museums
      }))
    }
  }

  