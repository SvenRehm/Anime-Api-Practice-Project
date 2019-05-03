import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { loginRemoveFromePlaylist } from "../Login/actions/Login"
import { requestList, RemoveFromePlaylist } from "./actions/requestList"

import { Spring, config } from "react-spring/renderprops"
import { Loader } from "../../Styled/animation"
import { GooSpinner } from "react-spinners-kit"
import { IconContext } from "react-icons"
import { IoMdAdd } from "react-icons/io"

const mapStateToProps = state => {
   return {
      animeList: state.requestList.animeList,
      animeids: state.Login.user.animeids,

      userId: state.Login.user.id,
      // subtype: id.data.attributes.subtype,
      // posterimage: id.data.attributes.posterImage.tiny,
      // episodeCount: id.data.attributes.episodeCount,
      // totalLength: id.data.attributes.totalLength
      //load animeids from database
      animeListData: state.Login.user.animelist,
      isLoading: state.requestList.isLoading
   }
}
const mapDispatchToProps = dispatch => {
   return {
      onRequestList: animeid => dispatch(requestList(animeid)),
      onLoginRemoveFromePlaylist: (userId, animeid) =>
         dispatch(loginRemoveFromePlaylist(userId, animeid)),
      onRemoveFromePlaylist: (userId, animeid) =>
         dispatch(RemoveFromePlaylist(userId, animeid))
   }
}

const ListLoad = styled(Loader)`
   display: grid;
   grid-column: 1/-1;
   grid-row: 1 / span 8;
   margin: 0 0;
   align-self: center;
   justify-self: center;
`
const MyAnimeListStyles = styled.div`
   display: grid;
   grid-template-rows: repeat(10, 100px);
   grid-template-columns: repeat(12, minmax(0, 1fr));
   button.editbutton{
      width:70px;
      height:27px;
      line-height:27px;     
      color: White;
      background-color: #0088F1;
      border: none;
      cursor: pointer;
   }
   button.plusbutton{
     margin-left:5px;
           width: 25px;
           height: 22px;
           transform: translateY(+20%);
           color: ${props => props.theme.secondary};
           background-color: #414141;
           border: none;
         line-height:22px;           
           cursor: pointer;
           
           .plusicon {
          
              width: 22px;
              height: 22px;
              color: #0088F1;
           }
           &:hover {
              color: ${props => props.theme.accent};
           }
           &:focus {
              outline: none;
           }}

   h2 {
      grid-column: 1/-1;
      grid-row: 2;
      font-size: 2em;
      justify-self: center;
      color: ${props => props.theme.secondary};
   }
   h1 {
      color: ${props => props.theme.secondary};
      grid-column: 1 / span 3;
      grid-row: 2;
   }
   ul.animecards {
      grid-column: 4 / span 6;
      grid-row: 4/-1;
      color: ${props => props.theme.secondary};
      list-style: none;
      display: grid;
      grid-auto-rows: repeat(auto-fill, minmax(130px, 130px));
      grid-gap: 0.7em;

      li {
         min-height: 120px;
         max-height: 120px;
         display: grid;
         width: 100%;
         grid-template-columns: repeat(7, minmax(0, 1fr));
         background-color: #414141;
         /* background-color: ${props => props.theme.primary}; */
         border: 1px solid ${props => props.theme.border};
         margin-bottom: 1em;
         &:last-child {
            margin-bottom: 2em;
         }

         ul.cardinfo{
            grid-column: 5 / span 3;
            grid-row: 1;
            list-style-type: none;
            align-self: center;
            justify-self: center;
            /* li:last-child{
               border-right: solid 1px #707070;
            } */
            li{
               font-size:15px;
               border:none;
               display: inline;
               
               padding: 0.5em 2em 0.5em 2em;
            border-left: solid 1px #707070;
            
       
         }
         

            }
         }
         p {
            color:white;
            font-size:17px;
            align-self: center;
            justify-self: center;
            grid-column: 5 / span 2;
            grid-row: 1;
            padding: 0.5em 2em 0.5em 2em;
            border-left: solid 1px #707070;
            border-right: solid 1px #707070;
         }
         h3{
           
            color:white;
            justify-self: start;
            font-size:17px;
            align-self: center;
     
       
            padding: 0.5em 2em 0.5em 5em;
         
            border-right: solid 1px #707070;
               grid-row: 1;
               grid-column: 6 / span 2;
               font-size:17px;
               font-weight: 300;
               
        
         }
         /* button {
            grid-column: 6;
            grid-row: 1;
            width: 50px;
            height: 50px;
            justify-self: center;
            align-self: center;
            text-transform: uppercase;
            color: ${props => props.theme.secondary};
            background: ${props => props.theme.primary};
            border: none;
            text-align: center;
            font-weight: 400;
            cursor: pointer;
            .minusicon {
               line-height: 50px;
               width: 22px;
               height: 22px;
               color: red;
            }
            &:hover {
               color: ${props => props.theme.accent};
            }
            &:focus {
               outline: none;
            }
         } */
         img {
            height: 110%;
            width: auto;
            align-self: center;
            /* justify-self: end; */
            margin-left: 10px;
            grid-row: 1;
            grid-column: 1 / span 1;
            box-shadow: 5px 5px 10px #030303;
         }
         h1 {
            
            grid-column: 2 / span 3;
            grid-row: 1;
            align-self: center;
            font-size: 19px;
            line-height: 1.2;
            letter-spacing: 0.2px;
            text-align: left;
            color: white;
            overflow: hidden;
            /* white-space: nowrap; */
            text-overflow: ellipsis;

            span {
               font-size: 15px;
               font-weight: 300;
               color: #9b9b9b;
            }
         }

         /* h3 {
            font-size: 1em;
            margin-left: 15px;
            align-self: center;
            color: ${props => props.theme.secondary};
            grid-column: 2 / span 2;
            grid-row: 1;
            opacity: 0.6;
         } */
      }
   }
`

class MyAnimeList extends Component {
   componentDidMount() {
      if (this.props.animeListData) {
         this.props.onRequestList(this.props.animeids)
      }
   }
   componentWillReceiveProps(newProps) {
      if (newProps.animeListData !== this.props.animeListData) {
         this.props.onRequestList(newProps.animeids)
      }
   }
   removeFromPlaylist = (userid, animeid) => {
      this.props.onLoginRemoveFromePlaylist(userid, animeid)
      this.props.onRemoveFromePlaylist(userid, animeid)
   }

   render() {
      const { animeList, animeListData } = this.props
      // const { userId } = this.props

      const AnimeList = animeList.map((category, i) => {
         const { userId } = this.props

         return (
            <Spring
               key={i}
               delay={(250 * i) / 2}
               config={config.slow}
               from={{ opacity: 0 }}
               to={{ opacity: 1 }}
            >
               {props => (
                  <li style={props} key={i}>
                     {/* <p>{i + 1}</p> */}
                     <img
                        src={animeList[i].posterimage}
                        alt="animesmallimage"
                     />
                     <h1>
                        {animeList[i].title}
                        <br />
                        <span>
                           {animeList[i].subtype},
                           {parseInt(animeList[i].startDate)}
                        </span>
                     </h1>
                     <ul className="cardinfo">
                        <li>
                           {" "}
                           {animeListData[i].episodes_watched}/
                           {animeList[i].episodeCount
                              ? animeList[i].episodeCount
                              : 0}
                           <button
                              className="plusbutton"
                              onClick={() =>
                                 this.removeFromPlaylist(
                                    userId,
                                    animeList[i].id
                                 )
                              }
                           >
                              {" "}
                              <IconContext.Provider
                                 value={{
                                    className: "plusicon"
                                 }}
                              >
                                 <IoMdAdd />
                              </IconContext.Provider>
                           </button>
                        </li>
                        <li> {animeListData[i].status} </li>
                        <li>
                           {" "}
                           <button className="editbutton">Show More</button>
                        </li>
                     </ul>

                     {/* <p>
                        {animeListData[i].episodes_watched}/
                        {animeList[i].episodeCount
                           ? animeList[i].episodeCount
                           : 0}
                     </p> */}

                     {/* <h3> {animeListData[i].status}</h3> */}
                     {/* <h3>
                        {animeList[i].subtype},{" "}
                        {parseInt(animeList[i].startDate)}
                     </h3> */}
                     {/* <h4>{animeListData[i].status}</h4> */}
                     {/* 
                     <button
                        onClick={() =>
                           this.removeFromPlaylist(userId, animeList[i].id)
                        }
                     >
                        <FontAwesomeIcon
                           className="minusicon"
                           icon={["fas", "minus-circle"]}
                        />
                     </button> */}
                  </li>
               )}
            </Spring>
         )
      })

      return (
         <MyAnimeListStyles>
            <h2>My Anime List</h2>

            {!animeListData && !this.props.animeList ? (
               <ListLoad className="loader" key={0}>
                  <GooSpinner size={100} />
               </ListLoad>
            ) : (
               <ul className="animecards">{AnimeList}</ul>
            )}
         </MyAnimeListStyles>
         //       <ul>
         //          <Transition
         //             items={animeList}
         //             keys={item => item.id}
         //             from={{ opacity: 0 }}
         //             enter={{ opacity: 1 }}
         //             leave={{ opacity: 0 }}
         //             trail={150}
         //          >
         //             {item => props => (
         //                <li style={props} key={item.id}>
         //                   <p>{+1}</p>
         //                   <img src={item.posterimage} alt="animesmallimage" />
         //                   <h1>{item.title}</h1>

         //                   <h3>
         //                      {item.subtype}, {parseInt(item.startDate)}
         //                   </h3>
         //                   <button
         //                      onClick={() =>
         //                         this.removeFromPlaylist(userId, item.id)
         //                      }
         //                   >
         //                      <FontAwesomeIcon
         //                         className="minusicon"
         //                         icon={["fas", "minus-circle"]}
         //                      />
         //                   </button>
         //                </li>
         //             )}
         //          </Transition>
         //       </ul>
         //    )}
         // </MyAnimeListStyles>
      )
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MyAnimeList)
