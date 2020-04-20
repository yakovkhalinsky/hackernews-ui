import { css } from 'emotion'

export const fontFamily = 'font-family: \'Open Sans\', sans-serif;'

export const colors = {
  primary: '#ff6600',
  primaryText: '#909090',
  primaryTextInverted: '#f5f5f5',
}

export const text = css`
  ${fontFamily}
  font-weight: 300;
  font-size: 16px;
  padding: 2px 5px 2px 0;
`

export const primaryHeading = css`
  ${fontFamily}
  color: ${colors.primaryTextInverted};
  font-size: 26px;
  margin: 0;
  padding: 10px 15px;
  background: ${colors.primary};
  text-align: center;
`