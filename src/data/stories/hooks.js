import { useSelector } from 'react-redux'

export const useStoriesItems = () => {
  const items = useSelector(state => state.stories.items)
  return items
}

export const useStoriesSelectedItem = () => {
  const selectedItem = useSelector(state => state.stories.selectedItem)
  return selectedItem
}

export const useStoriesSelectedItemComments = () => {
  const selectedItemComments = useSelector(state => state.stories.selectedItemComments)
  return selectedItemComments
}
