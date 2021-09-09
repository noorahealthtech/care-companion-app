//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import CustomButton from '../../../Components/CustomButton'
import { useTranslation } from 'react-i18next'
import { Colors, Images, WP } from '../../../Theme';
import PreviousSessionList from './Components/SessionsLisitngs'
import { getFullData } from '../../../Store/actions'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const PreviousSessions = (props) => {
    console.log('PreviousSessionsProps====',JSON.stringify(props))
    const { t } = useTranslation()
    const PreviousSessions = useSelector(state => state.story.sessionsDetails)
    console.log('PreviousSessions======', JSON.stringify(PreviousSessions))
    console.log("showing PreviousSessions in content", PreviousSessions)
    var msgTotal
    if (PreviousSessions.length > 0) {
        PreviousSessions.map((entry) => {
            entry.no_of_people = parseInt(entry.no_of_people)
        })
        msgTotal = PreviousSessions.reduce(function (prev, cur) {
            return prev + cur.no_of_people;
        }, 0);
        console.warn(msgTotal)
    }

    useEffect(() => {

    }, [PreviousSessions, msgTotal])
    
    
 
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.appColor}
            />
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('previoussessions.title')}
                subtitle={t('previoussessions.subtitle')}
                boldSubtitle={t('previoussessions.language')}
                click={t('previoussessions.click')}
                color={Colors.appColor}
                isPreviousClass={true}
                sessions={PreviousSessions.length}
                patients={PreviousSessions.length}
            />
            {PreviousSessions.length > 0 ?
                <PreviousSessionList classes={PreviousSessions} onPress={(item) => props.navigation.navigate('EditSessionDetails', item)} />
                
                :
                <View style={styles.noImageContainer}>
                    <Image
                        source={Images.noClass}
                        style={styles.noClass}
                    />
                </View>


            }
            <CustomButton title={t('previoussessions.button1')}
                bgColor={Colors.appColor} titleColor={Colors.white}
                onPress={() => props.navigation.navigate('Sessions')}
                containerStyles={styles.btnContainer}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    btnContainer: {
        alignSelf: 'center',
        marginBottom: WP('2'),
        marginTop: WP('2')

    },
    noClass: {
        height: WP('90'),
        width: WP('90'),
        resizeMode: 'contain',
    },
    noImageContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default PreviousSessions;
