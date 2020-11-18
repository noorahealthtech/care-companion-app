//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, WP } from '../../../../Theme';
import { useTranslation } from 'react-i18next'

// create a component

const PageItem = (props) => {
    const { t } = useTranslation()
    console.log('showing props', props)

    const navigater = (page) => {
        switch (page.title) {
            case t('drawer.screen1'):
                props.navigation.navigate('Profile')
                break;
            case t('drawer.screen2'):
                props.navigation.navigate('MarkAttendance')
                break;
            case t('drawer.screen3'):
                props.navigation.navigate('Feed')
                break;
            case t('drawer.screen4'):
                props.navigation.navigate('PreviousClasses')
                break;
            case t('drawer.screen5'):
                props.navigation.navigate('OnlineCourses')
                break;
            case t('drawer.screen6'):
                props.navigation.navigate('CcpTools')
                break;
            case t('drawer.screen7'):
                props.navigation.navigate('Games')
                break;
            default:
                break;
        }
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigater(props.page)}
        >
            <Text style={styles.titleText}>{props.page.title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderBottomWidth: WP('0.5'),
        borderColor: Colors.appColor,
        marginBottom: WP('3'),
        paddingBottom: WP('3')
    },
    titleText: {
        color: Colors.grey,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('4')
    }
});

//make this component available to the app
export default PageItem;
