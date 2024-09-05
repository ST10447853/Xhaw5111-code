/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function cooking() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cooking</Text>
      <Text style={styles.text}>Purpose: To prepare and cook nutritious family meals. </Text>
        <Text style={styles.text}>Content:
                                  •	Nutritional requirements for a healthy body 
                                  •	Types of protein, carbohydrates and vegetables. 
                                  •	Planning meals 
                                  •	Preparation and cooking of meals. </Text>
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

export default cooking;