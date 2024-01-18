import { Container } from './styles'


export function ButtonText({title, isActive, ...rest}){
  if(isActive === true){
    isActive = "true"
  }else{
    isActive = "false"
  }

  return(
    <Container type='button' $isactive={isActive} {...rest}>
      {title}
    </Container>
  );
}