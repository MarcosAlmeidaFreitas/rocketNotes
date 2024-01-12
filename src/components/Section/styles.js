import styled from "styled-components";

export const Container = styled.section`
  margin: 28px, 0px;
  
  h2{
    margin-top: 28px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color:  ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400px;
  }
`