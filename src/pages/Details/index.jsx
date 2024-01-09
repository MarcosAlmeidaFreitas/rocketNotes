import { Container } from './styles'
export function Details(){
  return(
    //para retornar mais de um elemento é necessario usar uma div ou fragment
    //O fragment não sofre nenhum tipo de estilização ao contrario da div.
    <Container>
      <h1>Hello World</h1>
      <span>Testando o react</span>
    </Container>
  )
}