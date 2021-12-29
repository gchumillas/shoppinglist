import { createStore } from 'redux'

const initState = {
  detectLanguage: true,
  language: ''
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_DETECT_LANGUAGE') {
    return {
      ...state,
      detectLanguage: !!action.payload
    }
  } else if (action.type == 'SET_LANGUAGE') {
    return {
      ...state,
      language: action.payload
    }
  }

  return state
}

export default createStore(reducer)
