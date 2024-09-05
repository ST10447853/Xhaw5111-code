/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function GardenMaintenance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garden Maintenance</Text>
      <Text style={styles.text}>Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden. </Text>
        <Text style={styles.text}>Content:
                                  • Water restrictions and watering requirements of indigenous and exotic plants. 
                                  •	Pruning and propagation 
                                  •	Planting techniques and different plant types. </Text>
        <Text style={styles.text}>Price: R750</Text>
        <Button
        title="Add to Cart"
        onPress={() => navigation.navigate('CalculationScreen')}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default GardenMaintenance;