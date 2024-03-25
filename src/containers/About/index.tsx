import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSec } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>

    <Paragraph type="secundary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quidem sint
      minus obcaecati officia distinctio, doloremque maiores vitae laboriosam
      vero culpa laborum. Optio, vero porro. In sint fuga error perferendis.
    </Paragraph>
    <GithubSec>
      <img src="https://github-readme-stats.vercel.app/api?username=kethyllendeliperi&show_icons=true&theme=rose&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kethyllendeliperi&layout=compact&langs_count=7&theme=rose" />
    </GithubSec>
  </section>
)

export default About
