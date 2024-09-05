/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text>Business Number: +27 123 456 7890</Text>
      <Text>Email Address: empoweringTheNation@africa.com</Text>
      {/*Example Addresses*/}
      <Text>Address 1: 123 Main Street, Delmas, Mpumalanga</Text>
      <Text>Address 1: 123 Main Street, Delmas, Mpumalanga</Text>
      <Text>Address 1: 123 Main Street, Delmas, Mpumalanga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
export default ContactUsScreen;
