import * as TYPES from '../types'
import * as Util from '../../../Services'
import * as TASKS from '../index'
import * as AuthenticationApi from '../../../Services/api/methods/authenticationMethods'
import * as StoryApi from '../../../Services/api/methods/storyMethods'
import { CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

export const getAppSettings = (userApp) => {
  return async (dispatch) => {
    try {
      // let params = { user_id: "0", appuser_id: "0", access_token: "", token: "j56sugRk029Po5DB", }
      let params = {
        // user_id: 0,
        // appuser_id: '0',
        // access_token: '',
        // token: 'j56sugRk029Po5DB',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        mobile_number: userApp.mobile_number,
        password: 'Noora@123',
        app_type: "tb"
      }
      let api = await AuthenticationApi.getAppSetting(params)
      console.log(
        'showing App Setting Api Response==== ',
        JSON.stringify(api.access_token),
      )
      if (api && api.access_token) {
        AsyncStorage.setItem('access_token', String(api.access_token))
      }
    } catch (error) {}
  }
}
// export const requestOtp = (userApp, navigation, setLoading) => {
//   return async dispatch => {
//     try {
//       let params = { mobile_number: userApp.mobile_number, otp: "1234", token: "j56sugRk029Po5DB", appuser_id: "0", access_token: "" }
//       let api = await AuthenticationApi.verifyMobileOTP(params)
//       console.log("showing api response", api)
//       if (api.success) {
//         dispatch({
//           type: TYPES.ADD_USER,
//           user: api.details
//         })
//         setLoading(false)
//         navigation.dispatch(
//           CommonActions.reset({
//             index: 0,
//             routes: [{ name: 'States' }],
//           }),
//         )
//       }
//       else {
//         setLoading(false)
//         Util.showToast(api.message)
//       }
//       // dispatch({
//       //   type: TYPES.ADD_USER,
//       //   userList: api.data
//       // })
//     } catch (error) {
//       setLoading(false)
//     }
//   }
// }

export const requestOtp = (userApp, navigation, setLoading) => {
  return async (dispatch) => {
    try {
      let params = {
        mobile_number: userApp.mobile_number,
        // otp: '1234',
        // token: 'j56sugRk029Po5DB',
        // appuser_id: '0',
        // access_token: '',
        grant_type: 'password',
        client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
        client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
        // mobile_number:  '8105739684',
        password: 'Noora@123',
        app_type: "tb"
      }

      let authApi = await AuthenticationApi.getAppSetting(params)
      console.log(
        'showing App Setting Api Response==== ',
        JSON.stringify(authApi.access_token),
      )

      if (authApi && authApi.access_token) {
        console.log('====================================');
        console.log("token response  =======> ",authApi.access_token);
        console.log('====================================');
        console.log('ParamsRequest===', JSON.stringify(params))
        AsyncStorage.setItem('access_token', String(authApi.access_token))
        AsyncStorage.setItem('mobileNumber', String(userApp.mobile_number))
        
        let api = await AuthenticationApi.verifyMobileOTP(params)

        console.log(
          'verifyMobileOTP showing otp Response+====',
          JSON.stringify(api),
        )
        
      

        
        if (api) {
          dispatch({
            type: TYPES.ADD_USER,
            user: api.details,
          })
          setLoading(false)
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'States' }],
            }),
          )
        } else {
          setLoading(false)
          Util.showToast(api.message)
        }
      }
      // dispatch({
      //   type: TYPES.ADD_USER,
      //   userList: api.data
      // })
    } catch (error) {
      setLoading(false)
    }
  }
}

export const verifyOtp = (params) => {
  return async (dispatch) => {
    dispatch(TASKS.showLoader())
    try {
      let api = await AuthenticationApi.verifyOtp(params)
      console.log('VerifyOTP=====', JSON.stringify(api))
      dispatch(TASKS.hideLoader())
      if (api.status == true && api.code == 200) {
        if (api.data) {
          dispatch({
            type: TYPES.SAVE_TOKEN,
            token: api.data.auth_token,
          })
          Util.navigate('SignUp')
        }
      } else if (api.code == 405) {
        Util.showToast(api.data)
      } else {
        Util.showToast(Util.APPLICATION_CONSTANTS.invalidCode)
      }
    } catch (error) {
      dispatch(TASKS.hideLoader())
    }
  }
}
export const verifyOtpUpdated = (params) => {
  return async (dispatch) => {
    // dispatch(TASKS.showLoader());
    try {
      let api = await AuthenticationApi.verifyUpdatedPhoneNumber(params)
      console.log('VerifyOTPUpdated=====', JSON.stringify(api))
      dispatch(TASKS.hideLoader())
      if (api.status == true && api.code == 200) {
        // if(api.data){
        dispatch({
          type: TYPES.CHANGE_NUMBER,
          phone_number: params.new_phone,
        })
        //   Util.navigate('SignUp')
        // }
        Util.showToast('You have updated number successfully !')
        Util.navigate('Home')
      } else if (api.code == 405) {
      } else {
        // Util.showToast(Util.APPLICATION_CONSTANTS.invalidCode)
      }
    } catch (error) {
      alert(error)
      // dispatch(TASKS.hideLoader());
      console.log('showing error ', error)
    }
  }
}
export const loginUser = (params) => {
  console.log('showing params', params)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'password',
      client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
      client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
      mobile_number: '8105739684',
      password: 'Noora@123',
    }),
  }
  fetch('http://35.200.144.91/cca/oauth/token.json', requestOptions)
    .then(async (response) => {
      const isJson = response.headers
        .get('content-type')
        ?.includes('application/json')
      const data = isJson && (await response.json())

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status
        return Promise.reject(error)
      }

      // this.setState({ postId: data.id })
    })
    .catch((error) => {
      // this.setState({ errorMessage: error.toString() })
      console.error('There was an error!', error)
    })
}
