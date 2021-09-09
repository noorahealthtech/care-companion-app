import React from 'react'
import { IndexExampleContainer } from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors, WP } from '../Theme';
import CustomDrawer from '../Components/CustomDrawer'
import MarkAttendance from '../Containers/Story/MarkAttendance'
import AttendanceMarked from '../Containers/Story/AttendanceMarked'
import Feed from '../Containers/Story/Feed'
import Profile from '../Containers/Story/Profile'
import EditProfile from '../Containers/Story/EditProfile'
import OnlineCourses from '../Containers/Story/OnlineCourses'
import OnlineCoursesDetails from '../Containers/Story/OnlineCourseDetails'
import AddComments from '../Containers/Story/AddComment'
import Likes from '../Containers/Story/Likes'
import PreviousClasses from '../Containers/Story/PreviousClasses'
import PreviousSessions from '../Containers/Story/PreviousSessions'
import EditClassDetails from '../Containers/Story/EditClassDetails'
import EditSessionDetails from '../Containers/Story/EditSessionDetails';
import CcpTools from '../Containers/Story/Ccp'
import CcpToolsDetails from '../Containers/Story/CcpDetails'
import Games from '../Containers/Story/InteractiveGame'
import CommingSoon from '../Containers/Story/CommingSoon'
import PreferredLanguage from '../Containers/Story/PreferredLanguage'
import YoutubeComponent from '../Containers/Story/Feed/Components/VideoPlayer'
import Sessions from '../Containers/Story/Sessions';
import SessionMarked from '../Containers/Story/SessionMarked';
const Drawer = createDrawerNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerPosition={'right'}
      drawerStyle={{
        width: WP('50'),
        backgroundColor: Colors.white
      }}
      drawerContent={props => <CustomDrawer {...props} />}

    >
      <Drawer.Screen name="Home" component={IndexExampleContainer} options={{ headerShown: false }} />
      <Drawer.Screen name="MarkAttendance" component={MarkAttendance} options={{ headerShown: false }} />
      <Drawer.Screen name="Sessions" component={Sessions} options={{ headerShown: false }} />
      <Drawer.Screen name="AttendanceMarked" component={AttendanceMarked} options={{ headerShown: false }} />
      <Drawer.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Drawer.Screen name="OnlineCourses" component={OnlineCourses} options={{ headerShown: false }} />
      <Drawer.Screen name="OnlineCoursesDetails" component={OnlineCoursesDetails} options={{ headerShown: false }} />
      <Drawer.Screen name="AddComments" component={AddComments} options={{ headerShown: false }} />
      <Drawer.Screen name="Likes" component={Likes} options={{ headerShown: false }} />
      <Drawer.Screen name="PreviousClasses" component={PreviousClasses} options={{ headerShown: false }} />
      <Drawer.Screen name="PreviousSessions" component={PreviousSessions} options={{ headerShown: false }} />
      <Drawer.Screen name="EditClassDetails" component={EditClassDetails} options={{ headerShown: false }} />
      <Drawer.Screen name="EditSessionDetails" component={EditSessionDetails} options={{ headerShown: false }} />
      <Drawer.Screen name="CcpTools" component={CcpTools} options={{ headerShown: false }} />
      <Drawer.Screen name="CcpToolsDetails" component={CcpToolsDetails} options={{ headerShown: false }} />
      <Drawer.Screen name="Games" component={Games} options={{ headerShown: false }} />
      <Drawer.Screen name="CommingSoon" component={CommingSoon} options={{ headerShown: false }} />
      <Drawer.Screen name="PreferredLanguage" component={PreferredLanguage} options={{ headerShown: false }} />
      <Drawer.Screen name="YoutubeComponent" component={YoutubeComponent} options={{ headerShown: false }} />
      <Drawer.Screen name="SessionMarked" component={SessionMarked} options={{headerShown: false}} /> 
    </Drawer.Navigator>
  )
}

export default MainNavigator
