//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../Theme';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
// create a component
const CuatomCoursesHeaders = (props) => {
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()


    return (
        <View style={styles.container}>
            {props.isCourseDetails ?
                <View style={styles.isCourse}>
                    <TouchableOpacity style={styles.drawerContainer}
                        onPress={onBackBtnPressed}
                    >
                        <Image
                            source={Images.back}
                            style={styles.drawer}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.drawerContainer}
                        onPress={toggleDrawer}
                    >
                        <Image
                            source={Images.menu}
                            style={styles.drawer}
                        />
                    </TouchableOpacity>
                </View>

                :
                <TouchableOpacity style={styles.drawerContainer}
                    onPress={toggleDrawer}
                >
                    <Image
                        source={Images.menu}
                        style={styles.drawer}
                    />
                </TouchableOpacity>
            }
            <View>
                <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
                <Text allowFontScaling={false} style={styles.subtitle}>{props.subtitle}
                    <Text allowFontScaling={false} style={styles.boldSubtitle}> {props.boldSubtitle}
                    </Text><Text allowFontScaling={false} style={styles.subtitle}> {props.click} </Text>
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: WP('55'),
        backgroundColor: Colors.coursesColor,
        padding: WP('5'),
        justifyContent: 'space-between'
    },
    drawerContainer: {
        alignSelf: 'flex-end',
    },
    drawer: {
        height: WP('15'),
        width: WP('5'),
        resizeMode: 'contain',
    },
    title: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: WP('6'),
        marginBottom: WP('2')
    },
    subtitle: {
        color: Colors.white,
        fontSize: WP('3.5')
    },
    boldSubtitle: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: WP('3.5')
    },
    isCourse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

//make this component available to the app
export default CuatomCoursesHeaders;