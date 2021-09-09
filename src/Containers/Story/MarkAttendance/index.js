// //import liraries
// import React, { Component, useEffect, useState } from 'react'
// import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
// import CustomHeader from '../../../Components/CustomHeader'
// import { useTranslation } from 'react-i18next'
// import { Colors, WP, Images } from '../../../Theme'
// import Picker from './Components/Picker'
// import CustomDateTimePicker from './Components/DatePicker'
// import SessionInput from './Components/SessionInput'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import CustomButton from '../../../Components/CustomButton'
// import OptionsListing from './Components/OptionsList'
// import OptionsListings from './Components/OptionLists'
// import CustomModal from '../../../Components/CustomModal'
// import TimePicker from './Components/TimePicker'
// import { showToast, getPicture, isOnline, navigate } from '../../../Services'
// import { useDispatch, useSelector } from 'react-redux'
// import { markAttendance } from '../../../Store/actions'
// import moment from 'moment'
// import { useIsFocused } from '@react-navigation/native'
// import { cos } from 'react-native-reanimated'
// import MobileNumberInput from '../../../Components/MobileNumberInput'
// // create a component
// const MarkAttendance = (props) => {
//   console.log('showing props here for marked attendance', JSON.stringify(props))
//   const { t } = useTranslation()
//   let now = new Date()
//   const [date, SetDate] = useState(new Date())
//   const [time, SetTime] = useState('')
//   const [people, SetPeople] = useState(null)
//   const [people1, SetPeople1] = useState(null)
//   const [people2, SetPeople2] = useState(null)
//   const [people3, SetPeople3] = useState(null)
//   const [people4, SetPeople4] = useState(null)
//   const [people5, SetPeople5] = useState(null)
//   const [people6, SetPeople6] = useState(null)
//   const [people7, SetPeople7] = useState(null)
//   const [people8, SetPeople8] = useState(null)
//   const [people9, SetPeople9] = useState(null)

//   const [location, SetLocation] = useState(null)
//   const [session, SetSession] = useState(null)
//   const [notes, SetNotes] = useState(null)
//   const [openModal, setModal] = useState(false)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const user = useSelector((state) => state.auth.user)
//   const [loading, setLoading] = useState(false)
//   const dispatch = useDispatch()
//   const isFocused = useIsFocused()

//   // var selectedOptionId = classesTypes.find((check) => check.isSelected)
//   // console.log("showing is selected", selectedOptionId)

//   console.log('time====', time)
//   const [categoryTypes, setcategoryTypes] = useState([
//     {
//       id: 1,
//       title: t('markScreen.categoryOption1'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.categoryOption2'),
//       isSelected: false,
//     },
//   ])
//   const [caregiverTypes, setcaregiverTypes] = useState([
//     {
//       id: 1,
//       title: t('markScreen.caregiverTypes1'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.caregiverTypes2'),
//       isSelected: false,
//     },
//   ])
//   const [verificationTypes, setVerificationTypes] = useState([
//     {
//       id: 1,
//       title: t('markScreen.yes'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.no'),
//       isSelected: false,
//     },
//   ])
//   const [genderTypes, setGenderTypes] = useState([
//     {
//       id: 1,
//       title: t('markScreen.genderOption1'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.genderOption2'),
//       isSelected: false,
//     },
//     {
//       id: 3,
//       title: t('markScreen.genderOption3'),
//       isSelected: false,
//     },
//   ])
//   const [genderType, setGenderType] = useState([
//     {
//       id: 1,
//       title: t('markScreen.genderOption1'),
//       isSelected: false,
//     },
//     {
//       id: 2,
//       title: t('markScreen.genderOption2'),
//       isSelected: false,
//     },
//     {
//       id: 3,
//       title: t('markScreen.genderOption3'),
//       isSelected: false,
//     },
//   ])
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
//   useEffect(() => {
//     // if(time == ''){
//     //     console.log('InsideIf===', time);
//     //     SetTime(moment().format('hh:mm A'))
//     // }
//     SetTime(moment().format('hh:mm A'))
//   }, [isFocused])

//   useEffect(() => {
//     if (time == '') {
//       SetTime(moment().format('hh:mm A'))
//     } else {
//       console.log('Updated time  ======> ', time)
//     }
//   }, [
//     time,
//     isFocused,
//     classesTypes,
//     categoryTypes,
//     genderTypes,
//     caregiverTypes,
//     verificationTypes,
//     genderType
//   ])

//   const updateCheckedState = (tapped) => {
//     classesTypes.map((checked) => {
//       checked.isSelected = false
//     })
//     var newData = classesTypes.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })
//     // Set Types

//     setClassesTypes(newData)
//   }

//   const updateCheckedStateForCategory = (tapped) => {
//     // categoryTypes
//     categoryTypes.map((checked) => {
//       checked.isSelected = false
//     })

//     var newDataOfCategory = categoryTypes.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })

//     // Set Types
//     setcategoryTypes(newDataOfCategory)
//   }

//   const updateCheckedStateForVerification = (tapped) => {
//     // categoryTypes
//     verificationTypes.map((checked) => {
//       checked.isSelected = false
//     })

//     var newDataOfVerification = verificationTypes.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })

//     // Set Types
//     setVerificationTypes(newDataOfVerification)
//   }

//   const updateCheckedStateForGender = (tapped) => {
//     // setGenderTypes
//     genderTypes.map((checked) => {
//       checked.isSelected = false
//     })

//     var newDataOfGender = genderTypes.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })

//     // Set Types
//     setGenderTypes(newDataOfGender)
//   }
//   const updateCheckedStateForGenderType = (tapped) => {
//     // setGenderTypes
//     genderType.map((checked) => {
//       checked.isSelected = false
//     })

//     var newDataGender = genderType.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })

//     // Set Types
//     setGenderType(newDataGender)
//   }


//   const updateCheckedStateForCaregiver = (tapped) => {
//     // categoryTypes
//     caregiverTypes.map((checked) => {
//       checked.isSelected = false
//     })

//     var newDataOfcaregiverTypes = caregiverTypes.map((el) => {
//       if (el.id == tapped.id)
//         return Object.assign({}, el, { isSelected: !el.isSelected })
//       return el
//     })

//     // Set Types
//     setcaregiverTypes(newDataOfcaregiverTypes)
//   }
//   const unMark = () => {
//     classesTypes.map((checked) => {
//       checked.isSelected = false
//     })
//   }

//   const unMarkForCategoryTypes = () => {
//     categoryTypes.map((checked) => {
//       checked.isSelected = false
//     })
//   }

//   const unMarkForGenderTypes = () => {
//     genderTypes.map((checked) => {
//       checked.isSelected = false
//     })
//   }
//   const unMarkForGenderType = () => {
//     genderType.map((checked) => {
//       checked.isSelected = false
//     })
//   }

//   const unMarkForCaregiverTypes = () => {
//     caregiverTypes.map((checked) => {
//       checked.isSelected = false
//     })
//   }
//   const unMarkForVerificationTypes = () => {
//     verificationTypes.map((checked) => {
//       checked.isSelected = false
//     })
//   }
//   const renderImages = (isCamera) => {
//     if (isCamera) {
//       getPicture(
//         true,
//         (image) => {
//           setSelectedImage(image.uri)
//           toggleModal()
//         },
//         (reject) => {},
//       )
//     } else {
//       getPicture(
//         false,
//         (image) => {
//           setSelectedImage(image.uri)
//           toggleModal()
//         },
//         (reject) => {},
//       )
//     }
//   }
//   const submitData = () => {
//     try {
//       var selectedOptionId = classesTypes.find((check) => check.isSelected)
//       var selectedOptionIdForCategory = categoryTypes.find(
//         (check) => check.isSelected,
//       )

//       console.log('showing is selected', selectedOptionId)
//       if (!date) {
//         showToast('Please enter date!')
//         return
//       } else if (!selectedImage) {
//         showToast('Please select image!')
//       } else if (!time) {
//         showToast('Please enter time!')
//         return
//       } else if (!people) {
//         showToast('Please enter number of people!')
//         return
//       } else if (!selectedOptionId) {
//         showToast('Please select class type!')
//         return
//       } else if (!location) {
//         showToast('Please enter location!')
//         return
//       } else {
//         setLoading(true)
//         if (user) {
//           let params = {
//             user_id: user.id,
//             class_id: '0',
//             class_type_id: '0',
//             class_type: selectedOptionId.id,
//             image: 'data:image/jpeg;base64,' + selectedImage.data,
//             class_date: moment(date).format('YYYY-MM-DD'),
//             // class_time: time.slice(0, 5),
//             class_time: time,
//             no_of_people: people,
//             no_of_family: '0',
//             ward: location,
//             notes: notes,
//             session_conducted: session,
//             entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
//             session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
//             token: 'j56sugRk029Po5DB',
//             appuser_id: user.id,
//             access_token: '',
//           }
//           // console.log("showing Submit Params here", params)
//           isOnline(
//             (connected) => {
//               dispatch(
//                 markAttendance(params, (response) => {
//                   console.log('showing Submit Mark Params here', params)
//                   if (response) {
//                     SetPeople(null)
//                     SetLocation(null)
//                     SetSession(null)
//                     SetNotes(null)
//                     setSelectedImage(null)
//                     unMark()
//                     setLoading(false)
//                     unMarkForCategoryTypes(null)
//                     unMarkForGenderTypes(null)
//                     unMarkForCaregiverTypes(null)
//                     unMarkForVerificationTypes(null)
//                     unMarkForGenderType(null)
//                   } else {
//                     showToast('Try again')
//                     setLoading(false)
//                   }
//                 }),
//               )
//             },
//             (offline) => {
//               setLoading(false)
//               showToast(t('commonApp.internetError'))
//             },
//           )
//         }
//       }
//     } catch (error) {}
//   }

//   const toggleModal = () => setModal(!openModal)
//   return (
//     <View style={styles.container}>
//       <CustomHeader
//         screenTitle={t('markScreen.newTitle')}
//         navigation={props.navigation}
//       />
//       <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
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
//               updateCheckedStateForCategory(tapped)
//             }}
//           />
//           <OptionsListing
//             classesTypes={genderTypes}
//             title={t('markScreen.genderTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForGender(tapped)
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
//               updateCheckedStateForCaregiver(tapped)
//             }}
//           />
//           <OptionsListing
//             classesTypes={genderType}
//             title={t('markScreen.genderTitle')}
//             onPress={(tapped) => {
//               updateCheckedStateForGenderType(tapped)
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
//               updateCheckedStateForVerification(tapped)
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
//       <CustomModal
//         isVisible={openModal}
//         onClosePress={toggleModal}
//         onBackdropPress={toggleModal}
//         onCameraPress={() => renderImages(true)}
//         onLibraryPress={() => renderImages(false)}
//       />
//     </View>
//   )
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.backgroundColor,
//   },
//   domainContainer: {
//     flex: 1,
//     backgroundColor: Colors.backgroundColor,
//     padding: WP('5'),
//   },
//   title: {
//     color: Colors.black,
//     fontFamily: 'Assistant-SemiBold',
//     fontSize: WP('5.5'),
//     marginTop: WP('3'),
//     marginBottom: WP('5'),
//   },
//   titleMobile: {
//     color: Colors.grey,
//     fontSize: WP('5'),
//     marginBottom: WP('3'),
//     fontFamily: 'Assistant-Regular',
//   },
//   inputStyles: {
//     marginBottom: 3,
//   },
//   searchSection: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#fff',
//   },
 
//   input: {
   
//         display: 'flex',
//         width: WP('90'),
//         height: WP('13'),
//         borderWidth: 1,
//         borderColor: Colors.containerBorder,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingLeft: WP('3'),
//         marginBottom: WP('3'),
//         fontFamily: 'Assistant-Regular',
//         color: Colors.pickerBorder,
//         fontSize: WP('4')
    
//   },
//   accessory: {
//     height: WP('5'),
//     width: WP('5'),
//     resizeMode: 'contain',
//     tintColor: Colors.appColor,
//     justifyContent: 'center',
//     // backgroundColor: 'red',
//     marginBottom: WP('2.5')
//   },
// })

// //make this component available to the app
// export default MarkAttendance

//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../Theme';
import Picker from './Components/Picker'
import CustomDateTimePicker from './Components/DatePicker'
import SessionInput from './Components/SessionInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../Components/CustomButton'
import OptionsPickerListing from './Components/OptionPickerList'
import CustomModal from '../../../Components/CustomModal'
import TimePicker from './Components/TimePicker'
import { showToast, getPicture, isOnline } from '../../../Services';
import { useDispatch, useSelector } from 'react-redux'
import { markAttendance } from '../../../Store/actions'
import moment from 'moment'
import { useIsFocused } from '@react-navigation/native';
import { cos } from 'react-native-reanimated';
// create a component
const MarkAttendance = (props) => {
    console.log("showing props here for marked attendance", JSON.stringify(props))
    const { t } = useTranslation()
    let now = new Date();   
    const [date, SetDate] = useState(new Date())
    const [time, SetTime] = useState('')
    const [people, SetPeople] = useState(null)
    const [location, SetLocation] = useState(null)
    const [session, SetSession] = useState(null)
    const [notes, SetNotes] = useState(null)
    const [openModal, setModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const user = useSelector(state => state.auth.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const isFocused = useIsFocused();

    // var selectedOptionId = classesTypes.find((check) => check.isSelected)
    // console.log("showing is selected", selectedOptionId)
    
    console.log('time====', time)
    const [classesTypes, setClassesTypes] = useState([
        {
            id: 1,
            title: t('markScreen.option1'),
            isSelected: false
        },
        {
            id: 3,
            title: t('markScreen.option2'),
            isSelected: false
        },
        {
            id: 5,
            title: t('markScreen.option3'),
            isSelected: false
        },
        {
            id: 7,
            title: t('markScreen.option4'),
            isSelected: false
        },
        {
            id: 2,
            title: t('markScreen.option5'),
            isSelected: false
        },
        {
            id: 4,
            title: t('markScreen.option6'),
            isSelected: false
        },
        {
            id: 6,
            title: t('markScreen.option7'),
            isSelected: false
        },

    ])
    useEffect(() => {
        // if(time == ''){
        //     console.log('InsideIf===', time);
        //     SetTime(moment().format('hh:mm A'))
        // }
        SetDate(new Date()) 
        SetTime(moment().format('hh:mm A'))
    }, [isFocused])

    useEffect(() => {
        if(time == ''){
            SetTime(moment().format('hh:mm A'))
        } else {
            console.log('Updated time  ======> ',time);
        }

    },[time,isFocused,classesTypes])
    
    const updateCheckedState = (tapped) => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
        var newData = classesTypes.map(el => {
            if (el.id == tapped.id)
                return Object.assign({}, el, { isSelected: !el.isSelected })
            return el
        })
        setClassesTypes(newData)
    }
    const unMark = () => {
        classesTypes.map((checked) => {
            checked.isSelected = false
        })
    }
    const renderImages = (isCamera) => {
        if (isCamera) {
            getPicture(true, (image) => {
                setSelectedImage(image.uri)
                toggleModal()
            }, (reject) => {

            })
        }
        else {
            getPicture(false, (image) => {
                setSelectedImage(image.uri)
                toggleModal()
            }, (reject) => {

            })
        }
    }
    const submitData = () => {
        try {
            var selectedOptionId = classesTypes.find((check) => check.isSelected)
            console.log("showing is selected", selectedOptionId)
            // if (!date) {
            //     showToast('Please enter date!')
            //     return
            // }
             if (!selectedImage) {
                showToast('Please select image!')
            }
            // else if (!time) {
            //     showToast('Please enter time!')
            //     return
            // }
            // else if (!people) {
            //     showToast('Please enter number of people!')
            //     return
            // }
            else if (!selectedOptionId) {
                showToast('Please select class type!')
                return
            }
            // else if (!location) {
            //     showToast('Please enter location!')
            //     return
            // }

            else {
                setLoading(true)
                if (user) {
                    let params = {
                        user_id: user.id,
                        class_id: "0",
                        class_type_id: "0",
                        class_type: selectedOptionId.id,
                        image: 'data:image/jpeg;base64,' + selectedImage.data,
                        class_date: moment(date).format('YYYY-MM-DD'),
                        // class_time: time.slice(0, 5),
                        class_time: time,
                        no_of_people: people,
                        no_of_family: "0",
                        ward: location,
                        notes: notes,
                        session_conducted: session,
                        entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
                        session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
                        token: "j56sugRk029Po5DB",
                        appuser_id: user.id,
                        access_token: "",
                        app_type: "tb"
                    }
                    // console.log("showing Submit Params here", params)
                    isOnline((connected) => {
                        dispatch(markAttendance(params, (response) => {
                            console.log("showing Submit Mark Attandance Params here", params)
                            if (response) {

                                SetPeople(null)
                                SetLocation(null)
                                SetSession(null)
                                SetNotes(null)
                                setSelectedImage(null)
                                unMark()
                                setLoading(false)

                            }
                            else {
                                showToast('Try again')
                                setLoading(false)

                            }

                        }))

                    }, (offline) => {
                        setLoading(false)
                        showToast(t('commonApp.internetError'))
                    })
                }
            }
        } catch (error) {

        }
    }

    const toggleModal = () => setModal(!openModal)
    return (
        <View style={styles.container}>
            <CustomHeader
                screenTitle={t('markScreen.title')}
                navigation={props.navigation}
            />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" >
                <View style={styles.domainContainer}>
                    <Picker
                        onPress={toggleModal}
                        selectedImage={selectedImage}
                        
                        
                    />
                    <CustomDateTimePicker date={date} onDateChange={SetDate} title={t('markScreen.date')} />
                    <TimePicker time={time} onTimeChange={ time => SetTime(time)} title={t('markScreen.time')} placeholder={time} />
                    <SessionInput title={t('markScreen.people')} placeholder={t('markScreen.peoplePlaceHolder')} keyboardType={'numeric'} value={people} onChangeText={SetPeople} />
                    <OptionsPickerListing classesTypes={classesTypes} title={t('markScreen.type')} subTitle={t('markScreen.select')} onPress={(tapped) => { updateCheckedState(tapped) }} />
                    < SessionInput title={t('markScreen.location')} placeholder={t('markScreen.locationPlaceHolder')} value={location} onChangeText={SetLocation} />
                    <SessionInput title={t('markScreen.session')} placeholder={t('markScreen.sessionPlaceHolder')} value={session} onChangeText={SetSession} />
                    <SessionInput title={t('markScreen.notes')} placeholder={t('markScreen.notesPlaceHolder')} isNotes={true} value={notes} onChangeText={SetNotes} />
                    <CustomButton title={t('markScreen.submit')} bgColor={Colors.appColor} titleColor={Colors.white} onPress={submitData} loading={loading} />
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
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    domainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: WP('5')
    },
});

//make this component available to the app
export default MarkAttendance;
