import styled from "styled-components"

//grid in recommended anime/and searchoutput
export const Grid = styled.div`
  display: grid;
  grid-gap: 1.2em;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  margin: 100px 1em;
  background: ${props => props.theme.background};
  
`

//LayoutGrid SingleInfo
export const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;
  background: ${props => props.theme.background};

  a#logintoadd {
    position: absolute;
    top: 20px;
    right: 15%;

    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
    text-decoration: none;
    width: 55px;

    text-align: center;

    cursor: pointer;
    height: 30px;
    .logintoadd {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      transform: translate(0, 10%);
    }
    &:focus {
      outline: none;
    }
    &:hover {
      color: ${props => props.theme.primary};
      background: ${props => props.theme.accent};
    }
  }
  div.darkimg {
    margin-top: 57px;
    grid-column: 1/-1;
    grid-row: 1 / span 4;
    align-self: start;
    z-index: 2;
    filter: brightness(50%);
    img {
      align-self: end;
      max-width: 100%;
      height: auto;
    }
  }
  .AnimeInfo {
    position: relative;
    grid-column: 3 / span 3;
    grid-row: 4 / span 8;

    align-self: start;
    z-index: 2;
    img {
      max-width: 80%;
    }
    table {
      color: ${props => props.theme.secondary};
      width: 80%;

      line-height: 1.4;
      text-transform: uppercase;
      font-size: 0.7em;
      .right-align {
        text-align: right;
        font-weight: 700;
      }
    }
    button {
      position: absolute;
      top: 20px;
      right: 15%;
      cursor: pointer;
      border: 1px solid ${props => props.theme.border};
      /* width: 80%; */
      width: 55px;
      height: 30px;
      grid-column: 3 / span 3;
      grid-row: 9;
      color: ${props => props.theme.secondary};
      background: ${props => props.theme.accent};

      text-align: center;
      &:hover {
        background: ${props => props.theme.primary};
        border: 1px solid ${props => props.theme.accent};
      }
      .minusicon {
        width: 22px;
        height: 22px;
        vertical-align: middle;
      }
      .plusicon {
        width: 22px;
        height: 22px;

        vertical-align: middle;
      }
      &:hover .minusicon {
        background: ${props => props.theme.primary};
        color: red;
      }
      &:hover .plusicon {
        color: green;
      }
      &:focus {
        outline: none;
      }
    }
  }

  h1 {
    grid-column: 6 / span 5;
    grid-row: 3 / span 2;
    color: #f9f9f9;
    align-self: center;
    justify-self: start;
    z-index: 2;
    line-height: 1.2;
    letter-spacing: 0.2px;
    text-align: left;
    font-size: 2.5em;
  }

  div.text {
    align-self: start;

    grid-column: 6 / span 5;
    grid-row: 12 / span 4;

    line-height: 1.5em;
    font-size: 0.9em;
    margin-bottom: 4em;

    h2 {
      color: ${props => props.theme.secondary};
      line-height: 1.88;
      letter-spacing: 0.2px;
    }
    p {
      color: ${props => props.theme.secondary};
      /* overflow: hidden; */
      /* white-space: nowrap; */
      /* text-overflow: ellipsis; */
      /* max-height: 150px; */
      /* add height */
      font-size: 17px;
      line-height: 1.88;
      letter-spacing: 0.2px;
      text-align: left;
    }
  }
  ul {
    grid-column: 6 / span 5;
    grid-row: 6;
  }

  iframe {
    width: 100%;
    height: 100%;
    grid-column: 6 / span 5;
    grid-row: 8 / span 4;
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
    border: 1px solid ${props => props.theme.border};
    text-decoration: none;
    line-height: 40px;
    height: 40px;
    background: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.primary};
      background: ${props => props.theme.accent};
    }
    a {
      width: 100%;
      font-weight: 500;
      height: 100%;
      display: blocK;
      text-decoration: none;
      color: ${props => props.theme.secondary};
      background: ${props => props.theme.primary};
      transition: all 250ms ease-in-out;

      &:hover {
        color: ${props => props.theme.primary};
        background: ${props => props.theme.accent};
      }
    }
  }
`

//singlemoreinfo  ranks
export const Rankings = styled.div`
  grid-column: 6 / span 5;
  grid-row: 5;
  align-self: start;
  margin-top: 1em;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-bottom: solid 1px ${props => props.theme.border};
  .heart {
    color: red;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    transform: translateY(-10%);
    margin-right: 10px;
  }
  .star {
    color: gold;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    transform: translateY(-10%);
    margin-right: 10px;
  }

  h2 {
    margin-bottom: 1em;
    grid-column: 1 / span 3;
    font-weight: 300;
    text-align: left;
    color: ${props => props.theme.secondary};
  }
  h2:last-child {
    color: ${props => props.theme.secondary};
    grid-column: 4 / span 3;
    font-weight: 300;
    justify-content: end;
    text-align: right;
  }
`

//animecard
export const AnimeCard = styled.div`
  position: relative;
  /* border-bottom: 1px solid grey; */

  div.load {
    width: 100%;
    min-height: 270px;
    max-height: 300px;
    cursor: pointer;
    background-color: ${props => props.theme.hover};
    margin-bottom: 5px;
  }
  img {
    /* max-width: 180px; */
    width: 100%;
    height: auto;
    cursor: pointer;

    transition: all 350ms ease-in-out;
  }
  p {
    font-size: 0.7em;
    position: absolute;
    top: 10px;
    left: -10px;
    padding: 5px;
    border: solid 1px ${props => props.theme.border};
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};

    .star {
      color: gold;
    }
  }
  h4 {
    font-size: 0.91em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 180px;
  }
  h5 {
    font-weight: 400;
    font-size: 0.7em;
    color: ${props => props.theme.secondary};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    padding: 0;
    margin: 0;
    font-size: 0.8em;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: ${props => props.theme.color};
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`
