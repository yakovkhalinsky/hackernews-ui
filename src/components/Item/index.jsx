import Link from 'next/link'

import { getCommentsDescription } from 'src/helpers/page'

import * as styles from './styles'

const Item = ({
  id,
  by,
  kids,
  score,
  title,
  url,
}) => {
  const commentsDescription = getCommentsDescription(kids)
  return (
    <article className={styles.article}>
      <div className={styles.section}>
        <h2 className={styles.heading}>
          <a className={styles.link} href={url}>{title}&nbsp;&#128279;</a>
        </h2>
      </div>
      <div className={styles.section}>
        <div className={styles.details}>{score} points by <b>{by}</b></div>
        <div className={styles.details}>
          <Link href="/[itemId]" as={`/${id}`}><a className={styles.commentLink}>{commentsDescription}</a></Link>
        </div>
      </div>
    </article>
  )
}

export default Item 