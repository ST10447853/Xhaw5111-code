/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Landscaping() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landscaping</Text>
      <Text style={styles.text}>Purpose: To provide landscaping services for new and established gardens.  </Text>
        <Text style={styles.text}>Content:
                                  •	Indigenous and exotic plants and trees. 
                                  •	Fixed structures (fountains, statues, benches, tables, built-in braai) 
                                  •	Balancing of plants and trees in a garden 
                                  •	Aesthetic of plant’s shape and colors 
                                  •	Garden Layout </Text>
        <Text style={styles.text}>Price: R1 500</Text>
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

export default Landscaping;