export const STORIES_LOAD_STORY_ITEMS = 'stories/load-story-items'
export const STORIES_SELECT_STORY_ITEM = 'stories/select-story-item'
export const STORIES_SELECT_STORY_ITEM_COMMENTS = 'stories/select-story-item-comments'

export const loadStoryItems = (items) => ({
  type: STORIES_LOAD_STORY_ITEMS,
  payload: items,
})

export const selectStoryItem = (selectedItem) => ({
  type: STORIES_SELECT_STORY_ITEM,
  payload: selectedItem,
})

export const selectStoryItemComments = (selectedItemComments) => ({
  type: STORIES_SELECT_STORY_ITEM_COMMENTS,
  payload: selectedItemComments,
})
