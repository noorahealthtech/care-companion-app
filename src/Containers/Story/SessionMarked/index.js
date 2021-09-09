//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomLayout, CustomButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import SessionHeadings from './Components/index';
import { Colors } from '../../../Theme';
// import { getFullData } from '../../../Store/actions'
import { getSessionData } from '../../../Store/actions';
import { isOnline, navigate, showToast } from '../../../Services'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const SessionMarked = (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const showPreviousClasses = () => {
        isOnline((connected) => {
            dispatch(getSessionData(user.id, () => {
                props.navigation.navigate('PreviousSessions')
            }, () => { }))
        }, (offline) => {
            showToast(t('commonApp.internetError'))
        })
    }
    return (
        <CustomLayout
            drawerOnPress={toggleDrawer}
            isMarked={true}
        >
            <SessionHeadings />
            <CustomButton
                onPress={showPreviousClasses}
                title={t('attendanceMarked.button1')}
                titleColor={Colors.black}
            />
            <CustomButton
            onPress={() => {
              navigate('Profile');
            }}
                title={t('attendanceMarked.button2')}
                titleColor={Colors.black}
            />
        </CustomLayout>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
//make this component available to the app
export default SessionMarked;
