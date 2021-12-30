import { createStore } from 'redux'
import * as ss from 'expo-secure-store'

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

export const loadStore = async _ => {
  const language = await ss.getItemAsync('language') || ''
  return createStore(reducer, { language })
}

export default createStore(reducer)
