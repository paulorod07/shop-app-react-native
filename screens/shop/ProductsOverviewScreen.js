import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function ProductsOverviewScreen(props) {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList data={products} keyExtractor={item => item.id} renderItem={({ item }) => <Text>{item.title}</Text>} />
  );
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};