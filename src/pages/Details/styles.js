import styled from "styled-components";

export const Container = styled.div`
  //background: purple;
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
`