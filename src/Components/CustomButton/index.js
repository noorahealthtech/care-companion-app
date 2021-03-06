//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout } from '../../Theme';
import { ShowActivityIndicator } from '../../Services'
// create a component
const CustomButton = (props) => {
    return (
        <>
            {props.loading ?
                <View style={[Layout.buttonContainer, props.bgColor ? { backgroundColor: props.bgColor } : null, props.containerStyles]}>
                    {ShowActivityIndicator()}
                </View>
                :
                <TouchableOpacity style={[Layout.buttonContainer, props.bgColor ? { backgroundColor: props.bgColor } : null, props.containerStyles]}
                    onPress={props.onPress}
                >
                    <Text style={[props.textStyles ? props.textStyles : Layout.btnText, props.titleColor ? { color: props.titleColor } : null]} allowFontScaling={false}>{props.title}</Text>
                </TouchableOpacity>
            }
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default CustomButton;
