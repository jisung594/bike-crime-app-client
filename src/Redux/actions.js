// mapDispatchToProps

const loadIncidents = (incidents) => ({
  type: "LOAD_INCIDENTS",
  payload: incidents
})

export const getIncidents = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/incidents")
    .then(res => res.json())
    .then(incidents => dispatch(loadIncidents(incidents)))
    .catch(console.error)
}
