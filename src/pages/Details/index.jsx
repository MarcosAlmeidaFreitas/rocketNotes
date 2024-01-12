import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details(){
  return(
    //para retornar mais de um elemento é necessário usar uma div ou fragment
    //O fragment não sofre nenhum tipo de estilização ao contrario da div pode ser importado através do {fragment} from react.
    //nesse caso ele está usando as configs do container que vem do styles
    <Container> 
      <Header></Header>


      <Section title="Links Úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com</a>
            <a href="#">https://www.rocketseat.com</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar"/>
    </Container>
  );
}