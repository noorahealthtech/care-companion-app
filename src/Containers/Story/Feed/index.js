//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { Colors, WP } from '../../../Theme';
import FeedListing from './Components/FeedList'
import { Layout, Fonts, Images } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const Feed = (props) => {
    const nurseFeed = useSelector(state => state.story.nurseFeed)
    const user = useSelector(state => state.auth.user)

    console.log("showing data  in feeds", nurseFeed)

    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={user.first_name + ' ' + user.last_name}
                navigation={props.navigation}
            />
            <FeedListing
                navigation={props.navigation}
                feeds={nurseFeed}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Feed;
