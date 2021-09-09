import Api from '../index'
import { endPoints } from '../../index'
function getNurseContent(params) {
  return Api(endPoints.getNurseContent, params, 'post')
}

function getNurseClass(params) {
  console.log('getNurseClass====', JSON.stringify(params))
  return Api(endPoints.getNurseClass, params, 'post')
}
function setContentLikeBulk(params) { 
  console.log('SetContentLikeBulk====', JSON.stringify(params))
  return Api(endPoints.setContentLikeBulk, params, 'post')
}
function getContentComment(params) {
  console.log('GetContentCommentParamss===', JSON.stringify(params))
  return Api(endPoints.getContentComment, params, 'post')
}
function getContentLikes(params) {
  return Api(endPoints.getContentLikes, params, 'post')
}
function postContentCommentBulk(params) {
  console.log('PostContentComment========', JSON.stringify(params))
  return Api(endPoints.postContentCommentBulk, params, 'post')
}
function getNurseProfile(params) {
  console.log('GetNurseProfile=======', JSON.stringify(params))
  return Api(endPoints.getNurseProfile, params, 'post')
}
function editClass(params) {
  console.log('EditParameter======', JSON.stringify(params))
  return Api(endPoints.editClass, params, 'post')
}
// function getNurseProfile(params) {
//   console.log('Login Params===', params)
//   fetch('http://35.200.144.91/cca/users/show_profile.json', {
//     method: 'POST',
//     headers: new Headers({
//       'Content-Type': 'application/json',
//       TOKEN: 'j56sugRk029Po5DB',
//       APITYPE: 1,
//       'Authorization': 'Bearer RHp1QUEshrkGRU6qHFahdz6rsYOSqdOy0UxwpIjy4Pg'
//        // <-- Specifying the Content-Type
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
//       console.log('NurseNEWContent======',JSON.stringify(responseText))
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }
function getNurseFullProfile(params) {
  return Api(endPoints.getNurseFullProfile, params, 'post')
}

function getTrainingLanguage(params) {
  return Api(endPoints.getTrainingLanguage, params, 'post')
}
function getTrainingCourses(params) {
  console.log('getTrainingCoursesParam===', JSON.stringify(params))
  return Api(endPoints.getTrainingCourses, params, 'post')
}
function submitClass(params) {
  console.log('SubmitParameter======', JSON.stringify(params))
  return Api(endPoints.submitClass, params, 'post')
}
function updateUserSession(params) {
  return Api(endPoints.updateUserSession, params, 'post')
}
function getMasterData(params) {
  return Api(endPoints.getMasterData, params, 'post')
}
function updateUserContentView(params) {
  return Api(endPoints.updateUserContentView, params, 'post')
}
function updateUserProfile(params) {
  console.log('UpdateUserProfileParams====',JSON.stringify(params))
  return Api(endPoints.updateUserProfile, params, 'post')
}
function getCCPLetsPlay(params) {
  return Api(endPoints.getCCPLetsPlay, params, 'post')
}
function getCCPToolType(params) {
    console.log('getCCPToolType====', JSON.stringify(params))
  return Api(endPoints.getCCPToolType, params, 'post')
}
function getCCPToolMaterial(params) {
  return Api(endPoints.getCCPToolMaterial, params, 'post')
}
function getNurseList(params) {
  return Api(endPoints.getNurseList, params, 'post')
}
function UpdateFcmToken(params) {
  console.log('UpdateFcmToken=====',JSON.stringify(params))
  return Api(endPoints.updateDeviceToken, params, 'post', true)
}
function SearchNurse(params) {
  console.log('SearchNurse=====',JSON.stringify(params))
  return Api(endPoints.searchNurseList, params, 'post')
}
// For Nurse Session 
function submitSession(params){
  console.log('submitSessionParameter======', JSON.stringify(params))
  return Api(endPoints.submitSession, params, 'post')
}
function editSession(params) {
  console.log('editSessionParameter======', JSON.stringify(params))
  return Api(endPoints.editSession, params, 'post')
}
function getNurseSession(params) {
  console.log('getNurseSession====', JSON.stringify(params))
  return Api(endPoints.getNurseSession, params, 'post')
}
export {
  getNurseContent,
  getNurseClass,
  setContentLikeBulk,
  getContentComment,
  getContentLikes,
  postContentCommentBulk,
  getNurseProfile,
  getNurseFullProfile,
  getTrainingLanguage,
  getTrainingCourses,
  submitClass,
  updateUserSession,
  updateUserContentView,
  updateUserProfile,
  getCCPLetsPlay,
  getCCPToolType,
  getCCPToolMaterial,
  getNurseList,
  getMasterData,
  UpdateFcmToken,
  SearchNurse,
  editClass,
  submitSession,
  editSession,
  getNurseSession
}
