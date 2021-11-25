import * as ss from 'expo-secure-store'
import uuid from 'react-native-uuid'

/**
 * @returns {{ id: string, text: string }[]}
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
 * @returns {string}
 */
export const createArticle = async (text) => {
  const articles = await getArticles()
  const id = uuid.v1()

  await ss.setItemAsync('articles', JSON.stringify([...articles, { id, text }]))
  return id
}

/**
 * @param {string} id
 * @param {string} text
 */
export const updateArticle = async (id, text) => {
  const articles = await getArticles()

  await ss.setItemAsync(
    'articles',
    JSON.stringify(articles.map(x => x.id == id ? text : x.text))
  )
}

export const deleteArticle = async (id) => {
  const articles = await getArticles()

  await ss.setItemAsync('articles', JSON.stringify(articles.filter(x => x.id != id)))
}
