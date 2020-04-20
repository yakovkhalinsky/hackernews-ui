import 'isomorphic-fetch'

const API_STORIES_TOP = 'https://hacker-news.firebaseio.com/v0/topstories.json'

const getItemApiUrl = (itemId) => {
  return `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
}

const getJsonFromUrl = async (url) => {
  const result = await fetch(url)
  const json = await result.json()
  return json
}

const fetchTopStoryIds = async () => {
  const url = API_STORIES_TOP
  const topItemIdList = await getJsonFromUrl(url)
  return topItemIdList.slice(0, 10)
}

const fetchItem = async (itemId) => {
  const url = getItemApiUrl(itemId)
  const json = await getJsonFromUrl(url)
  return json
}

export const fetchItems = async (itemIdList = []) => {
  if (!itemIdList.length) {
    return []
  }
  const fetchArray = itemIdList.map(itemId => {
    return fetchItem(itemId)
  })
  const results = await Promise.all(fetchArray)
  return results
}

export const fetchTopStoryItems = async () => {
  const topItemIdList = await fetchTopStoryIds()
  const items = await fetchItems(topItemIdList)
  return items.map(item => {
    const { kids = [] } = item 
    item.kids = kids.slice(0, 20)
    return item
  })
}