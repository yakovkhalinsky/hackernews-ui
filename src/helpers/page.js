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
