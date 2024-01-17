import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'                       
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      
      <Header/>
      
      <Menu>
        
        <li><ButtonText title="Todos" isActive="true"/></li>
        <li><ButtonText title="React" isActive="false"/></li>
        <li><ButtonText title="NodeJS"/></li>

      </Menu>

      <Search>
        <Input placeholder="Pesquise pelo título" icon={FiSearch}/>
      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus></FiPlus>
        Criar Nota
      </NewNote>
    </Container>
  );
}