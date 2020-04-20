import Link from 'next/link'

import * as styles from './styles'

const BackLink = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.back}>
          back to top 10
        </a>
      </Link>
    </nav>
  )
}

export default BackLink