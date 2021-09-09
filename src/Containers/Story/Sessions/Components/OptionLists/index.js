//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import OptionItems from '../OptionItems'
import { Colors, WP ,Images} from '../../../../../Theme';

// create a component
const OptionsListings = (props) => {
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
                        <OptionItems classes={type} category={props.category} onPress={(tapped) => { props.onPress(tapped) }} isEditProfile={props.isEditProfle} style={props.style}/>
                    )
                })}
            </View>
            
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: WP('10'),
        // height: WP('7'),
        // width: WP('50'),
        // width:'50%',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        
        
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('5'),
        // marginTop: WP('5'),
        fontFamily: 'Assistant-Regular',

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
    image: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.grey,
        marginHorizontal:2
        // marginRight: 4,
    },



});

//make this component available to the app
export default OptionsListings;
