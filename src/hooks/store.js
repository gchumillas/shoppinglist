import { useSelector, useDispatch } from 'react-redux'
import * as ss from 'expo-secure-store'

export const useLanguage = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const setLanguage = payload => {
    ss.setItemAsync('language', payload)
    return dispatch({ type: 'SET_LANGUAGE', payload })
  }

  return [language, setLanguage]
}
