//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView ,FlatList} from 'react-native';
import { WP } from '../../../../../Theme';
import ClassesItem from '../ClassesItem'
import moment from 'moment';
// create a component
const PreviousClassesList = (props) => {
    console.log('PropsClasses===', JSON.stringify(props.classes))
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.classes.sort((a,b) => 
             moment(b.entry_time,'YYYY-MM-DD HH:MM:SS') > moment(a.entry_time,'YYYY-MM-DD HH:MM:SS'))
            .map((classDetails) => {
                return (
                    <ClassesItem classDetails={classDetails} onPress={(item) => props.onPress(item)} />
                )

            })}

            
        </ScrollView>
        // <ScrollView style={styles.container}>
        //     <FlatList
        //         data={
        //             props.classes.sort((a,b) => 
        //             moment(b.entry_time,'YYYY-MM-DD HH:MM:SS') > 
        //             moment(a.entry_time,'YYYY-MM-DD HH:MM:SS'))
        //         }
        //         // extraData={props.comments.sort((a,b)=> moment(b.entry_time,).format('YYYY-MM-DD') > moment(a.entry_time).format('YYYY-MM-DD'))}
        
        //         renderItem={({ item }) => (
        //             <ClassesItem classDetails={item} onPress={(item) => props.onPress(item)} />
        //         )}
        //         {...props}

        //         keyExtractor={item => item.id}
            
        //     />
        // </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: WP('5'),
        paddingBottom: 150
    },
});

//make this component available to the app
export default PreviousClassesList;
