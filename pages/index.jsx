import { Component } from 'react'

import { initPageState } from 'src/helpers/page'

import HomePage from 'src/components/HomePage'

class IndexPage extends Component {
  static getInitialProps = async ({ store }) => {
    await initPageState({ store })
    return { page: 'index' }
  }

  render() {
    return (
      <HomePage />
    )
  }
}

export default IndexPage
