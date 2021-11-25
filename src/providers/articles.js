import * as ss from 'expo-secure-store'
import uuid from 'react-native-uuid'

/**
 * @returns {Promise<{ id: string, text: string }[]>}
 */
export const getArticles = async () => {
  try {
    // TODO: ensure that article is string[]
    return JSON.parse(await ss.getItemAsync('articles') ?? [])
  } catch {
    return []
  }
}

/**
 * @param {string} text
 * @returns {Promise<string>}
 */
export const createArticle = async (text) => {
  const articles = await getArticles()
  const id = uuid.v1()

  await ss.setItemAsync('articles', JSON.stringify([...articles, { id, text }]))
  return id
}

/**
 * @param {*} id
 * @returns {Promise<{ id: string, text: string }>}
 */
export const readArticle = async (id) => {
  const articles = await getArticles()

  return articles.find(x => x.id == id)
}

/**
 * @param {string} id
 * @param {string} text
 */
export const updateArticle = async (id, text) => {
  const articles = await getArticles()

  await ss.setItemAsync(
    'articles',
    JSON.stringify(articles.map(x => ({ id: x.id, text: x.id == id ? text : x.text })))
  )
}

/**
 * @param {string} id
 */
export const deleteArticle = async (id) => {
  const articles = await getArticles()

  await ss.setItemAsync('articles', JSON.stringify(articles.filter(x => x.id != id)))
}
