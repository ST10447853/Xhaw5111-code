/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';


function CalculatonSc() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (course) => {
    const index = selectedCourses.indexOf(course);
    if (index === -1) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    }
  };

  const calculateTotal = () => {
    // Calculate the total based on selected courses
    const total = selectedCourses.reduce((acc, course) => acc + course.price, 0);
    const vat = total * 0.15; // Assuming 15% VAT
    return total + vat;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Text style={styles.sectionTitle}>Selected Courses:</Text>
      {selectedCourses.map((course) => (
        <View key={course.id} style={styles.courseItem}>
          <Text>{course.name}</Text>
          <Text>{course.price.toFixed(2)}</Text>
        </View>
      ))}
      <Text style={styles.sectionTitle}>Total:</Text>
      <Text style={styles.total}>{calculateTotal().toFixed(2)}</Text>
      <Button title="Proceed to Payment" onPress={() => console.log('Proceed to payment')} />
    </ScrollView>
  );
}

export default CalculatonSc;