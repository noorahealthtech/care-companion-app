// export const BASE_URL = 'http://34.94.112.24/noora/api/v5/' //Live

//staging
// export const BASE_URL = 'http://34.94.112.24/noora/api/v6/'
export const BASE_URL = 'http://35.200.144.91/cca/'
// export const BASE_URL_IMAGE = 'http://34.94.112.24/noora/uploads/NurseImage/'
export const BASE_URL_IMAGE = 'http://35.200.144.91/cca/'
export const YOUTUBEKEY = 'AIzaSyC1L4KGWC4PkOFCXIYWTJCgJ5qluFEcK8E'
export const NEW_BASE_URL = 'http://35.200.144.91/cca/oauth/token.json'

export const endPoints = {
  //Authentication EndPoints
  // verifyMobileOTP: 'verifyMobileOTP',
  // getAppSetting: 'getAppSetting',
  sendMobileOTP: 'sendMobileOTP',
  // updateDeviceToken: 'updateDeviceToken',
  // getMasterData: 'getMasterData',
  getMasterData: 'get_master_data.json',
  verifyMobileOTP: 'verify_mobile_otp.json',
  getAppSetting: 'oauth/token.json',

  //Story EndPoints
  // getNurseContent: "getNurseContent",
  // setContentLikeBulk: 'setContentLikeBulk',
  // getContentComment: 'getContentComment',
  // getContentLikes: 'getContentLikes',
  // postContentCommentBulk: "postContentCommentBulk",
  // getNurseProfile: 'getNurseProfile',
  // updateUserProfile: 'updateUserProfile',
  //   getCCPToolMaterial: 'getCCPToolMaterial',
  // getNurseClass: 'getNurseClass',
  // submitClass: 'submitClass',
   // updateDeviceToken: 'updateDeviceToken',
   // searchNurseList: 'getNurseName',
  getNurseContent: 'get_posts.json',
  setContentLikeBulk: 'like_post.json',
  getContentComment: 'get_content_comments.json',
  getContentLikes: 'get_content_likes.json',
  postContentCommentBulk: 'post_comments.json',
  getNurseProfile: 'users/show_profile.json',
  updateUserProfile: 'users/update_profile.json',
  getCCPToolMaterial: 'ccp_tool_material.json',

  getNurseClass: 'get_ccp_classes.json',
  updateDeviceToken: 'update_device_token.json',
  submitClass: 'create_class.json',
  editClass: 'update_ccp_class.json',
  searchNurseList: 'search_user.json',

  // getNurseFullProfile: 'getNurseFullProfile',
  getNurseFullProfile: 'get_full_nurse_profile.json',
  // getTrainingLanguage: 'getTrainingLanguage',
  getTrainingLanguage: 'get_training_languages.json',
  // getTrainingCourses: 'getTrainingCourses',
  getTrainingCourses: 'get_training_courses.json',
  updateUserSession: 'updateUserSession',
  updateUserContentView: 'updateUserContentView',
  // getCCPLetsPlay: 'getCCPLetsPlay',
  getCCPLetsPlay: 'get_ccp_play.json',
  // getCCPToolType: 'getCCPToolType',
  getCCPToolType: 'get_ccp_tool_type.json',

  // getNurseList: 'getNurseList',
  getNurseList: 'get_nurse_list.json',
}
