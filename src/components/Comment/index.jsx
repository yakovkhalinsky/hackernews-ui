const getHtml = (html) => ({ __html: html, })

import * as styles from './style'

const Comment = ({ by, text, className }) => {
  return (
  <div className={className}>
    <div className={styles.by}>by <b>{by}</b></div>
    <div
      className={styles.comment}
      dangerouslySetInnerHTML={getHtml(text)} />
  </div>
  )
}

export default Comment
