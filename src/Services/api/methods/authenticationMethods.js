import Api from '../index'
import { endPoints, NEW_BASE_URL } from '../../index'
function sendMobileOTP(params) {
  return Api(endPoints.sendMobileOTP, params, 'post')
}
function verifyMobileOTP(params) {
  console.log('VerifyMOBParams=====', JSON.stringify(params))
  return Api(endPoints.verifyMobileOTP, params, 'post')
}
function getAppSetting(params) {
  console.log('getAppSetting=====', JSON.stringify(params))
  return Api(endPoints.getAppSetting, params, 'post')
}
function updateDeviceToken(params) {
  console.log('UpdateDeviceToken===', JSON.stringify(params))
  return Api(endPoints.updateDeviceToken, params, 'post')
}

function checkLogin(params) {
    console.log('Login Params===', params)
//   fetch('http://35.200.144.91/cca/oauth/token.json', {
//     method: 'POST',
//     headers: new Headers({
//       'Content-Type': 'application/json', // <-- Specifying the Content-Type
//     }),
//     body: JSON.stringify({
//       grant_type: 'password',
//       client_id: 'HtgZ9aPEswoaNqfXLSNlnd9EhAUzmU_ett_MGXqAoHk',
//       client_secret: '6MkGM8zX4rjk0LTU7vt3pB-hjqhWgX1P8VydKzmvLXI',
//       mobile_number: '8105739684',
//       password: 'Noora@123',
//     }),
//   })
//     .then((response) => response.text())
//     .then((responseText) => {
//       alert(responseText)
//     })
//     .catch((error) => {
//       console.error(error)
//     })
}

export {
  sendMobileOTP,
  verifyMobileOTP,
  getAppSetting,
  updateDeviceToken,
  checkLogin
}
