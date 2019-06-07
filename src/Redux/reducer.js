// mapStateToProps

const initialState = {
  incidents: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_INCIDENTS": {
      return {...state, incidents: action.payload}
    }

    default:
      return state
  }
}

export default reducer
