import React, { Component } from "react"
import { connect } from "react-redux"
import {
   requestSingleMoreInfo,
   requestSingleCategories
} from "./actions/requestSingleMoreInfo"
import { loginAddToPlaylist2 } from "../Login/actions/Login"
import { loginRemoveFromePlaylist } from "../Login/actions/Login"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import { LayoutGrid, CategoriesList, Rankings } from "../../Styled"
import { Link } from "react-router-dom"
import { getJwt } from "../helpers/jwt"
import { IconContext } from "react-icons"
import { IoMdHeart, IoMdStar, IoMdAdd, IoMdLogIn } from "react-icons/io"
import { CircleSpinner } from "react-spinners-kit"
import ReactTooltip from "react-tooltip"

const mapStateToProps = state => {
   const {
      youtubeVideoId,
      coverImage,
      posterImage,
      averageRating,
      synopsis,
      canonicalTitle,
      subtype,
      status,
      ageRatingGuide,
      episodeCount,
      startDate,
      endDate,
      popularityRank,
      ratingRank
   } = state.requestSingleMoreInfo.singleMoreInfo.attributes

   return {
      LoggedIn: state.Login.LoggedIn,
      isPending: state.requestSingleMoreInfo.isPending,
      animeids: state.Login.user.animeids,
      userId: state.Login.user.id,
      id: state.requestSingleMoreInfo.singleMoreInfo.id,
      youtubeVideoId: youtubeVideoId,
      popularityRank: popularityRank,
      ratingRank: ratingRank,
      singleCatergories: state.requestSingleMoreInfo.singleCatergories,
      singleMoreInfo: state.requestSingleMoreInfo.singleMoreInfo,
      coverImage: coverImage,
      averageRating: averageRating,
      posterImage: posterImage,
      synopsis: synopsis,
      status: status,
      episodeCount: episodeCount,
      ageRatingGuide: ageRatingGuide,
      subtype: subtype,
      canonicalTitle: canonicalTitle,
      startDate: startDate,
      endDate: endDate,
      categories:
         state.requestSingleMoreInfo.singleMoreInfo.relationships.categories
            .links.related
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onRequestSingleMoreInfo: animeid =>
         dispatch(requestSingleMoreInfo(animeid)),
      onRequestSingleCategories: animeid =>
         dispatch(requestSingleCategories(animeid)),

      onLoginAddToPlaylist2: (userId, animeid) =>
         dispatch(loginAddToPlaylist2(userId, animeid)),
      onLoginRemoveFromePlaylist: (userId, animeid) =>
         dispatch(loginRemoveFromePlaylist(userId, animeid))
   }
}
//loading styles
const GreyBackground = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(7, 100px);
  overflow: hidden;

  background: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
  .spinner {
    grid-column: 1/-1;
    grid-row: 1 / span 6;
    z-index: 2;
    align-self: center;
    justify-self: center;

 
    div > div>div{
      background-color:${props => props.theme.secondary};;
    }
  }
  div.coverImage {
    margin-top: 57px;
    grid-column: 1/-1;
    grid-row: 1 / span 4;
    align-self: start;
    z-index: 2;
    height: 100%;
    /* background: ${props => props.theme.primary}; */
    z-index: 2;
    color: ${props => props.theme.secondary};
  }
  div.image {
    grid-column: 3 / span 3;
    grid-row: 4 / span 4;
    align-self: start;
    height: 100%;
    z-index: 2;
    background: ${props => props.theme.lightgrey};
  }
`

class SingleMoreInfo extends Component {
   componentDidMount() {
      let id = this.props.match.params.id
      this.props.onRequestSingleMoreInfo(id)
      this.props.onRequestSingleCategories(id)
   }

   addToPlaylist = () => {
      this.props.onLoginAddToPlaylist(this.props.userId, this.props.id)
   }
   addToPlaylist2 = () => {
      this.props.onLoginAddToPlaylist2(this.props.userId, this.props.id)
   }
   removeFromPlaylist = () => {
      this.props.onLoginRemoveFromePlaylist(this.props.userId, this.props.id)
      console.log(this.props.userId, this.props.id)
   }

   render() {
      const jwt = getJwt()
      const {
         canonicalTitle,
         synopsis,
         posterImage,
         coverImage,
         subtype,
         status,
         episodeCount,
         ageRatingGuide,
         startDate,
         endDate,
         averageRating,
         singleCatergories,
         popularityRank,
         ratingRank,
         youtubeVideoId
      } = this.props

      const category = singleCatergories.map((category, i) => {
         return (
            <li key={i}>
               <a href="/">{singleCatergories[i].attributes.title}</a>
            </li>
         )
      })

      const animeListData = this.props.animeids

      const isAnimeOnList = animeListData
         ? animeListData.find(
              // eslint-disable-next-line
              i => i == this.props.match.params.id
           )
         : null

      return !this.props.isPending ? (
         <LayoutGrid>
            <div className="darkimg">
               <img
                  alt=""
                  src={coverImage === null ? null : coverImage.large}
               />
            </div>

            <h1>{canonicalTitle}</h1>

            <Rankings>
               <h2>
                  <IconContext.Provider
                     value={{
                        className: "heart"
                     }}
                  >
                     <IoMdHeart />
                  </IconContext.Provider>
                  Rank# {popularityRank}
               </h2>
               <h2>
                  <IconContext.Provider
                     value={{
                        className: "star"
                     }}
                  >
                     <IoMdStar />
                  </IconContext.Provider>
                  Rank# {ratingRank}({averageRating})
               </h2>
            </Rankings>
            <CategoriesList>{category}</CategoriesList>
            <div className="AnimeInfo">
               <img alt="" src={posterImage.medium} />
               <table className="table-styles">
                  <tbody>
                     <tr>
                        <td>TYPE</td>
                        <td className="right-align">{subtype}</td>
                     </tr>

                     <tr>
                        <td>STATUS</td>
                        <td className="right-align green">{status}</td>
                     </tr>
                     <tr>
                        <td>averageRating</td>
                        <td className="right-align">{averageRating}</td>
                     </tr>
                     <tr>
                        <td>EPISODES</td>
                        <td className="right-align">{episodeCount}</td>
                     </tr>

                     <tr>
                        <td>startDate</td>
                        <td className="right-align">{startDate}</td>
                     </tr>
                     <tr>
                        <td>endDate</td>
                        <td className="right-align">{endDate}</td>
                     </tr>
                     <tr>
                        <td>Age</td>
                        <td className="right-align">{ageRatingGuide}</td>
                     </tr>
                  </tbody>
               </table>
               {!jwt ? (
                  <Link data-tip="React-tooltip" id="loginToAdd" to="/Login">
                     <IconContext.Provider
                        value={{
                           className: "logintoadd"
                        }}
                     >
                        <IoMdLogIn />
                     </IconContext.Provider>
                  </Link>
               ) : isAnimeOnList ? null : (
                  <button onClick={this.addToPlaylist2}>
                     <IconContext.Provider
                        value={{
                           className: "plusicon"
                        }}
                     >
                        <IoMdAdd />
                     </IconContext.Provider>
                  </button>
               )

               // (
               //    <button onClick={this.removeFromPlaylist}>
               //       <IconContext.Provider
               //          value={{
               //             className: "minusicon"
               //          }}
               //       >
               //          <IoMdRemove />
               //       </IconContext.Provider>
               //    </button>
               // )
               }
            </div>

            <div className="text">
               <h2>Synopsis</h2>
               <p>{synopsis}</p>
            </div>

            {youtubeVideoId === "" ? (
               <iframe
                  title="animeintro"
                  src={`https://www.youtube.com/embed/`}
                  frameBorder="0"
                  allowFullScreen
               />
            ) : (
               <iframe
                  title="animeintro"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  frameBorder="0"
                  allowFullScreen
               />
            )}
            <ReactTooltip place="top" type="success" effect="float">
               <span>Login to Add to loginAddToPlaylist2</span>
            </ReactTooltip>
         </LayoutGrid>
      ) : (
         <GreyBackground>
            <div className="coverImage" />
            <div className="image" />

            <div className="spinner">
               <CircleSpinner size={90} loading={this.props.isPending} />
            </div>
         </GreyBackground>
      )
   }
}

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(SingleMoreInfo)
)
