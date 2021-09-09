//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,FlatList } from 'react-native';
import { Colors } from '../../../../../Theme';
import CommentItem from '../CommentItem';
import moment from 'moment';

// create a component
const CommentsListings = (props) => {
console.log('propsCommentsList===', JSON.stringify(props));
// props.feeds.sort((a,b)=> moment(b.entry_time).format('YYYY-MM-DD') > moment(a.entry_time).format('YYYY-MM-DD'))
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
    
            {props.comments.map((comment) => {
                console.log("Comment respnse : "+JSON.stringify(comment))
                return (
                    <CommentItem
                        comment={comment}
                    />
                )
                
            })}
        </ScrollView>
        // <View style={styles.container}>
        //     <FlatList
        //         data={
        //             props.comments.sort((a,b) => 
        //             moment(b.entry_time,'YYYY-MM-DD hh:mm') > 
        //             moment(a.entry_time,'YYYY-MM-DD hh:mm'))
        //         }
        //         // extraData={props.comments.sort((a,b)=> moment(b.entry_time,).format('YYYY-MM-DD') > moment(a.entry_time).format('YYYY-MM-DD'))}
        
        //         renderItem={({ item }) => (
        //             <CommentItem
        //               comment={item}
        //                 // navigation={props.navigation}
        //             />
        //         )}
        //         {...props}

        //         keyExtractor={item => item.id}
            
        //     />
        // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.white
    },
});

//make this component available to the app
export default CommentsListings;
