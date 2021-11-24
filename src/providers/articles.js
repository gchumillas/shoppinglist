import * as ss from 'expo-secure-store'

export const getArticles = async () => {
  try {
    // TODO: ensure that article is string[]
    return JSON.parse(await ss.getItemAsync('articles') ?? [])
  } catch {
    return []
  }
}

export const createArticle = async (text) => {
  const articles = await getArticles()

  await ss.setItemAsync('articles', JSON.stringify([...articles, text]))
}
