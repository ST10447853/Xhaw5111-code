/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function homeSc({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Courses App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SixMonthCourses')}>
        <Text style={styles.button}>Six-Month Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SixWeekCourses')}>
        <Text style={styles.button}>Six-Week Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
        <Text style={styles.button}>Contact Us</Text>
      </TouchableOpacity>
      {/* Add other navigation links as needed */}
    </View>
  );
}

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  buttom: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
  
});

export default homeSc;
