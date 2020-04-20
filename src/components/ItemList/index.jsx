import { useStoriesItems } from 'src/data/stories/hooks'

import Item from 'src/components/Item'

const ItemList = () => {
  const items = useStoriesItems()
  return (
    <div>
      {items.map((item) => <Item key={item.id} {...item} />)}
    </div>
  )
} 

export default ItemList
