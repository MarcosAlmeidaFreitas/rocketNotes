import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
  ;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;


export const  Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1{
    font-size: 2.4rem;
    color: ${({theme})=>theme.COLORS.ORANGE};
  }
`;


export const  Menu = styled.div`
  grid-area: menu;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  text-align: center;
  padding-top: 6.4rem;
  
  list-style: none;

  > li{
    margin-bottom: 2.4rem;
  }
`;


export const  Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;

  /* >input{
    >icon{
      margin-left: 2px;
    }
  } */
`;


export const  Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`;


export const  NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;

  >svg{
    margin-right: 8px;
  }
`;

