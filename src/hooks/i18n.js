import i18n from 'i18n-js'

export const useTranslation = (prefix = '') => {
  return key => {
    const path = [prefix, key].filter(x => !!x).join('.')
    return i18n.t(path, { defaults: [{ scope: `common.${key}` }] })
  }
}
