import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

export default function Loading(props){


    return(
        props.loading ?
            <View style={styles.container}>
                <ActivityIndicator
                size='large'
                color='#3498db'
                />
            </View> 
        : null
    )
}