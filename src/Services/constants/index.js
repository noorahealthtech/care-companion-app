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
  sendMobileOTP: 'sendMobileOTP',
  getMasterData: 'get_master_data.json',
  verifyMobileOTP: 'verify_mobile_otp.json',
  getAppSetting: 'oauth/token.json',

  //Story EndPoints
  getNurseContent: 'get_posts.json',
  setContentLikeBulk: 'like_post.json',
  getContentComment: 'get_content_comments.json',
  getContentLikes: 'get_content_likes.json',
  postContentCommentBulk: 'post_comments.json',
  getNurseProfile: 'users/show_profile.json',
  updateUserProfile: 'users/update_profile.json',
  getCCPToolMaterial: 'ccp_tool_material.json',

  //Session & Nurse Form EndPoints
  getNurseClass: 'get_ccp_classes.json',
  submitClass: 'create_class.json',
  editClass: 'update_ccp_class.json',
  getNurseSession: 'get_tb_classes.json',
  submitSession: 'create_tb_class.json',
  editSession: 'update_tb_classes.json',
 
  updateDeviceToken: 'update_device_token.json',
  searchNurseList: 'search_user.json',

  // Nurse Activity EndPoints
  getNurseFullProfile: 'get_full_nurse_profile.json',
  getTrainingLanguage: 'get_training_languages.json',
  getTrainingCourses: 'get_training_courses.json',
  updateUserSession: 'updateUserSession',
  updateUserContentView: 'updateUserContentView',
  getCCPLetsPlay: 'get_ccp_play.json',
  getCCPToolType: 'get_ccp_tool_type.json',
  getNurseList: 'get_nurse_list.json',
}
