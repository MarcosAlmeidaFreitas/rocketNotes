import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details(){
  return(
    //para retornar mais de um elemento é necessário usar uma div ou fragment
    //O fragment não sofre nenhum tipo de estilização ao contrario da div pode ser importado através do {fragment} from react.
    //nesse caso ele está usando as configs do container que vem do styles
    <Container> 
      <Header></Header>
      
      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>
          
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fuga quam eligendi aspernatur excepturi doloremque, eos vel cumque quod id, 
            pariatur repellat natus, expedita tempore? Veritatis adipisci temporibus libero 
            voluptate deleniti!

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam et possimus ea
            cupiditate dolore. Dignissimos placeat fugiat, voluptatem ab quaerat quibusdam at
            earum, omnis fugit asperiores magni consectetur, reprehenderit non.
          </p>
          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com</a>
              </li>
              <li>
              <a href="#">https://www.rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title="Express"></Tag>
            <Tag title="NodeJS"></Tag>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  );
}