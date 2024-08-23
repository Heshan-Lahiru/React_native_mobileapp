import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const MAX_RETRIES = 3; 

function PythonCompilerScreen() {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const handleRun = async () => {
    let retryCount = 0;
    while (retryCount < MAX_RETRIES) {
      try {
        await delay(1000 * retryCount); 

        const response = await fetch('https://api.jdoodle.com/v1/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId: 'e2bbcb37dcb09eaec9a5b12abf08cf1c', 
            clientSecret: 'e4b5a340c7dea2a415a61b773d22a0ea32069c04934a511e9f2ce83f1e39da41', 
            script: code,
            language: 'python3',
            versionIndex: '3',
            compileOnly: false,
          }),
        });

        if (!response.ok) {
          const errorDetails = await response.text();
          if (response.status === 429) {
            retryCount++;
            if (retryCount < MAX_RETRIES) {
              continue; 
            } else {
              throw new Error('Too many requests. Please try again later.');
            }
          } else if (response.status === 403) {
            throw new Error('Access forbidden. Check your API credentials. Details: ' + errorDetails);
          }
          throw new Error(`HTTP error! Status: ${response.status}. Details: ${errorDetails}`);
        }

        const result = await response.json();
        navigation.navigate('OutputScreen', { output: result.output });
        break; 
      } catch (error) {
        console.error('Error:', error);
        if (retryCount >= MAX_RETRIES) {
          navigation.navigate('OutputScreen', { output: `Error: ${error.message}` });
        }
        break; 
      }
    }
  };

  return (
    <View style={styles.compilerContainer}>
      <Text style={styles.title}>Python Compiler</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Type your Python code here..."
        placeholderTextColor="gray" 
        value={code}
        onChangeText={setCode}
      />
      <Button title="Run" onPress={handleRun} />
    </View>
  );
}

const styles = StyleSheet.create({
  compilerContainer: {
    flex: 1,
    backgroundColor: 'black', 
    padding: 10,
  },
  textInput: {
    width: '100%',
    height: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    color: 'green', 
    backgroundColor: 'black', 
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white', 
  },
});

export default PythonCompilerScreen;
