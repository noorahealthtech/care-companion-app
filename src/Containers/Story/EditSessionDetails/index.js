// //import liraries
// import React, { Component, useEffect, useState } from 'react'
// import { View, Text, StyleSheet } from 'react-native'
// import SessionInput from '../../Story/MarkAttendance/Components/SessionInput'
// import { Colors, Images, WP } from '../../../Theme'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import CustomHeader from '../../../Components/CustomHeader'
// import { useTranslation } from 'react-i18next'
// import CustomButton from '../../../Components/CustomButton'
// import TimePicker from '../MarkAttendance/Components/TimePicker'
// import CustomDateTimePicker from '../MarkAttendance/Components/DatePicker'
// import OptionsPickerListing from '../MarkAttendance/Components/OptionPickerList'
// import moment from 'moment'
// import { editAttendance, getFullData } from '../../../Store/actions'
// import { useDispatch, useSelector } from 'react-redux'
// import { navigate } from '../../../Services'
// import { showToast, getPicture, isOnline } from '../../../Services'
// import * as TYPES from '../../../Store/actions/types'

// // create a component
// const EditSessionDetails = ({ route, navigation }) => {
//   const { t } = useTranslation()
//   console.log('showing values in routes', route)
//   const { params } = route
//   console.log('EditPrams===', JSON.stringify(params.no_of_people))
//   const [date, setDate] = useState('')
//   const [time, setTime] = useState(null)
//   const [people, setNumberOfPeople] = useState(params.no_of_people)
//   const [classType, setClassType] = useState(null)
//   const [locationWizard, setLocationWizard] = useState(null)
//   const [session, setSession] = useState(null)
//   const [notes, setNotes] = useState(null)
//   const user = useSelector((state) => state.auth.user)
//   const [loading, setLoading] = useState(false)
//   const dispatch = useDispatch()

//   const [classesTypes, setClassesTypes] = useState([
//     {
//       id: 1,
//       title: t('markScreen.option1'),
//       isSelected: false,
//     },
//     {
//       id: 3,
//       title: t('markScreen.option2'),
//       isSelected: false,
//     },
//     {
//       id: 5,
//       title: t('markScreen.option3'),
//       isSelected: false,
//     },
//     {
//       id: 7,
//       title: t('markScreen.option4'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.option5'),
//       isSelected: false,
//     },
//     {
//       id: 4,
//       title: t('markScreen.option6'),
//       isSelected: false,
//     },
//     {
//       id: 6,
//       title: t('markScreen.option7'),
//       isSelected: false,
//     },
//   ])
//   const updateCheckedState = (tapped) => {
//     classesTypes.map((checked) => {
//       checked.isSelected = false
//     })
//     var newData = classesTypes.map((el) => {
//       if (el.id == tapped)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })
//     setClassesTypes(newData)
//   }

//   useEffect(() => {
    
//     setDate(moment(params.class_date,'YYYY-MM-DD').format('DD MMM YYYY'))
//     setTime(params.class_time)
//     setNumberOfPeople(params.no_of_people)
//     setLocationWizard(params.ward)
//     setNotes(params.notes)
//     setSession(params.session_conducted)
//     if (params.class_type) {
//       updateCheckedState(parseInt(params.class_type.id))
//     }
//   }, [params])

//   const submitData = () => {
//     try {
//       var selectedOptionId = classesTypes.find((check) => check.isSelected)
//       if (user) {
//         setLoading(true)
//         let parameter = {
//           user_id: user.id,
//           // class_id: params.id,
//           class_id: params.id,
//           class_type: selectedOptionId.id,
//           class_date: date,
//           class_time: time,
//           no_of_people: people,
//           no_of_family: '0',
//           ward: locationWizard,
//           notes: notes,
//           session_conducted: session,
//           entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
//           session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
//           token: 'j56sugRk029Po5DB',
//           appuser_id: user.id,
//           access_token: '',
//         }
//         console.log('showing Editparams passsed passed', JSON.stringify(parameter))
//         isOnline(
//           (connected) => {
//             dispatch(
//               editAttendance(
//                 parameter,
//                 setLoading,
//                 (done) => {
//                   if (done) {
//                     setLoading(false)
//                     // dispatch(
//                     //   getFullData(
//                     //     user.id,
//                     //     parameter,
//                     //     () => {
//                     //       dispatch({
//                     //         type: TYPES.NURSE_PREVIOUS_CLASSES,
//                     //         previousClasses: api.details
//                     //       })
//                     //       navigate('PreviousClasses')
//                     //     },
                       
//                     //     () => {},
//                     //   ),
//                     // )
//                     isOnline((connected) => {
//                       dispatch(getFullData(user.id,parameter, () => {
//                         dispatch({
//                                   type: TYPES.NURSE_PREVIOUS_CLASSES,
//                                   previousClasses: api.details
//                                 })
//                           navigation.navigate('PreviousClasses')
//                       }, () => { }))
//                   }, (offline) => {
//                       showToast(t('commonApp.internetError'))
//                   })
//                     console.log('showing Editparams passsed=====', JSON.stringify(parameter))
//                   }
//                 },
//                 true,
//               ),
//             )
//           },
//           (offline) => {
//             setLoading(false)
//             showToast(t('commonApp.internetError'))
//           },
//         )
//       }
//     } catch (error) {
//       console.log('showing error here ', error)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <CustomHeader
//         headerColor={Colors.appColor}
//         screenTitle={'Edit Class Details'}
//         navigation={navigation}
//       />
//       <KeyboardAwareScrollView
//         contentContainerStyle={styles.scroller}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* <CustomDateTimePicker
//           date={date}
//           onDateChange={(date) =>setDate(date)}
//           title={t('markScreen.date')}
//           isEditClass={true}
//         />
//         <TimePicker
//           time={time}
//           onTimeChange={setTime}
//           title={t('markScreen.time')}
//           placeholder={time}
//           isEditClass={true}
//         />
//         <SessionInput
//           title={t('editclass.number')}
//           placeholder={''}
//           inputStyles={styles.input}
//           value={people.toString()}
//           onChangeText={setNumberOfPeople}
//         />
//         <OptionsPickerListing
//           classesTypes={classesTypes}
//           title={t('editclass.classType')}
//           onPress={(tapped) => {
//             updateCheckedState(tapped.id)
//           }}
//           isEditProfle={false}
//         />
//         <SessionInput
//           title={t('editclass.location')}
//           placeholder={''}
//           inputStyles={styles.input}
//           value={locationWizard}
//           onChangeText={setLocationWizard}
//         />
//         <SessionInput
//           title={t('editclass.session')}
//           placeholder={''}
//           inputStyles={styles.input}
//           value={session}
//           onChangeText={setSession}
//         />
//         <SessionInput
//           title={t('editclass.notes')}
//           placeholder={''}
//           isNotes={true}
//           inputStyles={styles.input}
//           value={notes}
//           onChangeText={setNotes}
//         />
//         <CustomButton
//           title={t('previousclasses.marknew')}
//           bgColor={Colors.appColor}
//           titleColor={Colors.white}
//           onPress={submitData}
//           containerStyles={styles.btnContainer}
//           loading={loading}
//         /> */}
//         <View style={styles.domainContainer}>
//           {/* <Picker
//                         onPress={toggleModal}
//                         selectedImage={selectedImage}
                        
                        
//                     /> */}
//           <Text allowFontScaling={false} style={styles.title}>
//             {t('markScreen.patientInfo')}
//           </Text>
//           <CustomDateTimePicker
//             date={date}
//             onDateChange={SetDate}
//             title={t('markScreen.date')}
//           />
//           {/* <TimePicker time={time} onTimeChange={ time => SetTime(time)} title={t('markScreen.time')} placeholder={time} />   */}
//           {/* <SessionInput title={t('markScreen.people')} placeholder={t('markScreen.peoplePlaceHolder')} keyboardType={'numeric'} value={people} onChangeText={SetPeople} /> */}
//           <SessionInput
//             title={t('markScreen.patientNameTitle')}
//             placeholder={''}
//             value={people}
//             onChangeText={SetPeople}
//           />
//           <SessionInput
//             title={t('markScreen.patientAgeTitle')}
//             placeholder={''}
//             value={people7}
//             onChangeText={SetPeople7}
//           />
//           {/* <OptionsListing classesTypes={classesTypes} title={t('markScreen.type')} subTitle={t('markScreen.select')} onPress={(tapped) => { updateCheckedState(tapped) }} /> */}
//           <OptionsListings
//             category={1}
//             classesTypes={categoryTypes}
//             title={t('markScreen.categoryTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForCategory(tapped.id)
//             }}
//           />
//           <OptionsListing
//             classesTypes={genderTypes}
//             title={t('markScreen.genderTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForGender(tapped.id)
//             }}
//           />
//           <SessionInput
//             title={t('markScreen.phoneNumberTitle')}
//             placeholder={''}
//             keyboardType={'numeric'}
//             value={people8}
//             onChangeText={SetPeople8}
//           />
//           <SessionInput
//             title={t('markScreen.phoneNumberOptional')}
//             placeholder={''}
//             keyboardType={'numeric'}
//             value={people1}
//             onChangeText={SetPeople1}
//           />
//           <SessionInput
//             title={t('markScreen.patientAddress')}
//             placeholder={'House Number, Street, area'}
//             value={people2}
//             onChangeText={SetPeople2}
//           />
//           {/* <SessionInput
//             placeholder={'Village, District'}
//             value={people}
//             onChangeText={SetPeople}
//           /> */}
//         <View style={[styles.searchSection, {marginTop: 10}]}>
//           <TextInput
//               style={styles.input}
//               placeholder={t('markScreen.verifyDistrict')}
//             //   keyboardType={'numeric'}
//               onChangeText={() => {}}
//               underlineColorAndroid="transparent"
//             />
//          </View>
//           {/* < SessionInput title={t('markScreen.location')} placeholder={t('markScreen.locationPlaceHolder')} value={location} onChangeText={SetLocation} />
//                     <SessionInput title={t('markScreen.session')} placeholder={t('markScreen.sessionPlaceHolder')} value={session} onChangeText={SetSession} />
//                     <SessionInput title={t('markScreen.notes')} placeholder={t('markScreen.notesPlaceHolder')} isNotes={true} value={notes} onChangeText={SetNotes} /> */}

//           <Text allowFontScaling={false} style={styles.title}>
//             {t('markScreen.caregiverTitle')}
//           </Text>
//           <SessionInput
//             title={t('markScreen.caregiverTitleName')}
//             placeholder={''}
//             value={people3}
//             onChangeText={SetPeople3}
//           />
//           <SessionInput
//             title={t('markScreen.patientAgeTitle')}
//             placeholder={''}
//             value={people4}
//             onChangeText={SetPeople4}
//           />
//           <OptionsListings
//             classesTypes={caregiverTypes}
//             title={t('markScreen.categoryTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForCaregiver(tapped.id)
//             }}
//           />
//           <OptionsListing
//             classesTypes={genderType}
//             title={t('markScreen.genderTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForGenderType(tapped.id)
//             }}
//           />
//           <SessionInput
//             title={t('markScreen.phoneNumberTitle')}
//             placeholder={''}
//             keyboardType={'numeric'}
//             value={people5}
//             onChangeText={SetPeople5}
//           />
//           <SessionInput
//             title={t('markScreen.phoneNumberOptional')}
//             placeholder={''}
//             keyboardType={'numeric'}
//             value={people6}
//             onChangeText={SetPeople6}
//           />

//           <Text allowFontScaling={false} style={styles.title}>
//             {t('markScreen.verificationTitle')}
//           </Text>

//           <OptionsListing
//             header
//             classesTypes={verificationTypes}
//             subTitles={t('markScreen.verificationsubTitle')}
//             title={t('markScreen.categoryTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForVerification(tapped.id)
//             }}
//           />

//           <Text allowFontScaling={false} style={styles.titleMobile}>
//             {t('markScreen.verificationName')}
//           </Text>
//           {/* <SessionInput
//             isMarginbottom={true}
//             placeholder={'Phone Number'}
//             keyboardType={'numeric'}
//             value={people}
//             onChangeText={SetPeople}
//           />
//           <SessionInput
//             placeholder={'Nikshay ID Optional'}
//             isMarginbottom={true}
//             keyboardType={'numeric'}
//             value={people}
//             onChangeText={SetPeople}
//           /> */}

//           <View style={styles.searchSection}>
//            <View style={{width: '90%'}}>
//            <TextInput
//               style={styles.input}
//               keyboardType={'numeric'}
//               placeholder={t('markScreen.VerifyNumber')}
//               onChangeText={() => {}}
//               underlineColorAndroid="transparent"
//             />
//            </View>

//             <View style={{width: '10%'}}>
//               <Image source={Images.forward} style={[styles.accessory]} />
//             </View>

//           </View>

//           <View style={styles.searchSection}>
//            <View style={{width: '90%'}}>
//            <TextInput
//               style={styles.input}
//               keyboardType={'numeric'}
//               placeholder={t('markScreen.VerifyID')}
//               onChangeText={() => {}}
//               underlineColorAndroid="transparent"
//             />
//            </View>

//             <View style={{width: '10%'}}>
//               <Image source={Images.forward} style={[styles.accessory]} />
//             </View>

//           </View>

//           <CustomButton
//             title={t('markScreen.submit')}
//             bgColor={Colors.appColor}
//             titleColor={Colors.white}
//             // onPress={submitData}
//             onPress={() => {
//               navigate('AttendanceMarked');
//             }}
//             loading={loading}
//           />
//         </View>

//       </KeyboardAwareScrollView>
//     </View>
//   )
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.white,
//   },
//   scroller: {
//     flexGrow: 1,
//     padding: WP('5'),
//     paddingBottom: 150,
//   },
//   input: {
//     borderWidth: 0,
//     borderColor: Colors.inputGrey,
//     borderBottomWidth: 1,
//   },
//   btnContainer: {
//     marginTop: WP('5'),
//   },
// })

// //make this component available to the app
// export default EditSessionDetails


//import liraries
import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import { Colors, WP, Images } from '../../../Theme'
// import Picker from './Components/Picker'
import CustomDateTimePicker from '../MarkAttendance/Components/DatePicker'
import SessionInput from '../MarkAttendance/Components/SessionInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../../Components/CustomButton'
import OptionsListing from '../MarkAttendance/Components/OptionsList'
import OptionsListings from '../MarkAttendance/Components/OptionLists'
import CustomModal from '../../../Components/CustomModal'
import TimePicker from '../MarkAttendance/Components/TimePicker'

import { useDispatch, useSelector } from 'react-redux'


import moment from 'moment'
import { useIsFocused } from '@react-navigation/native'
import { editSessions, getSessionData } from '../../../Store/actions'
import { showToast, getPicture, isOnline,navigate } from '../../../Services'
import * as TYPES from '../../../Store/actions/types'

// import { cos } from 'react-native-reanimated'
// import MobileNumberInput from '../../../Components/MobileNumberInput'
// create a component
const EditSessionDetails = ({ route, navigation }) => {
  // console.log('showing props here for Edit Sessions', JSON.stringify(props))
  const { t } = useTranslation()
  console.log('showing values in routes', route)
  const { params } = route
  console.log('EditParams=======',JSON.stringify(params))
  let now = new Date()
  const [date, SetDate] = useState('')
  const [time, SetTime] = useState('')
  const [patientName, SetPatientName] = useState(params.patient_name)
  const [patientAge, SetPatientAge] = useState(params.patient_age)
  const [patientPhoneNumber, SetPatientPhoneNumber] = useState(params.patient_phone_number)
  const [patientPhoneNumberOptional, SetPatientPhoneNumberOptional] = useState(params.patient_phone_number_optional)
  const [patientAddress, SetPatientAddress] = useState(params.patient_address)
  const [patientDistrict, SetPatientDistrict] = useState(params.patient_district)
  const [caregiverName, SetCaregiverName] = useState(params.caregiver_name)
  const [caregiverAge, SetCaregiverAge] = useState(params.caregiver_age)
  const [caregiverPhoneNumber, SetCaregiverPhoneNumber] = useState(params.caregiver_phone_number)
  const [caregiverPhoneNumberOptional, SetCaregiverPhoneNumberOptional] = useState(params.caregiver_phone_number_optional)
  const [verificationNumber, SetVerificationNumber] = useState(params.verification_phone_number)
  const [verificationID, SetVerificationID] = useState(params.verification_ID_optional)
  const [titleVisible, SetTitleVisible] = useState(true)
  const [location, SetLocation] = useState(null)
  const [session, SetSession] = useState(null)
  const [notes, SetNotes] = useState(null)
  const [openModal, setModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const user = useSelector((state) => state.auth.user)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  console.log('user===', user)
  // var selectedOptionId = classesTypes.find((check) => check.isSelected)
  // console.log("showing is selected", selectedOptionId)

  console.log('time====', time)
  const [categoryTypes, setcategoryTypes] = useState([
    {
      id: 1,
      title: t('markScreen.categoryOption1'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.categoryOption2'),
      isSelected: false,
    },
  ])
  const [caregiverTypes, setcaregiverTypes] = useState([
    {
      id: 1,
      title: t('markScreen.caregiverTypes1'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.caregiverTypes2'),
      isSelected: false,
    },
  ])
  const [verificationTypes, setVerificationTypes] = useState([
    {
      id: 1,
      title: t('markScreen.yes'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.no'),
      isSelected: false,
    },
  ])
  const [genderTypes, setGenderTypes] = useState([
    {
      id: 1,
      title: t('markScreen.genderOption1'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.genderOption2'),
      isSelected: false,
    },
    {
      id: 3,
      title: t('markScreen.genderOption3'),
      isSelected: false,
    },
  ])
  const [genderType, setGenderType] = useState([
    {
      id: 1,
      title: t('markScreen.genderOption1'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.genderOption2'),
      isSelected: false,
    },
    {
      id: 3,
      title: t('markScreen.genderOption3'),
      isSelected: false,
    },
  ])
  const [classesTypes, setClassesTypes] = useState([
    {
      id: 1,
      title: t('markScreen.option1'),
      isSelected: false,
    },
    {
      id: 3,
      title: t('markScreen.option2'),
      isSelected: false,
    },
    {
      id: 5,
      title: t('markScreen.option3'),
      isSelected: false,
    },
    {
      id: 7,
      title: t('markScreen.option4'),
      isSelected: false,
    },
    {
      id: 2,
      title: t('markScreen.option5'),
      isSelected: false,
    },
    {
      id: 4,
      title: t('markScreen.option6'),
      isSelected: false,
    },
    {
      id: 6,
      title: t('markScreen.option7'),
      isSelected: false,
    },
  ])
  useEffect(() => {
    // if(time == ''){
    //     console.log('InsideIf===', time);
    //     SetTime(moment().format('hh:mm A'))
    // }
    console.log('ClassData====',JSON.stringify(params))
    console.log('patient_age====' , String(params.patient_age));

    
    SetTime(moment().format('hh:mm A'))
    SetDate(moment(params.session_date,'YYYY-MM-DD').format('DD MMM YYYY'))
    // setNumberOfPeople(params.no_of_people)
    SetPatientName(params.patient_name)
    SetPatientAge(String(params.patient_age));
    SetPatientPhoneNumber(params.patient_phone_number)
    SetPatientPhoneNumberOptional(params.patient_phone_number_optional)
    SetPatientAddress(params.patient_address)
    SetPatientDistrict(params.patient_district)
    SetCaregiverName(params.caregiver_name)
    SetCaregiverAge(String(params.caregiver_age));
    SetCaregiverPhoneNumber(params.caregiver_phone_number)
    SetCaregiverPhoneNumberOptional(params.caregiver_phone_number_optional)
    SetVerificationNumber(params.verification_phone_number)
    SetVerificationID(params.verification_ID_optional)
    // setLocationWizard(params.ward)
    // setNotes(params.notes)
    // setSession(params.session_conducted)
    if (params.class_type) {
      updateCheckedState(parseInt(params.class_type.id))
    }
    if (params.patient_category_type) {
      updateCheckedStateForCategory(parseInt(params.patient_category_type.id))
    }
    if (params.patient_gender) {
      updateCheckedStateForGender(parseInt(params.patient_gender.id))
    }
    if (params.caregiver_category_type) {
      updateCheckedStateForCaregiver(parseInt(params.caregiver_category_type.id))
    }
    if (params.caregiver_gender) {
      updateCheckedStateForGenderType(parseInt(params.caregiver_gender.id))
    }
    if (params.verification_type) {
      updateCheckedStateForVerification(params.verification_type)
    }
  }, [params])

  // useEffect(() => {
  //   if (time == '') {
  //     SetTime(moment().format('hh:mm A'))
  //   } else {
  //     console.log('Updated time  ======> ', time)
  //   }
  // }, [
  //   time,
  //   isFocused,
  // ])

  // const updateCheckedState = (tapped) => {
  //   classesTypes.map((checked) => {
  //     checked.isSelected = false
  //   })
  //   var newData = classesTypes.map((el) => {
  //     if (el.id == tapped.id)
  //       return Object.assign({}, el, { isSelected: !el.isSelected })
  //     return el
  //   })
  //   // Set Types

  //   setClassesTypes(newData)
  // }

  const updateCheckedStateForCategory = (tapped) => {
    // categoryTypes
    categoryTypes.map((checked) => {
      checked.isSelected = false
    })

    var newDataOfCategory = categoryTypes.map((el) => {
      if (el.id == tapped)
        return Object.assign({}, el, { isSelected: !el.isSelected })
      return el
    })

    // Set Types
    setcategoryTypes(newDataOfCategory)
  }

  const updateCheckedStateForVerification = (tapped) => {
    // categoryTypes
    verificationTypes.map((checked) => {
      checked.isSelected = false
    })

    var newDataOfVerification = verificationTypes.map((el) => {
      if (el.id == tapped)
        return Object.assign({}, el, { isSelected: !el.isSelected })
      return el
    })

    // Set Types
    setVerificationTypes(newDataOfVerification)
  }

  const updateCheckedStateForGender = (tapped) => {
    // setGenderTypes
    genderTypes.map((checked) => {
      checked.isSelected = false
    })

    var newDataOfGender = genderTypes.map((el) => {
      if (el.id == tapped)
        return Object.assign({}, el, { isSelected: !el.isSelected })
      return el
    })

    // Set Types
    setGenderTypes(newDataOfGender)
  }
  const updateCheckedStateForGenderType = (tapped) => {
    // setGenderTypes
    genderType.map((checked) => {
      checked.isSelected = false
    })

    var newDataGender = genderType.map((el) => {
      if (el.id == tapped)
        return Object.assign({}, el, { isSelected: !el.isSelected })
      return el
    })

    // Set Types
    setGenderType(newDataGender)
  }


  const updateCheckedStateForCaregiver = (tapped) => {
    // categoryTypes
    caregiverTypes.map((checked) => {
      checked.isSelected = false
    })

    var newDataOfcaregiverTypes = caregiverTypes.map((el) => {
      if (el.id == tapped)
        return Object.assign({}, el, { isSelected: !el.isSelected })
      return el
    })

    // Set Types
    setcaregiverTypes(newDataOfcaregiverTypes)
  }
 
  const renderImages = (isCamera) => {
    if (isCamera) {
      getPicture(
        true,
        (image) => {
          setSelectedImage(image.uri)
          toggleModal()
        },
        (reject) => {},
      )
    } else {
      getPicture(
        false,
        (image) => {
          setSelectedImage(image.uri)
          toggleModal()
        },
        (reject) => {},
      )
    }
  }
  const submitData = () => {
    try {
      // var selectedOptionId = classesTypes.find((check) => check.isSelected)
      var selectedOptionIdForCategory = categoryTypes.find(
        (check) => check.isSelected,
      )
      var selectedOptionIdForGenderTypes = genderTypes.find(
        (check) => check.isSelected,
      )
      var selectedOptionIdForCaregiverTypes = caregiverTypes.find(
        (check) => check.isSelected,
      )
      var selectedOptionIdForCaregiverGenderType = genderType.find(
        (check) => check.isSelected,
      )
      var selectedOptionIdForVerificationType= verificationTypes.find(
        (check) => check.isSelected,
      )
      console.log('showing is Patient Category selected', selectedOptionIdForCategory)
      console.log('showing is Patient Gender selected', selectedOptionIdForGenderTypes)
      console.log('showing is Caregiver Type selected', selectedOptionIdForCaregiverTypes)
      console.log('showing is Caregiver Gender selected', selectedOptionIdForCaregiverGenderType)
      console.log('showing is Caregiver Verification selected', selectedOptionIdForVerificationType)

        if (user) {
          setLoading(true)
          let parameter = {
            user_id: user.id,
            id: params.id,
            // class_id: '0',
            // class_type_id: '0',
            // class_type: selectedOptionId.id,
            // image: 'data:image/jpeg;base64,' + selectedImage.data,
            session_date:date,
            // class_time: time.slice(0, 5),
            session_time: time,
            // no_of_people: people,
            // no_of_family: '0',
            // ward: location,
            // notes: notes,
            class_type: 1,
            session_conducted: '1',
            entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
            session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
            token: 'j56sugRk029Po5DB',
            appuser_id: user.id,
            // class_time: time,
            access_token: '',
            patient_name: patientName,
            patient_age:parseInt(patientAge),
            patient_category_type: selectedOptionIdForCategory.id,
            patient_gender_type: selectedOptionIdForGenderTypes.id,
            patient_phone_number: patientPhoneNumber,
            patient_phone_number_optional:patientPhoneNumberOptional,
            patient_address:patientAddress,
            patient_district:patientDistrict,
            caregiver_name:caregiverName,
            caregiver_age:parseInt(caregiverAge),
            caregiver_category_type:selectedOptionIdForCaregiverTypes.id,
            caregiver_gender_type:selectedOptionIdForCaregiverGenderType.id,
            caregiver_phone_number:caregiverPhoneNumber,
            caregiver_phone_number_optional:caregiverPhoneNumberOptional,
            verification_type:selectedOptionIdForVerificationType.id,
            verification_phone_number:verificationNumber,
            verification_ID_optional:parseInt(verificationID),
            app_type: "tb"
          }
          console.log("showing Submit Params here", JSON.stringify(parameter))
          isOnline(
            (connected) => {
              dispatch(
                editSessions(
                  parameter,
                  setLoading,
                  done => {
                    console.log('InsideDone===',done)
                    setLoading(false)
                    if (done) {
                      setLoading(false)
                      // dispatch(
                      //   getFullData(
                      //     user.id,
                      //     parameter,
                      //     () => {
                      //       dispatch({
                      //         type: TYPES.NURSE_PREVIOUS_CLASSES,
                      //         previousClasses: api.details
                      //       })
                      //       navigate('PreviousClasses')
                      //     },
                         
                      //     () => {},
                      //   ),
                      // )
                      isOnline((connected) => {
                        dispatch(getSessionData(user.id,params, () => {
                          // dispatch({
                          //           type: TYPES.NURSE_PREVIOUS_SESSIONS,
                          //           previousSessions: api
                          //         })
                            navigation.navigate('PreviousSessions')
                        }, () => { }))
                    }, (offline) => {
                        showToast(t('commonApp.internetError'))
                    })
                      console.log('showing Editparams passsed=====', JSON.stringify(parameter))
                    }
                  },
                  true,
                ),
              )
            },
            (offline) => {
              setLoading(false)
              showToast(t('commonApp.internetError'))
            },
          )
        }
      
    } catch (error) {
      console.log('error=======')
    }
  }

  const toggleModal = () => setModal(!openModal)
  return (
    <View style={styles.container}>
      <CustomHeader
        screenTitle={t('markScreen.newTitle')}
        navigation={navigation}
      />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.domainContainer}>
          {/* <Picker
                        onPress={toggleModal}
                        selectedImage={selectedImage}
                        
                        
                    /> */}
          <Text allowFontScaling={false} style={styles.title}>
            {t('markScreen.patientInfo')}
          </Text>
          <CustomDateTimePicker
            date={date}
            onDateChange={SetDate}
            title={t('markScreen.date')}
          />
          {/* <TimePicker time={time} onTimeChange={ time => SetTime(time)} title={t('markScreen.time')} placeholder={time} />   */}
          {/* <SessionInput title={t('markScreen.people')} placeholder={t('markScreen.peoplePlaceHolder')} keyboardType={'numeric'} value={people} onChangeText={SetPeople} /> */}
          <SessionInput
            title={t('markScreen.patientNameTitle')}
            placeholder={''}
            value={patientName}
            onChangeText={SetPatientName}
          />
          <SessionInput
            title={t('markScreen.patientAgeTitle')}
            placeholder={''}
            value={patientAge}
            onChangeText={SetPatientAge}
          />
          {/* <OptionsListing classesTypes={classesTypes} title={t('markScreen.type')} subTitle={t('markScreen.select')} onPress={(tapped) => { updateCheckedState(tapped) }} /> */}
          <OptionsListings
            category={1}
            classesTypes={categoryTypes}
            title={t('markScreen.categoryTitle')}
            onPress={(tapped) => {
              updateCheckedStateForCategory(tapped.id)
            }}
          />
          <OptionsListing
            classesTypes={genderTypes}
            title={t('markScreen.genderTitle')}
            onPress={(tapped) => {
              updateCheckedStateForGender(tapped.id)
            }}
          />
          <SessionInput
            title={t('markScreen.phoneNumberTitle')}
            placeholder={''}
            keyboardType={'numeric'}
            value={patientPhoneNumber}
            onChangeText={SetPatientPhoneNumber}
          />
          <SessionInput
            title={t('markScreen.phoneNumberOptional')}
            placeholder={''}
            keyboardType={'numeric'}
            value={patientPhoneNumberOptional}
            onChangeText={SetPatientPhoneNumberOptional}
          />
          <SessionInput
            title={t('markScreen.patientAddress')}
            placeholder={'House Number, Street, area'}
            value={patientAddress}
            onChangeText={SetPatientAddress}
          />
          {/* <SessionInput
            placeholder={'Village, District'}
            value={people}
            onChangeText={SetPeople}
          /> */}
       
          {/* <TextInput
              style={styles.input}
              placeholder={t('markScreen.verifyDistrict')}
            //   keyboardType={'numeric'}
              onChangeText={() => {}}
              underlineColorAndroid="transparent"
            /> */}
            <SessionInput
            titleVisible={titleVisible}
            placeholder={'Village, District'}
            value={patientDistrict}
            onChangeText={SetPatientDistrict}
          /> 
         
          {/* < SessionInput title={t('markScreen.location')} placeholder={t('markScreen.locationPlaceHolder')} value={location} onChangeText={SetLocation} />
                    <SessionInput title={t('markScreen.session')} placeholder={t('markScreen.sessionPlaceHolder')} value={session} onChangeText={SetSession} />
                    <SessionInput title={t('markScreen.notes')} placeholder={t('markScreen.notesPlaceHolder')} isNotes={true} value={notes} onChangeText={SetNotes} /> */}

          <Text allowFontScaling={false} style={styles.title}>
            {t('markScreen.caregiverTitle')}
          </Text>
          <SessionInput
            title={t('markScreen.caregiverTitleName')}
            placeholder={''}
            value={caregiverName}
            onChangeText={SetCaregiverName}
          />
          <SessionInput
            title={t('markScreen.patientAgeTitle')}
            placeholder={''}
            value={caregiverAge}
            onChangeText={SetCaregiverAge}
          />
          <OptionsListings
            classesTypes={caregiverTypes}
            title={t('markScreen.categoryTitle')}
            onPress={(tapped) => {
              updateCheckedStateForCaregiver(tapped.id)
            }}
          />
          <OptionsListing
            classesTypes={genderType}
            title={t('markScreen.genderTitle')}
            onPress={(tapped) => {
              updateCheckedStateForGenderType(tapped.id)
            }}
          />
          <SessionInput
            title={t('markScreen.phoneNumberTitle')}
            placeholder={''}
            keyboardType={'numeric'}
            value={caregiverPhoneNumber}
            onChangeText={SetCaregiverPhoneNumber}
          />
          <SessionInput
            title={t('markScreen.phoneNumberOptional')}
            placeholder={''}
            keyboardType={'numeric'}
            value={caregiverPhoneNumberOptional}
            onChangeText={SetCaregiverPhoneNumberOptional}
          />

          <Text allowFontScaling={false} style={styles.title}>
            {t('markScreen.verificationTitle')}
          </Text>

          <OptionsListing
            header
            classesTypes={verificationTypes}
            subTitles={t('markScreen.verificationsubTitle')}
            title={t('markScreen.categoryTitle')}
            onPress={(tapped) => {
              updateCheckedStateForVerification(tapped.id)
            }}
          />

          <Text allowFontScaling={false} style={styles.titleMobile}>
            {t('markScreen.verificationName')}
          </Text>
          {/* <SessionInput
            isMarginbottom={true}
            placeholder={'Phone Number'}
            keyboardType={'numeric'}
            value={people}
            onChangeText={SetPeople}
          />
          <SessionInput
            placeholder={'Nikshay ID Optional'}
            isMarginbottom={true}
            keyboardType={'numeric'}
            value={people}
            onChangeText={SetPeople}
          /> */}

          <View style={styles.searchSection}>
           <View style={{width: '90%'}}>
           <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder={t('markScreen.VerifyNumber')}
              value={verificationNumber}
              onChangeText={SetVerificationNumber}
              underlineColorAndroid="transparent"
            />
           </View>

            <View style={{width: '10%'}}>
              <Image source={Images.forward} style={[styles.accessory]} />
            </View>

          </View>

          <View style={styles.searchSection}>
           <View style={{width: '90%'}}>
           <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder={t('markScreen.VerifyID')}
              value={verificationID}
              onChangeText={SetVerificationID}
              underlineColorAndroid="transparent"
            />
           </View>

            <View style={{width: '10%'}}>
              <Image source={Images.forward} style={[styles.accessory]} />
            </View>

          </View>

          <CustomButton
            title={t('markScreen.submit')}
            bgColor={Colors.appColor}
            titleColor={Colors.white}
            onPress={submitData}
            // onPress={() => {
            //   navigate('AttendanceMarked');
            // }}
            loading={loading}
          />
        </View>
      </KeyboardAwareScrollView>
      <CustomModal
        isVisible={openModal}
        onClosePress={toggleModal}
        onBackdropPress={toggleModal}
        onCameraPress={() => renderImages(true)}
        onLibraryPress={() => renderImages(false)}
      />
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  domainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: WP('5'),
  },
  title: {
    color: Colors.black,
    fontFamily: 'Assistant-SemiBold',
    fontSize: WP('5.5'),
    marginTop: WP('3'),
    marginBottom: WP('5'),
  },
  titleMobile: {
    color: Colors.grey,
    fontSize: WP('5'),
    marginBottom: WP('3'),
    fontFamily: 'Assistant-Regular',
  },
  inputStyles: {
    marginBottom: 3,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
 
  input: {
   
        display: 'flex',
        width: WP('90'),
        height: WP('13'),
        borderWidth: 1,
        borderColor: Colors.containerBorder,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: WP('3'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular',
        color: Colors.pickerBorder,
        fontSize: WP('4')
    
  },
  accessory: {
    height: WP('5'),
    width: WP('5'),
    resizeMode: 'contain',
    tintColor: Colors.appColor,
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginBottom: WP('2.5')
  },
})

//make this component available to the app
export default EditSessionDetails