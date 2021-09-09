//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
// create a component
const OptionItems = (props) => {

    useEffect(() => {

    }, [props.classes])
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.onPress(props.classes)}
            >
                {props.classes.isSelected ?
                    <View style={{flexDirection:'row'}}>
                        <Image
                            style={[styles.selectedImages, props.isEditProfile ? { tintColor: Colors.secondaryColor } : null]}
                            source={Images.checkedBox}

                        />
                        <Text allowFontScaling={false} style={[styles.title,{width:(props.category == 1)?WP('39'):WP('30')}]} numberOfLines={0}>{props.classes.title}</Text>
                    </View>
                    :
                    <View style={{flexDirection:'row'}}>
                        <Image
                              style={[styles.image]}
                            source={Images.unchecked}
                            resizeMode={'contain'}
                        />
                        <Text allowFontScaling={false} style={[styles.title,{width:(props.category == 1)?WP('39'):WP('30')}]} numberOfLines={0}>{props.classes.title}</Text>
                    </View>


                }
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
        height:WP(10),
        justifyContent: 'space-between'
        // paddingHorizontal:4

    },
    image: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.grey,
        marginHorizontal:2
        // marginRight: 4,
    },
    selectedImages: {
        height: WP('6'),
        width: WP('6'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
        marginRight: 4,

    },
    title: {
        color: Colors.grey,
        fontFamily: 'Assistant-Regular',
        fontSize: WP('4'),
        flexWrap:'wrap',
        

        // marginHorizontal:3
    }
});

//make this component available to the app
export default OptionItems;
