import styled from "styled-components"

//LayoutGrid SingleInfo
export const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};

  div.darkimg {
    grid-column: 1/-1;
    grid-row: 1 / span 3;
    align-self: end;
    z-index: 2;

    filter: brightness(50%);
    img {
      align-self: end;
      max-width: 100%;
      height: auto;
    }
  }
  img {
    max-width: 80%;
    grid-column: 3 / span 3;
    grid-row: 3 / span 4;
    align-self: end;
    z-index: 2;
  }

  h1 {
    grid-column: 6 / span 4;
    grid-row: 3;
    margin-bottom: 1em;

    align-self: end;
    z-index: 2;
  }
  button {
    width: 80%;
    grid-column: 3 / span 3;
    height: 30px;
    grid-row: 8;
  }
  div.text {
    align-self: start;

    grid-column: 6 / span 5;
    grid-row: 11 / span 4;

    line-height: 1.5em;
    font-size: 0.9em;
    margin-bottom: 4em;

    h2 {
      line-height: 2em;
    }
    p {
      color: white;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      max-height: 150px;
      /* add height */
    }
  }
  ul {
    grid-column: 6 / span 5;
    grid-row: 5;
  }
  table {
    color: white;
    max-width: 80%;
    grid-column: 3 / span 3;
    grid-row: 7 / span 5;
    text-transform: uppercase;
    font-size: 0.7em;
    .right-align {
      text-align: right;
      font-weight: 700;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    grid-column: 6 / span 5;
    grid-row: 7 / span 4;
    z-index: 2;
  }
`
//Single moreinfo categorielist
export const CategoriesList = styled.ul`
  display: grid;
  grid-gap: 0.3em;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  list-style: none;
  li {
    position: relative;
    list-style: none;
    text-align: center;
    background-color: ${props => props.theme.darkgrey};
    text-decoration: none;
    line-height: 50px;
    height: 50px;
    a {
      text-decoration: none;
      color: ${props => props.theme.secondary};
      display: block;
      &:hover {
        text-decoration: none;
        color: ${props => props.theme.accent};
      }
    }
  }
`

//singlemoreinfo at the top
export const Rankings = styled.div`
  grid-column: 6 / span 5;
  grid-row: 4;
  align-self: start;
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-bottom: solid 2px ${props => props.theme.accent};
  h2 {
    margin-bottom: 1em;
    grid-column: 1 / span 3;
    font-weight: 300;
  }
  h2:last-child {
    grid-column: 4 / span 3;
    font-weight: 300;
    justify-content: end;
    text-align: right;
  }
`
