import { obj } from '../../data';
import React, { useState, useEffect } from 'react';
import { FlatList, Pressable, Text, View, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; // Note the change to useRouter

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const DictionaryPage = () => {
  const [words, setWords] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Load data (either set directly from local JSON or fetched from API)
    setWords(obj);
  }, []);

  const renderItem = ({ item }) => (
    <SafeAreaView>
      <Pressable onPress={() => router.push(`/${item.word}`)}> 
        <View style={{ borderWidth: 2, borderColor: 'black', marginHorizontal: 20, padding: 10 }}>
          <Text style={{ fontSize: 18 }}>{capitalizeFirstLetter(item.word)}</Text>
          <Text>{item.prn} {' '} {item.phonetic}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={words}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Use unique key if available
    />
  );
};

export default DictionaryPage;
