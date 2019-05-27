import styled from "styled-components"

//grid in recommended anime/and searchoutput

export const Grid = styled.div`
   display: grid;
   grid-gap: 1.2em;
   grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
   margin: 100px 1em;
   background: ${props => props.theme.primary_dark};
`

//LayoutGrid SingleInfo
export const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;
  background: ${props => props.theme.primary_dark};


  a#loginToAdd {
    position: absolute;
    top: 2%;
    left: 65%;
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
    text-decoration: none;
    width: 55px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      color: ${props => props.theme.hovertext};
      background-color: ${props => props.theme.hover};
    }

    /* icon inside the button*/
    .logintoadd {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      transform: translate(0, 10%);
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
  
    width: 80%;
    min-height: 500px; 
    height: auto;
    
    }
    table {
      color: ${props => props.theme.primary_text};
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
     margin: 40% 20% 20% 25%;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
      cursor: pointer;
      border-radius:50%;
      border: 1px solid ${props => props.theme.primary_dark};

      width:  150px;
      height: 150px;
      color: ${props => props.theme.secondary};
      /* background: ${props => props.theme.primary}; */
      /* background:rgba(39,39,39,.7); */
      /* background:rgba(25,118,210, .3); */
     
      background: rgba(33,33,33,  .6);
      box-shadow: 5px 5px 10px #030303;
      text-align: center;
      transition:all 350ms ease-in;

      .minusicon {
        width: 70px;
        height: 70px;
        vertical-align: middle;
        transition:all 350ms ease-in;
      
      }
      .plusicon {
        width: 70px;
        height: 70px;

        vertical-align: middle;
        transition:all 350ms ease-in;
      }
      &:hover {
        background:rgba(25,118,210, .5);
        
      }
      
      &:focus {
        outline: none;
      }
    }
  }

  h1 {
    margin-top:1em;
    grid-column: 6 / span 5;
    grid-row: 4/ span 2;
    color: #f9f9f9;
    align-self: start;
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
      color: ${props => props.theme.primary_text};
      line-height: 1.88;
      letter-spacing: 0.2px;
    }
    p {
      color: ${props => props.theme.primary_text};
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
    grid-row: 7;
    align-self: center;
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
      border: 1px solid ${props => props.theme.primary_dark};
      text-decoration: none;
      line-height: 40px;
      height: 40px;
      background: ${props => props.theme.primary};
      &:hover {
         color: ${props => props.theme.secondary_light};
      }
      a {
         width: 100%;
         font-weight: 500;
         height: 100%;
         display: blocK;
         text-decoration: none;
         color: ${props => props.theme.primary_text};
         background: ${props => props.theme.primary};
         transition: all 250ms ease-in-out;

         &:hover {
            color: ${props => props.theme.secondary_light};
            /* background: ${props => props.theme.accent}; */
         }
      }
   }
`

//singlemoreinfo  ranks
export const Rankings = styled.div`
   grid-column: 6 / span 5;
   grid-row: 5 / span 2;
   align-self: center;
   /* margin-top: 1em; */
   z-index: 2;
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   border-bottom: solid 1px ${props => props.theme.primary_light};
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
      color: ${props => props.theme.primary_text};
   }
   h2:last-child {
      color: ${props => props.theme.primary_text};
      grid-column: 4 / span 3;
      font-weight: 300;
      justify-content: end;
      text-align: right;
   }
`

//animecard

export const AnimeCard = styled.div`
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
      min-height: 271px;
      height: auto;
      cursor: pointer;
   }
   p {
      font-size: 0.7em;
      position: absolute;
      top: 10px;
      left: -10px;
      padding: 5px;
      border: solid 1px ${props => props.theme.border};
      color: ${props => props.theme.primary_text};
      background-color: ${props => props.theme.primary_dark};
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
      color: ${props => props.theme.primary_text};
   }
   a {
      text-decoration: none;
      color: ${props => props.theme.primary_text};
      padding: 0;
      margin: 0;
      font-size: 0.8em;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      color: ${props => props.theme.color};
      &:hover {
         color: ${props => props.theme.secondary_light};
      }
   }
`
