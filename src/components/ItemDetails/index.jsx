import { useStoriesSelectedItem, useStoriesSelectedItemComments } from 'src/data/stories/hooks'

import CommentsList from 'src/components/CommentsList'

import * as styles from './styles'

const getHtml = (html) => ({ __html: html, })

const ItemDetails = () => {
  const selectedItem = useStoriesSelectedItem()
  const selectedItemComments = useStoriesSelectedItemComments()
  const {
    title,
    score,
    by,
    text,
    url,
  } = selectedItem
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>
        <a className={styles.titleLink} href={url}>{title}</a>
        {url && (<span className={styles.titleLinkIcon}>&nbsp;&#128279;</span>)}
      </h2>
      <div className={styles.details}>{score} points by <b>{by}</b></div>
      {text && <div className={styles.text} dangerouslySetInnerHTML={getHtml(text)} />}
      <CommentsList comments={selectedItemComments} />
    </article>
  )
}

export default ItemDetails
