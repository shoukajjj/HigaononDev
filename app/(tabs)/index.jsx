import React, { useState } from 'react';
import { TextInput, FlatList, View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { obj } from '../../data'; // Adjust the path as necessary

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  // Handle search input change
  const handleSearch = (text) => {
    setSearchTerm(text);

    // Filter data based on the search term
    if (text === '') {
      setFilteredData([]); // Clear the results if the search bar is empty
    } else {
      const filtered = obj.filter((item) =>
        item.word.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Render individual items
  const renderItem = ({ item }) => (
    <Pressable onPress={() => router.push(`/${item.word}`)}>
      <View style={styles.itemContainer}>
        <Text style={styles.word}>{item.word}</Text>
        <Text style={styles.details}>{item.definition}</Text>
      </View>
    </Pressable>
  );

  return (
    <View className='flex-1, px-10, bg-[#f8f8f8]'>
      <TextInput
        className='h-10, border-[#ccc], border-1, rounded, '
        placeholder="Search a word..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {searchTerm.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text className='text-center, mt-20, text-[#aaa], text-base'>Type something to start searching...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
 
});

export default SearchPage;
