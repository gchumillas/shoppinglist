import { createStore } from 'redux'

const initState = {
  language: ''
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_LANGUAGE') {
    return {
      ...state,
      language: action.payload
    }
  }

  return state
}

export default createStore(reducer)
