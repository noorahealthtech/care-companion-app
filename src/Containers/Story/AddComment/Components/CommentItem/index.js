//import liraries
import React, { Component,useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Colors, Images, WP } from '../../../../../Theme'
import TimeAgo from 'react-native-timeago'
import moment from 'moment'
import { color } from 'react-native-reanimated'
import { MentionInput, Tag ,Mention,MentionInputContext} from 'react-native-complete-mentions'
// create a component
var element = ''
const CommentItem = (props) => {
  // const [state, SetState] = useState(false)


  console.log('Props=====', JSON.stringify(props.comment))
  let year = moment(props.comment.entry_time).format('YYYY-MM-DD')
  let time = moment(props.comment.entry_time).format('hh:mm:ss')
  var updateTime = props.comment.entry_time
  var convertTimeIntoDate = new Date(updateTime)
 

  var string = props.comment.comment
  var subString = string.split(" ");

  for (let index = 0; index < subString.length; index++) {
     element = subString[index].includes('@');
  }
   console.log('Element=====', element)

  // var string = second.split(" ")
  // var str = string.slice(0)
  // console.log('second====', str);

//   const dateTimeAgo = moment('2021-08-10 04:20:26.123').fromNow()
//   console.log('Moment Date: ' + dateTimeAgo)
// console.log('CURRENT_TIME====', time)
//   console.log('Entry Time' + props.comment.entry_time)
//   var mData = props.comment.mentioned_user_id
//   for (let index = 0; index < mData.length; index++) {
//     // const element = mData[index];
    
//     console.log('mDAta name ======>'+mData[index].name);
   
//     if(props.comment.comment.includes(mData[index].name)){
//       SetState(true)
//     } else {
//       SetState(false)
//     }
//   }
  // console.log('mData====>'+JSON.stringify(mData));
//   2021-08-09 05:36:13

//   console.log('Year' + year)
//   console.log('Time' + time)
//   const number = moment(time, ['h:mm A']).format('HH:mm')
//   console.log('New Date' + year + ' T ' + number)
  //console.log("Entry Date"+moment.utc(props.comment.entry_time).local().fromNow());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={
            props.comment.user && props.comment.user.profile_image
              ? { uri: props.comment.user.profile_image }
              : Images.comment
          }
          style={styles.dp}
        />
        <View style={styles.headingContainer}>
          <Text allowFontScaling={false} style={styles.title}>
            {props.comment.user.first_name + ' ' + props.comment.user.last_name}
          </Text>

          {/* <TimeAgo
            allowFontScaling={false}
            style={styles.posted}
            time={props.comment.entry_time}
          /> */}

          <Text allowFontScaling={false} style={styles.posted}>{moment(props.comment.entry_time).fromNow()}</Text>
        </View>
      </View>
      <Text allowFontScaling={false} style={styles.comment}>
        {props.comment.comment} 
        {/* {props.comment.comment.substr(0, props.comment.comment.indexOf('@'))} */}
      </Text>
      {/* <Tag
            tag="@"
            extractCommit={props.comment.comment}
            renderText={(mention) => (
              <Text style={{color:'red'}}>{mention}</Text>
            )}
            // formatText={(text) => `@${text}`}
            formatText={text => <Text style={{color:'red'}}>{text}</Text>}
            extractString={(mention) => `@[${mention}]`}
          />
     */}
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: WP('5'),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dp: {
    height: WP('13'),
    width: WP('13'),
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    fontSize: WP('4'),
    fontFamily: 'Assistant-Bold',
    color: Colors.black,
  },
  posted: {
    color: Colors.pickerBorder,
    fontFamily: 'Assistant-Bold',
  },
  headingContainer: {
    width: WP('78'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: WP('2'),
  },
  comment: {
    paddingLeft: WP('13'),
    color: Colors.grey,
    fontFamily: 'Assistant-Regular',
  },
})

//make this component available to the app
export default CommentItem
