import {
  STORIES_LOAD_STORY_ITEMS,
  STORIES_SELECT_STORY_ITEM,
  STORIES_SELECT_STORY_ITEM_COMMENTS,
} from './actions'

const initialState = {
  items: [],
  selectedItem: null,
  selectedItemComments: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STORIES_LOAD_STORY_ITEMS:
      return {
        ...state,
        items: payload
      }
    case STORIES_SELECT_STORY_ITEM:
      return {
        ...state,
        selectedItem: payload
      }
    case STORIES_SELECT_STORY_ITEM_COMMENTS:
      return {
        ...state,
        selectedItemComments: payload
      }
    default:
      return state
  }
}

export default reducer
