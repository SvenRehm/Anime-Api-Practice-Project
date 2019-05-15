import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import {
   loginRemoveFromePlaylist,
   addEpisodeToAnime
} from "../Login/actions/Login"
import {
   requestList,
   RemoveFromePlaylist,
   ExpandListItem,
   changeStatus
} from "./actions/requestList"
// import { Spring, config, Trail } from "react-spring/renderprops"
import { Loader } from "../../Styled/animation"
import { GooSpinner } from "react-spinners-kit"
import { IconContext } from "react-icons"
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io"
import MyStatus from "../MyAnimeList/MyStatus"

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
         dispatch(RemoveFromePlaylist(userId, animeid)),
      onAddEpisodeToAnime: (userId, animeid, plusone) =>
         dispatch(addEpisodeToAnime(userId, animeid, plusone)),
      onExpandListItem: (animeid, expand) =>
         dispatch(ExpandListItem(animeid, expand)),
      onChangeStatus: (userId, animeid, e) =>
         dispatch(changeStatus(userId, animeid, e))
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

const AnimeCardsList = styled.ul`
   grid-column: 4 / span 6;
   grid-row: 4/-1;
   color: ${props => props.theme.primary_text};
   list-style: none;
   /* display: grid;
   grid-auto-rows: repeat(auto-fill, minmax(130px, 130px));  */
   grid-gap: 0.7em;

   li {
      background-color: ${props => props.theme.primary_light};
      margin-bottom: 2.5em;
      /* grid-template-columns: repeat(7, minmax(0, 1fr)); */
      height: 120px;
      transition: height 0.4s linear;
      /* overflow-y: (${props => (props.expand ? "hidden " : "visible")}); */
      /* overflow-y: hidden ; */
      
      table{
         border-top:1px solid ${props => props.theme.primary_dark};
        padding-top:4em;
        padding-right:250px;
       
         margin: 0em 0em 3em 140px;
        visibility: visible;
         opacity: 1;
       transition: opacity 1s linear;
       color: ${props => props.theme.primary_text};
      
 
     
      
        padding-top:4em;
        padding-right:250px;
       
   margin: 0em 0em 3em 140px;
     
  
      /* width: 50%; */
      width:700px;
      height: 200px;
      line-height: 1.4;
      text-transform: uppercase;
      font-size: 0.7em;
     
    
      .right-align {
        text-align: right;
        font-weight: 700;
        max-width:300px;
        word-wrap:break-word
      }
      tr:nth-child(even) {
  background: ${props => props.theme.primary_light};
}
   
   visibility: hidden;
  opacity: 0;
  transition: visibility 0s 300ms, opacity 300ms linear;
}
      div.noexpand {
         /* min-height: 120px; */
         height: 120px;
         display: grid;
         width: 100%;
         grid-template-columns: repeat(7, minmax(0, 1fr));
         background-color: ${props => props.theme.primary_light};
         position:relative;
         /* border: 1px solid ${props => props.theme.border}; */
      
   
      }

      &.expanded {
         transition: height 0.4s linear;
         height:360px;
      
        
      }
      &.expanded table {
         visibility: visible;
  opacity: 1;
  transition: opacity 1s linear;
        border-top:1px solid ${props => props.theme.primary_dark};
        padding-top:4em;
        padding-right:250px;
       
margin: 0em 0em 3em 140px;
     
  color: ${props => props.theme.primary_text};
      /* width: 50%; */
width:700px;
height: 200px;
      line-height: 1.4;
      text-transform: uppercase;
      font-size: 0.7em;
     
    
      .right-align {
        text-align: right;
        font-weight: 700;
        max-width:300px;
        word-wrap:break-word
      }
      tr:nth-child(even) {
  background: ${props => props.theme.primary_light2};
}

  
      } 
      
     
      }
      &:last-child {
         margin-bottom: 2em;
      }
      img {
         height: 120%;
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
         /* text-overflow: ellipsis; */

         span {
            font-size: 15px;
            font-weight: 300;
            color: #9b9b9b;
         }
      }
   
`

const InlineList = styled.ul`
   grid-column: 5 / span 3;
   grid-row: 1;
   list-style-type: none;
   align-self: center;
   /* justify-self: center; */
   justify-self: end;
   button.editbutton {
      text-align: center;
      width: 75px;
      height: 30px;
      line-height: 30px;
      color: White;
      background-color: ${props => props.theme.secondary};
      border: none;
      cursor: pointer;

      .dropdownarrow {
         width: 17px;
         height: 17px;
         margin-left: 5px;
         transform: translateY(+20%);
      }
   }
   button.plusbutton {
      margin-left: 5px;
      width: 22px;
      height: 22px;
      transform: translateY(+25%);
      color: ${props => props.theme.secondary};
      background-color: ${props => props.theme.primary_light};
      border: none;
      line-height: 22px;
      cursor: pointer;

      .plusicon {
         width: 22px;
         height: 22px;
         /* color: ${props => props.theme.secondary}; */
      }
      &:hover {
         color: ${props => props.theme.secondary_light};
       
      }
      &:focus {
         outline: none;
      }
   }
   li:first-child {
      font-size: 15px;
      border: none;
      display: inline;
  
      /* padding: 0.5em 1em 0.5em 2em; */
      /* border-left: solid 1px #707070; */
   }
   li {
      display: inline;
   
          span {
         
         display: inline-block;
         width: 135px;
         text-align: center;
         /* margin-left: 15px; */
      }
   }
`

const MyAnimeListStyles = styled.div`
   display: grid;
   grid-template-rows: repeat(10, 100px);
   grid-template-columns: repeat(12, minmax(0, 1fr));

   h2 {
      grid-column: 1/-1;
      grid-row: 2;
      font-size: 2em;
      justify-self: center;
      color: ${props => props.theme.primary_text};
   }
`

class MyAnimeList extends Component {
   constructor(props) {
      super()
      this.state = {
         animeids: props.animeids,
         animeList: props.animeList
      }
   }

   componentDidMount() {
      if (this.props.animeListData) {
         this.props.onRequestList(this.props.animeids)
      }
   }
   // componentWillReceiveProps(newProps) {
   //    console.log(newProps.animeListData)
   //    if (newProps.animeListData !== this.props.animeListData) {
   //       this.props.onRequestList(newProps.animeids)
   //    }
   // }
   componentDidUpdate(prevProps, prevState) {
      if (prevState.animeids !== this.state.animeids) {
         console.log(
            "prevstate",
            prevState.animeids,
            "current ",
            this.state.animeids
         )
         this.props.onRequestList(this.state.animeids)
      }
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animeids !== prevState.animeids) {
         return { animeids: nextProps.animeids }
      } else return null
   }

   removeFromPlaylist = (userid, animeid) => {
      this.props.onLoginRemoveFromePlaylist(userid, animeid)
      this.props.onRemoveFromePlaylist(userid, animeid)
   }

   addEpisodeToAnime = (userid, animeid, plusone) => {
      this.props.onAddEpisodeToAnime(userid, animeid, plusone)
   }
   expandListItem = (animeid, expand) => {
      this.props.onExpandListItem(animeid, expand)
   }

   onChangeStatus = (userId, animeid, status) => {
      this.props.onChangeStatus(userId, animeid, status)
   }

   render() {
      const { animeList, animeListData } = this.props
      const { userId } = this.props

      // const AnimeList = animeList.map((category, i) => {
      //    const { userId } = this.props

      //    return (
      //       <Spring
      //          key={i}
      //          delay={250 * i}
      //          from={{
      //             opacity: 0
      //          }}
      //          to={{
      //             opacity: 1
      //          }}
      //       >
      //          {props => (
      //             <li
      //                style={props}
      //                key={i}
      //                className={`${animeList[i].isExpanded ? "expanded" : ""}`}
      //             >
      //                {/* <p>{i + 1}</p> */}
      //                <div className="noexpand">
      //                   <img
      //                      src={animeList[i].posterimage}
      //                      alt="animesmallimage"
      //                   />
      //                   <h1>
      //                      {animeList[i].title} <br />
      //                      <span>
      //                         {animeList[i].subtype},
      //                         {parseInt(animeList[i].startDate)}
      //                      </span>
      //                   </h1>
      //                   <InlineList>
      //                      <li>
      //                         <span>
      //                            {animeListData[i].status === "Completed"
      //                               ? animeList[i].episodeCount
      //                                  ? animeList[i].episodeCount
      //                                  : 0
      //                               : animeListData[i].episodes_watched}
      //                            /
      //                            {animeList[i].episodeCount
      //                               ? animeList[i].episodeCount
      //                               : 0}
      //                            <button
      //                               className="plusbutton"
      //                               disabled={
      //                                  animeListData[i].episodes_watched >=
      //                                  animeList[i].episodeCount
      //                               }
      //                               onClick={() =>
      //                                  this.addEpisodeToAnime(
      //                                     userId,
      //                                     animeList[i].id,
      //                                     animeListData[i].episodes_watched + 1
      //                                  )
      //                               }
      //                            >
      //                               <IconContext.Provider
      //                                  value={{
      //                                     className: "plusicon"
      //                                  }}
      //                               >
      //                                  <IoMdAdd />
      //                               </IconContext.Provider>
      //                            </button>
      //                         </span>
      //                      </li>
      //                      <li>
      //                         {/* <span>{animeListData[i].status}</span> */}
      //                         <span>
      //                            <MyStatus
      //                               defaultValue={animeListData[i].status}
      //                               userId={userId}
      //                               animeid={animeList[i].id}
      //                               onChangeStatus={this.onChangeStatus}
      //                            />
      //                         </span>
      //                      </li>
      //                      <li>
      //                         <span>
      //                            <button
      //                               className="editbutton"
      //                               onClick={() =>
      //                                  this.expandListItem(
      //                                     animeList[i].id,
      //                                     !animeList[i].isExpanded
      //                                  )
      //                               }
      //                            >
      //                               Info
      //                               <IconContext.Provider
      //                                  value={{
      //                                     className: "dropdownarrow"
      //                                  }}
      //                               >
      //                                  <IoMdArrowDropdown />
      //                               </IconContext.Provider>
      //                            </button>
      //                         </span>
      //                      </li>
      //                   </InlineList>
      //                </div>
      //                <table className="table">
      //                   <tbody>
      //                      <tr>
      //                         <td> Status </td>
      //                         <td className="right-align">
      //                            {animeList[i].status}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> Start Date </td>
      //                         <td className="right-align">
      //                            {animeList[i].startDate}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> End Date </td>
      //                         <td className="right-align">
      //                            {animeList[i].endDate}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> Average Rating </td>
      //                         <td className="right-align">
      //                            {animeList[i].averageRating}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> Popularity Rank </td>
      //                         <td className="right-align">
      //                            {animeList[i].popularityRank}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> ageRatingGuide </td>
      //                         <td className="right-align">
      //                            {animeList[i].ageRatingGuide}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> nsfw </td>
      //                         <td className="right-align">
      //                            {animeList[i].nsfw ? "yes" : "no"}
      //                         </td>
      //                      </tr>
      //                      <tr>
      //                         <td> MY Notes </td>
      //                         <td className="right-align">
      //                            {animeListData[i].notes}
      //                         </td>
      //                      </tr>
      //                   </tbody>
      //                </table>
      //             </li>
      //          )}
      //       </Spring>
      //    )
      // })

      const AnimeList = animeList.map((category, i) => {
         return (
            <li
               // style={props}
               key={i}
               className={`${animeList[i].isExpanded ? "expanded" : ""}`}
            >
               {/* <p>{i + 1}</p> */}
               <div className="noexpand">
                  <img src={animeList[i].posterimage} alt="animesmallimage" />
                  <h1>
                     {animeList[i].title} <br />
                     <span>
                        {animeList[i].subtype},{" "}
                        {parseInt(animeList[i].startDate)}
                     </span>
                  </h1>
                  <InlineList>
                     <li>
                        <span>
                           {animeListData[i].status === "Completed"
                              ? animeList[i].episodeCount
                                 ? animeList[i].episodeCount
                                 : 0
                              : animeListData[i].episodes_watched}
                           /
                           {animeList[i].episodeCount
                              ? animeList[i].episodeCount
                              : 0}
                           <button
                              className="plusbutton"
                              disabled={
                                 animeListData[i].episodes_watched >=
                                 animeList[i].episodeCount
                              }
                              onClick={() =>
                                 this.addEpisodeToAnime(
                                    userId,
                                    animeList[i].id,
                                    animeListData[i].episodes_watched + 1
                                 )
                              }
                           >
                              <IconContext.Provider
                                 value={{
                                    className: "plusicon"
                                 }}
                              >
                                 <IoMdAdd />
                              </IconContext.Provider>
                           </button>
                        </span>
                     </li>
                     <li>
                        {/* <span>{animeListData[i].status}</span> */}
                        <span>
                           <MyStatus
                              defaultValue={animeListData[i].status}
                              userId={userId}
                              animeid={animeList[i].id}
                              onChangeStatus={this.onChangeStatus}
                           />
                        </span>
                     </li>
                     <li>
                        <span>
                           <button
                              className="editbutton"
                              onClick={() =>
                                 this.expandListItem(
                                    animeList[i].id,
                                    !animeList[i].isExpanded
                                 )
                              }
                           >
                              Info
                              <IconContext.Provider
                                 value={{
                                    className: "dropdownarrow"
                                 }}
                              >
                                 <IoMdArrowDropdown />
                              </IconContext.Provider>
                           </button>
                        </span>
                     </li>
                  </InlineList>
               </div>
               <table className="table">
                  <tbody>
                     <tr>
                        <td> Status </td>
                        <td className="right-align">{animeList[i].status}</td>
                     </tr>
                     <tr>
                        <td> Start Date </td>
                        <td className="right-align">
                           {animeList[i].startDate}
                        </td>
                     </tr>
                     <tr>
                        <td> End Date </td>
                        <td className="right-align">{animeList[i].endDate}</td>
                     </tr>
                     <tr>
                        <td> Average Rating </td>
                        <td className="right-align">
                           {animeList[i].averageRating}
                        </td>
                     </tr>
                     <tr>
                        <td> Popularity Rank </td>
                        <td className="right-align">
                           {animeList[i].popularityRank}
                        </td>
                     </tr>
                     <tr>
                        <td> ageRatingGuide </td>
                        <td className="right-align">
                           {animeList[i].ageRatingGuide}
                        </td>
                     </tr>
                     <tr>
                        <td> nsfw </td>
                        <td className="right-align">
                           {animeList[i].nsfw ? "yes" : "no"}
                        </td>
                     </tr>
                     <tr>
                        <td> MY Notes </td>
                        <td className="right-align">
                           {animeListData[i].notes}
                        </td>
                     </tr>
                  </tbody>
               </table>
            </li>
         )
      })

      return (
         <MyAnimeListStyles>
            <h2> My Anime List </h2>
            {!animeListData && !this.props.animeList ? (
               <ListLoad className="loader" key={0}>
                  <GooSpinner size={100} />
               </ListLoad>
            ) : (
               <AnimeCardsList> {AnimeList} </AnimeCardsList>
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
