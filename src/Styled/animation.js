import styled, { keyframes } from "styled-components"
import BaseAnimation from "./BaseAnimation"

export const FadeInAnimation = keyframes`  
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
`

export const FilterLoader = styled.div`
   display: inline-block;
   position: absolute;
   top: 95px;
   left: 50%;
   z-index: 3;
   margin: 0 auto;
   width: 20px;
   height: 20px;
`
