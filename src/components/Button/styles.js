import styled from "styled-components";

export const Container = styled.button`
  width:100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.WHITE};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;
  font-weight: bold;

  &:disabled{
    opacity: 0.5;
  } 
`