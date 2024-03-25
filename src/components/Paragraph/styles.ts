import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.type === 'principal' ? '#282a25' : '#949494')};
  line-height: 22px;
`
