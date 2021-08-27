import * as TYPES from '../types'
import * as Util from '../../../Services'
import * as storyApi from '../../../Services/api/methods/storyMethods'

//Method will pass nurse id and get all the nurses fields
export const getNurseFeed = (nurseId, setLoading) => {
  return async (dispatch) => {
    try {
      let params = {
        nurse_id: nurseId,
        // updated_date: 0,
        appuser_id: nurseId,
        // access_token: '',
        // token: 'j56sugRk029Po5DB',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      let api = await storyApi.getNurseContent(params)
      console.log('GetNurseFeed=====', JSON.stringify(api))
      if (api.success) {
        console.log('api.success====',api)
        api.details.map((feed) => {
          feed.like_count = parseInt(feed.like_count)
        })
        dispatch({
          type: TYPES.FEED_DATA,
          feed: api.details,
        })
        Util.navigate('Feed')
        setLoading(false)
      } else {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }
}

//Method will pass nurse id and get nurse profile
export const fetchNurseProfile = (nurseId) => {
  return async (dispatch) => {
    try {
      let params = {
        nurse_id: nurseId,
        // updated_date: 0,
        appuser_id: nurseId,
        // access_token: "",
        // token: "j56sugRk029Po5DB",
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      console.log('fetchNurseProfileParams======', JSON.stringify(params))
      let api = await storyApi.getNurseProfile(params)
      console.log('fetchNurseProfileApiParams======', JSON.stringify(api))
      if (api.success) {
        dispatch({
          type: TYPES.NURSE_PROFILE,
          profile: api.details,
        })
        Util.navigate('Profile')
      } else {
      }
    } catch (error) {}
  }
}

//Method will pass nurse id and mark attendance against it
export const markAttendance = (params, setLoading, done, isEditProfile) => {
  return async (dispatch) => {
    try {
      console.log('SubmitParams=======', JSON.stringify(params))
      let api = await storyApi.submitClass(params)
      console.log(
        'c',
        JSON.stringify(api),
      )
      if (api.success) {
        setLoading(true)
        if (isEditProfile) {
          done(true)
        } else {
          Util.navigate('AttendanceMarked')
        }
      } else {
        setLoading(false)
        if (isEditProfile) {
          done(false)
        }
      }
    } catch (error) {
      setLoading(false)
      if (isEditProfile) {
        done(false)
      }
      console.log('showing error', error)
    }
  }
}

//Update nurse profile
export const updateUserProfiles = (params,success, reject) => {
  console.log('Update Params====', params)
  return async (dispatch) => {
    try {
      let api = await storyApi.updateUserProfile(params)
      console.log('shwoing response UpdateUserProfile here after submit=====', api)
      if (api.success) {
        success(true)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//Fetch previous classes
export const getFullData = (nurseId, success, reject) => {
  return async (dispatch) => {
    try {
      let params = {
        nurse_id: nurseId,
        appuser_id: nurseId,
        // access_token: '',
        // token: 'j56sugRk029Po5DB',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      let api = await storyApi.getNurseClass(params)
      console.log('showing getNurseClass response===', api)
      if (api.success) {
        if (api.details.length > 0) {
          for (var i = 0; i < api.details.length; i++) {
            if (i % 2 == 0) {
              api.details[i].isEven = true
            } else {
              api.details[i].isEven = false
            }
          }
        }
        console.log('API DETAILS======', JSON.stringify(api.details))
        dispatch({
          type: TYPES.NURSE_PREVIOUS_CLASSES,
          previousClasses: api.details,
        })
        success(true)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//getComments for user feed

export const fetchNurseComments = (nurseId, content_id, success, reject) => {
  return async (dispatch) => {
    try {
      let params = {
        nurse_id: nurseId,
        content_id: content_id,
        appuser_id: nurseId,
        // access_token: '',
        // token: 'j56sugRk029Po5DB',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      console.log('ParamsOfFetchNurseComments===', params)
      let api = await storyApi.getContentComment(params)
      console.log('shwoing FetchNurseComment here for submit', JSON.stringify(api))
      if (api.success) {
        dispatch({
          type: TYPES.NURSE_COMMENTS,
          comments: api.details,
        })
        success(api.details)
        console.log('APIDetails===', JSON.stringify(api.details))
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//fetch likes by sending content id from feed
export const fetchNurseLikes = (nurseId, content_id, success, reject) => {
  return async (dispatch) => {
    try {
      let params = {
        nurse_id: nurseId,
        content_id: content_id,
        appuser_id: nurseId,
        // access_token: '',
        // token: 'j56sugRk029Po5DB',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      let api = await storyApi.getContentLikes(params)
      console.log('shwoing response of Content Likes here for submit', api)
      if (api.success) {
        success(api.details)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//fetch Online courses
export const fetchOnlineCourses = (userId) => {
  return async (dispatch) => {
    try {
      let params = {
        user_id: userId,
        // token: 'j56sugRk029Po5DB',
        appuser_id: userId,
        // access_token: '',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      let api = await storyApi.getTrainingCourses(params)
      console.log('shwoing response FetchOnline Course here for submit', api)
      if (api) {
        dispatch({
          type: TYPES.ONLINE_COURSES,
          courses: api.details,
        })
      } else {
      }
    } catch (error) {}
  }
}

//fetchCCPtools material

// export const fetchCCPMaterials = (userId, success, reject) => {
//   return async dispatch => {
//     try {
//       let params = {
//         user_id: userId,
//         token: "j56sugRk029Po5DB",
//         appuser_id: userId,
//         access_token: "",
//       }
//       let api = await storyApi.getCCPToolMaterial(params)
//       console.log('shwoing response here for submit', api)
//       if (api.success) {

//         success(api.details)
//       }
//       else {
//         reject(true)
//       }
//     } catch (error) {
//       reject(true)
//     }
//   }
// }

//Add comments to user feed
export const addComments = (params, success, reject) => {
  return async (dispatch) => {
    try {
      let api = await storyApi.postContentCommentBulk(params)
      console.log('AddCommentApi=====', JSON.stringify(api))
      if (api) {
        success(api.details)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//Add Like in feed

export const addLikesToFeed = (params, success, reject) => {
  return async (dispatch) => {
    try {
      console.log('showing params for adding feed in like', params)
      let api = await storyApi.setContentLikeBulk(params)
      console.log('shwoing Set Content Like here for submit', api)
      if (api.success) {
        dispatch({
          type: TYPES.ADD_LIKE,
          id: params,
        })
        success(api.details)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}
export const UpdateDeviceTokenDetails = (params) => {
  return async (dispatch) => {
    try {
      console.log('showing params for adding feed in like', params)
      let api = await storyApi.UpdateFcmToken(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
      }
    } catch (error) {
      console.log('showing error')
    }
  }
}

export const fetchCCPMaterials = (userId, success, reject) => {
  return async (dispatch) => {
    try {
      let params = {
        user_id: userId,
        // token: 'j56sugRk029Po5DB',
        appuser_id: userId,
        // access_token: '',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number: '8105739684',
        password: 'Noora@123',
      }
      let api = await storyApi.getCCPToolMaterial(params)
      console.log('shwoing response getCCPTool Material here for submit', api)
      if (api.success) {
        success(api.details)
      } else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//Add comments to user feed
export const SearchNurses = (searchedTag, success, reject) => {
  console.log('showing search tag', searchedTag.substring(1))
  return async (dispatch) => {
    try {
      let params = {
        user_id: 89,
        token: 'j56sugRk029Po5DB',
        appuser_id: 89,
        search_term: searchedTag.substring(1),
      }
      let api = await storyApi.SearchNurse(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        success(api.details)
      } else {
        reject([])
      }
    } catch (error) {
      reject([])
    }
  }
}
