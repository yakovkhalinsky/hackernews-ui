import { Provider } from 'react-redux'
import App from 'next/app'
import Head from 'next/head'
import withReduxStore from '../lib/with-redux-store'

import 'src/styles/global'

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withReduxStore(MyApp)
