import styled, { keyframes } from "styled-components"
import BaseAnimation from "./BaseAnimation"

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};

`

export const Loader = styled.div`
  z-index: 3;
  margin: 0 auto;

  width: 100px;
  height: 100px;
  
  div > div > div {
    background-color: ${props => props.theme.secondary};
  }
`
