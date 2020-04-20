import ItemList from 'src/components/ItemList'

import * as styles from 'src/styles'

const Page = () => {
  return (
    <>
      <h1 className={styles.primaryHeading}>Hacker News Top 10</h1>
      <ItemList />
    </>
  )
}

export default Page