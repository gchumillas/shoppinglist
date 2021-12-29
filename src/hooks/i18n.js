// import i18n from 'i18n-js'
import i18n from '~/src/i18n'

export const useTranslation = (section = '') => {
  return key => i18n.t([section, key].filter(x => !!x).join('.'))
}
