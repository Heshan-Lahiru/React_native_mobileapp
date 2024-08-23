import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

function OutputScreen({ route }) {
  const { output } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.outputContainer}>
        <Text style={styles.outputText}>{output}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  outputContainer: {
    width: '100%',
    height: '100%',
  },
  outputText: {
    color: 'green',
    fontSize: 16,
  },
});

export default OutputScreen;
