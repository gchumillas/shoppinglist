import { createStore } from 'redux'

const initState = {
  useSystemLanguage: true,
  language: ''
}

const reducer = (state = initState, action) => {
  if (action.type == 'SET_SYSTEM_LANGUAGE') {
    return {
      ...state,
      useSystemLanguage: !!action.payload
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
