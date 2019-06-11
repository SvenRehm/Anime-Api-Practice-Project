import {
   REQUEST_SINGLE_MORE_INFO_PENDING,
   REQUEST_SINGLE_MORE_INFO_SUCCESS,
   REQUEST_SINGLE_MORE_INFO_FAILED
} from "../../../constants/action-types"

const initialSingleMoreInfo = {
   isPending: false,
   isOnPlaylist: false,
   singleMoreInfo: {
      attributes: {
         synopsis: "",
         coverImage: {
            large: ""
         },
         posterImage: {
            large: "",
            medium: ""
         }
      },
      relationships: {
         categories: {
            links: {
               related: ""
            }
         }
      }
   },
   singleCatergories: [
      {
         attributes: {
            title: ""
         }
      }
   ],

   error: ""
}
export const requestSingleMoreInfo = (
   state = initialSingleMoreInfo,
   action = {}
) => {
   switch (action.type) {
      case REQUEST_SINGLE_MORE_INFO_PENDING: //temporär reset state
         return Object.assign({}, state, {
            isPending: true,
            singleMoreInfo: {
               attributes: {
                  synopsis: "",
                  coverImage: {
                     large: ""
                  },
                  posterImage: {
                     large: "",
                     medium: ""
                  }
               },
               relationships: {
                  categories: {
                     links: {
                        related: ""
                     }
                  }
               }
            }
         })

      case REQUEST_SINGLE_MORE_INFO_SUCCESS:
         return Object.assign({}, state, {
            singleMoreInfo: action.payload,
            isPending: false
         })

      case REQUEST_SINGLE_MORE_INFO_FAILED:
         return Object.assign({}, state, {
            error: action.payload,
            isPending: false
         })

     

      case "REQUEST_SINGLE_CATEGORIES_SUCCESS":
         return {
            ...state,
            singleCatergories: [...action.payload]
         }
      default:
         return state
   }
}
