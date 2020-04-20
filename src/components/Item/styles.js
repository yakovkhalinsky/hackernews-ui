import { css, cx } from 'emotion'

import { text, fontFamily } from 'src/styles'

export const article = css`
  border-bottom: 1px solid #999;
  padding: 5px 15px 10px 15px;

  &:nth-child(even) {
    background: #f5f5f5;
  }
`

export const section = css`
`

export const heading = css`
  ${fontFamily}
  margin: 0;
  padding: 2px 5px 8px 0;
  font-size: 20px;
`

export const link = css`
  ${fontFamily}
  font-size: 16px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const details = cx(text, css`
  ${fontFamily}
  font-size: 16px;
  display: inline-block;
`)

export const commentLink = css`
  color: #000;
  display: inline-block;
`