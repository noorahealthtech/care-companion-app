//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';
import TimeAgo from 'react-native-timeago';

// create a component
const CommentItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={props.comment.user && props.comment.user.profile_image ? { uri: props.comment.user.profile_image } : Images.comment}
                    style={styles.dp}
                />
                <View style={styles.headingContainer}>
                    <Text allowFontScaling={false} style={styles.title}>{props.comment.user.first_name + ' ' + props.comment.user.last_name}</Text>
                    <TimeAgo allowFontScaling={false} style={styles.posted} time={props.comment.entry_time} />
                </View>
            </View>
            <Text allowFontScaling={false} style={styles.comment}>{props.comment.comment}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: WP('5')
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
        borderRadius: 100
    },
    title: {
        fontSize: WP('4'),
        fontFamily: 'Assistant-Bold',
        color: Colors.black
    },
    posted: {
        color: Colors.pickerBorder,
        fontFamily: 'Assistant-Bold'
    },
    headingContainer: {
        width: WP('78'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: WP('2')
    },
    comment: {
        paddingLeft: WP('13'),
        color: Colors.grey,
        fontFamily: "Assistant-Regular"
    }
});

//make this component available to the app
export default CommentItem;
