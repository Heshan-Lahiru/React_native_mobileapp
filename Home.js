import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


import localImage from './assets/mud.jpg';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, I'm Python Compiler</Text>
      <Image 
        source={localImage} 
        style={styles.image} 
      />
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('compilor')}
      >
      <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '70%',
    marginBottom: 20,
  },
  button: {
    width: '30%',
    padding: 10,
    backgroundColor: '#007BFF', 
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
  },
});
