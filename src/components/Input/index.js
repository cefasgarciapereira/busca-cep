import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const blue = '#3498db';
const green = '#2ecc71';


export default function Input(props){
    const [inputStyle, setInputStyle] = useState({
        borderColor: blue,
        width: '60%'
    });

    const _handleInputStyle = (color, width) => {
        setInputStyle({
            borderColor: color,
            width: width
        })
    }

    return(
        <View style={{
            ...styles.container,
            borderColor: inputStyle.borderColor,
            width: inputStyle.width
            }}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={text => props.onChange(text)}
                value={props.value}
                placeholderTextColor="#888" 
                style={styles.input}
                onFocus={() => _handleInputStyle(green, '100%')}
                onBlur={() =>  {
                    if (typeof(props.onBlurAction) !==  'undefined'){
                        props.onBlurAction();
                    }
                    _handleInputStyle(blue, '60%');
                }}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                />
        </View>
    )
}