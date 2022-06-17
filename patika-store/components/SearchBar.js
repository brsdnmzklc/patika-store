import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: '#3333',
    borderRadius: 10,
    paddingLeft: 20,
    height: 50,
  },
});

export default SearchBar;
