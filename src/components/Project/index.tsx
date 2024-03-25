import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph type="secundary">Lista de tarefas feitas com VueJS</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
