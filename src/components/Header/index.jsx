import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img  src="https://github.com/MarcosAlmeidaFreitas.png"
              alt="Foto do Usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>MarcosAlmeidaFreitas</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

