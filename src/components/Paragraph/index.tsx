import { P } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secundary'
}

const Paragraph = ({ children, type = 'principal' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
