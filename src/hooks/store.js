import { useSelector, useDispatch } from 'react-redux'

export const useDetectLanguage = () => {
  const dispatch = useDispatch()
  const detectLanguage = useSelector(state => state.detectLanguage)
  const setDetectLanguage = payload => {
    return dispatch({ type: 'SET_DETECT_LANGUAGE', payload })
  }

  return [detectLanguage, setDetectLanguage]
}

export const useLanguage = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  const setLanguage = payload => {
    return dispatch({ type: 'SET_LANGUAGE', payload })
  }

  return [language, setLanguage]
}
