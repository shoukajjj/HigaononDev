import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import obj from '../../data'; // Import the JSON object

const WordDetailPage = () => {
  const { word } = useLocalSearchParams(); // Get the 'word' parameter from the URL

  // Check if the word exists in the JSON object
  const wordDetails = obj[word]; // Assuming `obj` is a dictionary with words as keys

  if (!wordDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Word not found.</Text>
      </View>
    );
  }

  const { prn, phonetic, definition } = obj;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{word}</Text>
      <Text style={styles.text}>Pronunciation: {prn || 'N/A'}</Text>
      <Text style={styles.text}>Phonetic: {phonetic || 'N/A'}</Text>
      <Text style={styles.text}>Definition: {definition || 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default WordDetailPage;
