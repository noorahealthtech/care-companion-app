//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OptionItem from '../OptionItem'
import { Colors, WP } from '../../../../../Theme';

// create a component
const OptionsListing = (props) => {
    useEffect(() => {

    }, [props.classesTypes])
    return (
        <>
          {props.header ? (
            null
          ): (
            <Text allowFontScaling={false} style={styles.title}>{props.title}
                <Text allowFontScaling={false} style={styles.subtitle} >{props.subTitle}</Text>
            </Text>
          )}
            {props.subTitles ? (
                <Text allowFontScaling={false} style={styles.subtitles} >{props.subTitles}</Text>
            ): null}
            <View style={[styles.container]}>
                {props.classesTypes.map((type) => {
                    return (
                        <OptionItem classes={type} onPress={(tapped) => { props.onPress(tapped) }} isEditProfile={props.isEditProfle} style={props.style}/>
                    )
                })}
            </View >
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: WP('10'),
        height: WP('7'),
        // width: WP('50'),
        width:WP('100'),
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        flexDirection:'row',
        
        
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('5'),
        // marginTop: WP('5'),
        fontFamily: 'Assistant-Regular'

    },
    subtitle: {
        color: Colors.pickerBorder,
        fontSize: WP('4'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    },
    subtitles: {
        color: Colors.black,
        fontSize: WP('4'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    },



});

//make this component available to the app
export default OptionsListing;
