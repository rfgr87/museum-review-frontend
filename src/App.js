import React from 'react';
import MuseumContainer from './containers/MuseumContainer'
import "./App.css"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome To Museum's App </h1>

        <MuseumContainer/>
      </div>
    );
  }
}


export default App;