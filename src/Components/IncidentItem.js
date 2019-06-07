import React from 'react';

const IncidentItem = (props) => {
  let { incident } = props;

  return (
    <div>
      <h1>{incident.title}</h1>
      <h4>{incident.description}</h4>
      <h4>{incident.address}</h4>
      <h4>{incident.occurred_at}</h4>
    </div>
  )
}

export default IncidentItem;
