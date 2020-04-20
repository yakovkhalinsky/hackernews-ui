import ItemDetails from 'src/components/ItemDetails'
import BackLink from 'src/components/BackLink'

import { primaryHeading } from 'src/styles'

const Page = () => {
  return (
    <>
      <h1 className={primaryHeading}>Hacker News Story</h1>
      <BackLink />
      <ItemDetails />
      <BackLink />
    </>
  )
}

export default Page