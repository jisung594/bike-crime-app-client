import React, {Component,Fragment} from 'react';
import IncidentList from './Containers/IncidentList'
import Homepage from './Components/Homepage'
import './stylesheets/App.css'

import { connect } from 'react-redux'
import { getIncidents } from './Redux/actions.js'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.getIncidents()
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">
            <div className="navbar">
              <Link to='/' className='navbar-options'>HOME</Link>
              <Link to='/report' className='navbar-options'>REPORT</Link>
              <Link to='/listed' className='navbar-options'>LISTED</Link>
            </div>

            <div className="main-content">
              <Switch>
                <Route path='/' component={Homepage} exact/>
                {/* CREATE A COMPONENT FOR REPORT FORM, AS WELL AS A ROUTE HERE */}
                <Route path='/listed' render={()=>{
                  return <IncidentList incidents={this.props.incidents}/>
                }} />
              </Switch>

            </div>

          </div>
        </Fragment>
      </BrowserRouter>
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
