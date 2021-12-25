import * as ss from 'expo-secure-store'
import uuid from 'react-native-uuid'
import { fix, pipes } from '@gchumillas/schema-fixer'

const fixArticles = articles => fix(articles, pipes.array({ type: { id: 'string', text: 'string', checked: 'boolean' } }))

const saveArticles = async articles => {
  await ss.setItemAsync('articles', JSON.stringify(fixArticles(articles)))
}

/**
 * @returns {Promise<{ id: string, text: string, checked: boolean }[]>}
 */
export const getArticles = async _ => {
  try {
    return fixArticles(JSON.parse(await ss.getItemAsync('articles')))
  } catch (err) {
    console.error(err)
    return []
  }
}

/**
 * @param {{ text: string }} props
 * @returns {Promise<string>}
 */
export const createArticle = async ({ text }) => {
  const articles = await getArticles()
  const id = uuid.v1()

  await saveArticles([...articles, { id, text, checked: false }])
  return id
}

/**
 * @param {string} id
 * @returns {Promise<{ id: string, text: string, checked: boolean }>}
 */
export const readArticle = async id => {
  const articles = await getArticles()

  return articles.find(x => x.id == id)
}

/**
 * @param {{ id: string, text?: string, checked?: boolean }} props
 */
export const updateArticle = async ({ id, ...rest }) => {
  const articles = await getArticles()

  await saveArticles(articles.map(x => x.id == id ? ({ ...x, ...rest }) : x))
}

/**
 * @param {string} id
 */
export const deleteArticle = async id => {
  const articles = await getArticles()

  await saveArticles(articles.filter(x => x.id != id))
}

/**
 * @param {string} id
 */
export const deleteAllArticles = async id => {
  await saveArticles([])
}

/**
 * Checks / Unchecks an article.
 * @param {string} id
 */
export const toggleArticle = async id => {
  const articles = await getArticles()
  const pos = articles.findIndex(x => x.id == id)
  let article = articles.splice(pos, 1)[0]
  const checkedArticles = articles.filter(x => x.checked)
  const uncheckedArticles = articles.filter(x => !x.checked)

  article = { ...article, checked: !article.checked }
  await saveArticles([...uncheckedArticles, article, ...checkedArticles])
}
