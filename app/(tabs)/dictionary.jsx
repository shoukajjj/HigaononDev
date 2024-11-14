import { obj } from '../../data';
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View,SafeAreaView} from 'react-native';

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
const dictionaryPage = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Load data (either set directly from local JSON or fetched from API)
    setWords(obj);
  }, []);

  const renderItem = ({ item }) => (
    <SafeAreaView> 
      <View className='border-2 border-black mx-5' >
        <Text className='text-lg'>{capitalizeFirstLetter(item.word)}</Text>
        <Text >{item.prn}{' '}{item.phonetic}</Text>
        
      </View>
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

export default dictionaryPage

