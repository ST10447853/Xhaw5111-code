/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function SixWeekCourses({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Courses</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ChildMinding')}>
        <Text style={styles.button}>Child Minding</Text>
        <Text style={styles.text}>Purpose: To provide basic child and baby care. </Text>
        <Text style={styles.text}>Price: R750</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cooking')}>
        <Text style={styles.button}>Cooking</Text>
        <Text style={styles.text}>Purpose: To prepare and cook nutritious family meals. </Text>
        <Text style={styles.text}>Price: R750</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GardenMaintenance')}>
        <Text style={styles.button}>Garden Maintenance</Text>
        <Text style={styles.text}>Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden. </Text>
        <Text style={styles.text}>Price: R750</Text>
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

export default SixWeekCourses;
