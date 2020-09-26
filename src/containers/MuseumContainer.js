import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchMuseums} from '../actions/fetchMuseums'
import Museums from '../components/Museums'
import Museum from '../components/Museum'
import MuseumInput from '../components/MuseumInput'
import NavBar from '../components/NavBar'

class MuseumContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMuseums()
  }

  render() {
      return (
          <div>
            <NavBar/>
            <Switch>
              <Route path='/museums/new' component={MuseumInput}/>
              <Route path='/museums/:id' render={(routerProps) => <Museum {...routerProps} museums={this.props.museums}/>}/>
              <Route path='/museums' render={(routerProps) => <Museums {...routerProps} museums={this.props.museums}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    museums: state.museumReducer.museums
  }
}

export default connect(mapStateToProps, {fetchMuseums})(MuseumContainer)