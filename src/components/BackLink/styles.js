import { css } from 'emotion'

import { fontFamily } from 'src/styles'

export const nav = css`
  padding: 15px;
  border-bottom: #eee;
`

export const back = css`
  ${fontFamily}
  font-size: 16px;
  font-weight: 600;
  color: #ff6600;

  &:hover {
    color: #000;
  }
`