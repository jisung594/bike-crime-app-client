import React, {Component} from 'react';
import IncidentList from './Containers/IncidentList'
import './App.css'

import { connect } from 'react-redux'
import { getIncidents } from './Redux/actions.js'

class App extends Component {
  componentDidMount() {
    this.props.getIncidents()
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2>OPTION1</h2>
          <h2>OPTION2</h2>
          <h2>OPTION3</h2>
          {/* navbar menu option icon */}
          {/* navbar menu option icon */}
          {/* navbar menu option icon */}
        </div>
        <IncidentList incidents={this.props.incidents}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    incidents: state.incidents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIncidents: () => dispatch(getIncidents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
