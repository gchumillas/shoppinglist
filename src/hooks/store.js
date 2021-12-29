import { useSelector, useDispatch } from 'react-redux'

export const useSystemLanguage = () => {
  const dispatch = useDispatch()
  const systemLanguage = useSelector(state => state.systemLanguage)
  const setSystemLanguage = payload => {
    return dispatch({ type: 'SET_SYSTEM_LANGUAGE', payload })
  }

  return { systemLanguage, setSystemLanguage }
}

export const useLanguage = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const setLanguage = payload => {
    return dispatch({ type: 'SET_LANGUAGE', payload })
  }

  return { language, setLanguage }
}
