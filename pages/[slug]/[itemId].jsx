import { Component } from 'react'

import { initPageState, initSelectedItem } from 'src/helpers/page'

import ItemPage from 'src/components/ItemPage'

class ItemIdPage extends Component {
  static getInitialProps = async ({ store, query }) => {
    const { itemId } = query
    await initPageState({ store })
    await initSelectedItem({ store, itemId: +itemId })
    return { itemId }
  }

  render() {
    const { itemId } = this.props
    return (
      <ItemPage itemId={itemId} />
    )
  }
}

export default ItemIdPage