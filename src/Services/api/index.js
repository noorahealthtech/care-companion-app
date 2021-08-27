import AsyncStorage from '@react-native-community/async-storage'
import { BASE_URL } from '../index'
import { deviceInformation } from '../index'
let deviceInfo = null
deviceInformation((success) => {
  deviceInfo = success
})
export default async function api(path, params, method, isFormData) {
  const accessToken = await AsyncStorage.getItem('access_token')
  const mobileNumber = await AsyncStorage.getItem('mobileNumber')
  console.log('accessToken =====> ', accessToken)
  console.log("Parameter =====> ",JSON.stringify(params));
  var parameter = params
  if(parameter.hasOwnProperty('mobile_number')){
  } else {
    parameter.mobile_number = mobileNumber
  }
  
  let options
  isFormData
    ? (options = {
        headers: {
          // 'Accept': 'application/json',
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          // TOKEN: 'j56sugRk029Po5DB',
          APITYPE: 1,
          Authorization: `Bearer ${accessToken}`,
        },
        method: method,
        body: parameter,
      })
    : (options = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // TOKEN: deviceInfo ? deviceInfo.id : 'j56sugRk029Po5DB',
          APITYPE: 1,
          Authorization: `Bearer ${accessToken}`,
        },
        method: method,
        ...(parameter && { body: JSON.stringify(parameter) }),
      })
  try {
    console.log('showing options here', options)
    console.log('API URL ', BASE_URL + path)
    const resp = await fetch(BASE_URL + path, options)
    console.log('showing response ', resp)

    const responseJSON = await resp.json()
    console.log('showing response parsed ', responseJSON)
    // return JSON.parse(responseJSON.data)
    return responseJSON
  } catch (error) {
    return error
  }
}
