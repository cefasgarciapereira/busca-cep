import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddressForm from './src/components/AddressForm';
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <AddressForm/>
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});