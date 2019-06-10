import React from 'react';
import '../stylesheets/IncidentItem.css'

const IncidentItem = (props) => {
  let { incident } = props;

  return (
    <div className="incident-item">
      <h3>{incident.title}</h3>
      <p>{incident.description}</p>
      <p>{incident.address}</p>
      <p>{incident.occurred_at}</p>
    </div>
  )
}

export default IncidentItem;
