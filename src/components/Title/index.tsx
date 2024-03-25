import { Title as StyledTitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragraph = (props: Props) => (
  <StyledTitle fontSize={props.fontSize}>{props.children}</StyledTitle>
)

export default Paragraph
