import { useSelector, useDispatch } from 'react-redux'

export const useLanguage = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const setLanguage = payload => {
    return dispatch({ type: 'SET_LANGUAGE', payload })
  }

  return [language, setLanguage]
}
