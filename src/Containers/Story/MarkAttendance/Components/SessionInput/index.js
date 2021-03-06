//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
import { Colors } from '../../../../../Theme';
import { color } from 'react-native-reanimated';

// create a component
const SessionInput = (props) => {
    return (
        <View style={[styles.container, props.inputContainerStyles]}>
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <TextInput
                style={[styles.inputField, { height: props.isNotes ? 'auto' : WP('13'), minHeight: props.isNotes ? WP('13') : null }, props.inputStyles]}
                multiline={props.isNotes ? true : false}
                {...props}
                placeholderTextColor={Colors.pickerBorder}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    inputField: {
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
        color: Colors.grey,
        fontSize: WP('4')
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'
    }
});

//make this component available to the app
export default SessionInput;
