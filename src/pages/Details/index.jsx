import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details(){
  return(
    //para retornar mais de um elemento é necessário usar uma div ou fragment
    //O fragment não sofre nenhum tipo de estilização ao contrario da div pode ser importado através do {fragment} from react.
    //nesse caso ele está usando as configs do container que vem do styles
    <Container> 
      <h1>Hello World</h1>
      <span>Testando o react</span>

      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  );
}