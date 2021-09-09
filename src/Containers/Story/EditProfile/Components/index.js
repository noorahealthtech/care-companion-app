//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, WP } from '../../../../Theme';

// create a component
const MedicalConditionsPicker = (props) => {
    console.log("showing Medical Conditions passed params", JSON.stringify(props))
    const [name, setName] = useState(null)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (props.placeholder.length > 0) {
            setName(props.placeholder[0].name)
        }
    }, [])
    console.log("props.setValue ====> ", JSON.stringify(props.setValue))
    return (
        <>
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <DropDownPicker
                // zIndex={5000}
                style={styles.inputField}
                // items={name}
                showArrow={false}
                setValue={props.setValue}
                open={open}
                value={props.value}
                setOpen={setOpen}
                items={props.items}
                labelStyle={{
                    fontSize: WP('4'),
                    color: Colors.grey,
                    fontFamily: 'Assistant-Regular'
                }}
                controller={instance => controller = instance}
                // onChangeList={(items, callback) => {
                //     console.log('MedicalPickITems====', JSON.stringify(items))
                //     new Promise((resolve, reject) => resolve(props.setItems(items)))
                //         .then(() => callback())
                //         .catch(() => { });
                // }}
                setItems={(items, callback) => {
                console.log('OnChangeList====', JSON.stringify(items))
                new Promise((resolve, reject) => resolve(props.setItems(items)))
                    .then(() => callback())
                    .catch(() => { });
                }}
                defaultValue={props.value}
                placeholder={name ? name : 'Tap to select'}
                onChangeValue={(item) => {
                    props.pickedMedicalValue(item)
                }}
                // onChangeItem={item => { props.setValue(item.value), props.pickedMedicalValue(item), console.log('ItemPicked===', item) }}
            />

        </>

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
        fontSize: WP('4'),
        color: Colors.grey
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    }
});

//make this component available to the app
export default MedicalConditionsPicker;
