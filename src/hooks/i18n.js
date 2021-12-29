import i18n from 'i18n-js'

export const useTranslation = (section = '') => {
  return key => {
    const path = [section, key].filter(x => !!x).join('.')
    return i18n.t(path, { defaults: [{ scope: `common.${key}` }] })
  }
}
