import { getCommentsDecsription } from 'src/helpers/page'

const CommentsDescription = ({ comments, className }) => {
  const commentsDescription = getCommentsDecsription(comments)
  return (
    <div className={className}>{commentsDescription}</div>
  )
}

export default CommentsDescription
