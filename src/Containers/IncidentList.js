import React, {Component} from 'react';
import IncidentItem from '../Components/IncidentItem'
import '../stylesheets/App.css'
// import { connect } from 'react-redux'
// import { getIncidents } from '../Redux/actions.js'

class IncidentList extends Component {
  // componentDidMount() {
  //   this.props.getIncidents()
  // }

  render() {
    let incidentsList
    if (this.props.incidents) {
      incidentsList = this.props.incidents.map(incidentObj => {
        return <IncidentItem key={incidentObj.id} incident={incidentObj}/>
      })
    }

    return (
      <div className="incidents-list">
        <h2 className="page-header">REPORT INDEX</h2>
        <input placeholder="Search"></input>
        <select>
          <option>Keyword</option>
          <option>Zipcode</option>
          <option>Type</option>
        </select>
        {incidentsList}
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     exhibitions: state.exhibitions
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getIncidents: () => dispatch(getIncidents())
//   }
// }

export default IncidentList;
