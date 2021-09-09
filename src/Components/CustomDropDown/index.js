//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, Images, Layout, WP } from '../../Theme';
import { useTranslation } from 'react-i18next'

const CustomDropDown = (props) => {
    console.log('CustomeDropDownProps====', JSON.stringify(props))
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{ label: 'MADHYA PRADESH', value: 'item1' }, { label: 'PUNJAB', value: 'item2' }, { label: 'MAHARASHATRA', value: 'item3' }, { label: 'KARNATAKA', value: 'item4' },]);
    const [open, setOpen] = useState(false);
    console.log('Constantitems====', JSON.stringify(items))
    const { t } = useTranslation()
    let controller;
    return (
       

             <DropDownPicker
        // zIndex={5000}
            value={props.value}
            items={items}
            listMode="FLATLIST"
            // multiple={true}
    //         zIndex={3000}
    // zIndexInverse={1000}
            // listMode="Default"
            dropDownDirection="TOP"
            // bottomOffset={100}
            mode="SIMPLE"
            // maxHeight={200}
            // itemKey="value"
            open={open}
            setOpen={setOpen}
            // dropDownDirection="Top"
            // style={{backgroundColor:'red' , transform: [{ rotate: '180deg',}], }}
            
            arrowColor={Colors.appColor}
            ArrowUpIconComponent={() => <Image source={Images.forward} style={styles.accessoryUp} />}
            ArrowDownIconComponent={() => <Image source={Images.forward} style={styles.accessory} />}
            placeholder={t('states.placeholder')}
            // containerStyle={Layout.dropDownContainer}
            containerStyle={{height: 40}}
            controller={instance => controller = instance}
            setValue={props.setValue}
            // setItems={setItems}
            setItems={(items, callback) => {
                console.log('OnChangeList====', JSON.stringify(items))
                new Promise((resolve, reject) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch(() => { });
            }}
            defaultValue={props.value}
            // onChangeItem={item => props.setValue(item.value)}
            dropDownStyle={{
                transform: [{ rotate: '180deg' }],
            
                fontFamily: 'Assistant-Bold',
                backgroundColor: Colors.inputGrey,
                
            }}
            selectedLabelStyle={{
                color: Colors.grey,
                fontFamily: 'Assistant-Bold',
            }}
            placeholderStyle={{
                fontFamily: 'Assistant-SemiBold',
                color: Colors.grey,
            }}
            itemStyle={{
                fontFamily: 'Assistant-Bold',
                color: Colors.grey,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            }}

        />
  
 

    )

};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accessory: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
    },
    viewContainer: { zIndex: 1 },
    accessoryUp: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
        transform: [{ rotate: '90deg' }]
    },
});

//make this component available to the app
export default CustomDropDown;
