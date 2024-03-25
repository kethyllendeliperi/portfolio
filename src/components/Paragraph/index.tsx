import { P } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secundary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
