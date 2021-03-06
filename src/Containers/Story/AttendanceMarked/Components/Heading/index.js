//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Layout, Fonts } from '@/Theme'
import { Colors, WP } from '../../../../../Theme';

// create a component
const Headings = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.todo}>{t('attendanceMarked.heading')}</Text>
            <Text allowFontScaling={false} style={styles.todo}>{t('attendanceMarked.been')} <Text allowFontScaling={false} style={styles.heading}>{t('attendanceMarked.marked')}</Text></Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading: {
        color: Colors.white,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('5')
    },
    todo: {
        color: Colors.white,
        fontSize: WP('5'),
        fontFamily: 'Assistant-Regular',


    },

});

//make this component available to the app
export default Headings;
