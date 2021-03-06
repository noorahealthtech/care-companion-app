//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WP } from '../../../../../Theme';
import LikeItem from '../LikeItem'
// create a component
const LikesListing = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {props.likes.map((like) => {
                return (
                    <LikeItem like={like} />
                )
            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: WP('50')
    },
});

//make this component available to the app
export default LikesListing;
