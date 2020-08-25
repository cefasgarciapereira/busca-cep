import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';
import AddressForm from './src/components/AddressForm';
import FlashMessage from "react-native-flash-message";
import styles from './AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <AddressForm/>
      <FlashMessage position="top" />
    </View>
  );
}