import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKASTORE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Header;
