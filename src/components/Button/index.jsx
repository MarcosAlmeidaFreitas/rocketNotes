import { Container } from './styles'

//A propriedade rest é para quando vc quer deixar livre para passar qualquer propriedade pelo botão
export function Button({title, loading = false, ...rest}){
  return(
    <Container type='button' disabled= {loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );  
}