import { getCommentsDescription } from 'src/helpers/page'

import Comment from 'src/components/Comment'

import * as styles from './styles'

const CommentsList = ({ comments }) => {
  const commentsDescription = getCommentsDescription(comments)
  return (
    <>
      <div className={styles.commentDescription}>{commentsDescription}</div>
      {comments.map(({ id, deleted, text, by }) => {
        if (deleted) {
          return (
            <div key={id} className={styles.deleted}>this comment has been deleted</div>
          )
        }
        return (
          <Comment
            key={id}
            by={by}
            text={text}
            className={styles.commentContainer}
          />
        )
      })}
    </>
  )
}

export default CommentsList