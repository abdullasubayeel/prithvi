import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthProvider';
import ProductTile from '../components/ProductTIle';
import {COLORS} from '../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';

const Products = () => {
  const {setProducts, products} = useContext(AuthContext);
  console.log('first');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('https://fakestoreapi.com/products').then(
          res => res.json(),
        );
        console.log(data.length);
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <ScrollView style={styles.productContainer}>
      <Text style={styles.heading}>My Product</Text>
      <View style={styles.listContainer}>
        {products?.map(obj => (
          <ProductTile key={obj.id} {...obj} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.primaryColor,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 8,
  },
  productContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: 8,
  },
  listContainer: {
    flex: 1,
    gap: 8,
  },
});
