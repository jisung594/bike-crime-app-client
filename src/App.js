import React, {Component} from 'react';
import IncidentList from './Containers/IncidentList'

import { connect } from 'react-redux'
import { getIncidents } from './Redux/actions.js'

class App extends Component {
  componentDidMount() {
    this.props.getIncidents()
  }

  render() {
    return (
      <div className="App">
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
