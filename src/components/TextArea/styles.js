import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  border: none;
  /* Propiedade para que o usuário não consiga aumentar o tamanho do text-area */
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;


  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
