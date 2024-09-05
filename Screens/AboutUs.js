import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        We are a SME we were established in 2018 the person who started this companys name is Precious Radebe the Purpose of our Businessis to proivde skills for domestic workers abd gardeners.
        We also want to help disadvantaged people who might not have the resources to study further or learn new skills,The reason we do this is so that the individuals can recieve higher wages 
        and learn new skills,we also highly ecourage and teach entrepreneurship qualities so that individuals can start their own Business.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutUs;
