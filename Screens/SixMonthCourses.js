/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function SixMonthCourses({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Courses</Text>
      <TouchableOpacity onPress={() => navigation.navigate('FirstAid')}>
        <Text style={styles.button}>First Aid</Text>
        <Text style={styles.text}>Purpose: To provide first aid awareness and life support </Text>
        <Text style={styles.text}>Price: R1 500</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sewing')}>
        <Text style={styles.button}>Sewing</Text>
        <Text style={styles.text}>Purpose: To provide alterations and new garment tailoring services </Text>
        <Text style={styles.text}>Price: R1 500</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Landscaping')}>
        <Text style={styles.button}>Landscaping</Text>
        <Text style={styles.text}>Purpose: To provide landscaping services for new and established gardens.  </Text>
        <Text style={styles.text}>Price: R1 500</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LifeSkills')}>
        <Text style={styles.button}>Life Skills</Text>
        <Text style={styles.text}>Purpose: To provide skills to navigate basic life necessities </Text>
        <Text style={styles.text}>Price: R1 500</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default SixMonthCourses;
