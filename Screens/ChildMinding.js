/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function ChildMinding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Child Minding</Text>
      <Text style={styles.text}>Purpose: To provide basic child and baby care. </Text>
        <Text style={styles.text}>Content:
                                  •	Birth to 6-month-old baby needs. 
                                  •	Seven months to one year old needs. 
                                  •	Toddler needs. 
                                  •	Educational Toys </Text>
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

export default ChildMinding;