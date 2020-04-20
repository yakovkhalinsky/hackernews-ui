import { css, cx } from 'emotion'

import { fontFamily } from 'src/styles'

export const commentContainer = css`
  ${fontFamily}
  font-size: 14px;
  padding: 10px 0;
  border-top: 1px solid #999;
  margin: 0 auto;
  width: 100%;

  &:nth-child(even) {
    background: #f5f5f5;
  }

  &:last-child {
    border-bottom: 1px solid #999;
  }
`

export const deleted = cx(commentContainer, css`
  padding: 10px 15px;
  text-decoration: line-through;
`)

export const commentDescription = css`
  background: #eee;
  border-top: 1px solid #999;
  margin-top: 15px;
  padding: 15px;
`