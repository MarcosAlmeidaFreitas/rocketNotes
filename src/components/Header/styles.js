import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGOUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;

`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  

  //Quando você quer acessar a imagem dentro da div
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  >div{
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.2rem;

    span{
      font-size: 14px;
    }
    
    strong{
      font-size: 18px;
    }
  }

`
export const Logout = styled.button`
  border: none;
  background: none;
  
  svg{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 2.6rem;
  }

`