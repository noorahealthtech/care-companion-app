//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FeedItem from '../FeedItem'
import moment from 'moment'
// create a component
const FeedListing = (props) => {
    console.log('props.Feed===', JSON.stringify(props.entry_time))
    return (
        <View style={styles.container}>
            <FlatList
                data={props.feeds.sort((a,b)=> moment(b.entry_time).format('YYYY-MM-DD') > moment(a.entry_time).format('YYYY-MM-DD'))}
                extraData={props.feeds.sort((a,b)=> moment(b.entry_time).format('YYYY-MM-DD') > moment(a.entry_time).format('YYYY-MM-DD'))}
        
                renderItem={({ item }) => (
                    <FeedItem
                        feed={item}
                        navigation={props.navigation}
                    />
                )}
                {...props}

                keyExtractor={item => item.id}
            
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 50
    },
});

//make this component available to the app
export default FeedListing;
