import { fetchTopStoryItems, fetchItems } from 'src/api/stories'
import {
  loadStoryItems,
  selectStoryItem,
  selectStoryItemComments,
} from 'src/data/stories/actions'

const hasItems = (store) => {
  return !!store.getState().stories.items.length
}

export const initPageState = async ({ store }) => {
  if (!hasItems(store)) {
    const items = await fetchTopStoryItems()
    store.dispatch(loadStoryItems(items))  
  }
}

export const initSelectedItem = async ({ store, itemId }) => {
  const { items } = store.getState().stories
  
  const selectedItem = items.find(({ id }) => id === itemId)
  let selectedItemComments = []
  if (selectedItem?.kids) {
    selectedItemComments = await fetchItems(selectedItem.kids)
  }
  
  store.dispatch(selectStoryItem(selectedItem))
  store.dispatch(selectStoryItemComments(selectedItemComments))
}

export const getCommentsDescription = (comments) => {
  if (comments.length === 20) {
    return `Top 20 comments`
  }
  return `${comments.length} comments`
}

export const getSlugFromTitle = (title) => {
  title = title.replace(/^\s+|\s+$/g, '')
  title = title.toLowerCase()

  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'
  for (let i=0, l=from.length ; i<l ; i++) {
    title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  title = title.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return title
}