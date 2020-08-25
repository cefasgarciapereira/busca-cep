import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';


export default function Button(props){

    return(
        <TouchableOpacity style={styles.container}>
            <Text 
            style={styles.label}
            onPress={() => props.action()}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}