import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Kethyllen Deliperi</Title>
      <Paragraph type="secundary">kethyllendeliperi</Paragraph>
      <Description type="principal" fontSize={12}>
        Engenheira Front-end
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SideBarContainer>
  </aside>
)

export default Sidebar
