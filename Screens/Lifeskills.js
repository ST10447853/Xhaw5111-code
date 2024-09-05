/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Lifeskills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Skills</Text>
      <Text style={styles.text}>Purpose: To provide skills to navigate basic life necessities </Text>
        <Text style={styles.text}>Content:
                                  •	Opening a bank account 
                                  •	Basic labor law (Know your rights) 
                                  •	Basic reading and writing literacy. 
                                  •	Basic numeric literacy</Text>
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

export default Lifeskills;
