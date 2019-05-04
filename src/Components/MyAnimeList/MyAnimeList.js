import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import {
   loginRemoveFromePlaylist,
   addEpisodeToAnime
} from "../Login/actions/Login"
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
         dispatch(RemoveFromePlaylist(userId, animeid)),
      onAddEpisodeToAnime: (userId, animeid, plusone) =>
         dispatch(addEpisodeToAnime(userId, animeid, plusone))
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
   color: ${props => props.theme.secondary};
   list-style: none;
   /* display: grid;
   grid-auto-rows: repeat(auto-fill, minmax(130px, 130px));  */
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
      margin-bottom: 1.5em;
      &:last-child {
         margin-bottom: 2em;
      }
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
      /* text-overflow: ellipsis; */

      span {
         font-size: 15px;
         font-weight: 300;
         color: #9b9b9b;
      }
   }

   
   }
      `

const InlineList = styled.ul`
   grid-column: 5 / span 3;
   grid-row: 1;
   list-style-type: none;
   align-self: center;
   justify-self: center;

   button.editbutton {
      width: 70px;
      height: 27px;
      line-height: 27px;
      color: White;
      background-color: #0088f1;
      border: none;
      cursor: pointer;
   }
   button.plusbutton {
      margin-left: 5px;
      width: 25px;
      height: 22px;
      transform: translateY(+20%);
      color: ${props => props.theme.secondary};
      background-color: #414141;
      border: none;
      line-height: 22px;
      cursor: pointer;

      .plusicon {
         width: 22px;
         height: 22px;
         color: #0088f1;
      }
      &:hover {
         color: ${props => props.theme.accent};
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
      border-left: solid 1px #707070;
   }
   li {
      padding: 0.3em 0 0.3em 0;
      font-size: 15px;
      border: none;
      display: inline;
      /* padding: 0.5em 2em 0.5em 2em; */
      border-left: solid 1px #707070;
      span {
         line-height: 17px;
         display: inline-block;
         width: 110px;
         text-align: center;
         margin-left: 15px;
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
      color: ${props => props.theme.secondary};
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

   addEpisodeToAnime = (userid, animeid, plusone) => {
      console.log(userid, animeid, plusone)
      this.props.onAddEpisodeToAnime(userid, animeid, plusone)
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
                     <InlineList>
                        <li>
                           <span>
                              {" "}
                              {animeListData[i].episodes_watched}/
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
                           <span>{animeListData[i].status}</span>{" "}
                        </li>
                        <li>
                           {" "}
                           <span>
                              <button className="editbutton">Show More</button>
                           </span>
                        </li>
                     </InlineList>
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
               <AnimeCardsList>{AnimeList}</AnimeCardsList>
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
