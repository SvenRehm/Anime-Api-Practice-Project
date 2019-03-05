import styled from "styled-components"

//RecommenedeAnime
export const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;
  div {
    grid-column: 1/-1;
    grid-row: 1 / span;
    img {
      max-width: 100%;
    }
  }
  img {
    max-width: 90%;
    grid-column: 2 / span 3;
    grid-row: 3 / span 4;
  }
  p {
    grid-column: 6 / span 4;
    grid-row: 2;
  }
`
//Dropdown Recommended anime
