import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ItemDetails = ({title, image, price, inStock}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      {inStock ? (
        <Text style={styles.price}>{price}</Text>
      ) : (
        <View>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.stock}>STOKTA YOK</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3333',
    padding: 10,
    margin: 5,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default ItemDetails;
