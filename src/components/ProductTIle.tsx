import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Product} from '../enums/Product';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ProductTile = (props: Product) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <TouchableOpacity
      style={styles.productTileContainer}
      onPress={toggleExpand}>
      {expanded ? (
        <>
          <View>
            <Image
              source={{uri: props.image}}
              height={100}
              style={{
                alignSelf: 'center',
                margin: 12,
                width: '80%',
                height: 200,
              }}
              resizeMode="contain"
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>{props.description}</Text>
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>
              {props.description.length > 50
                ? props.description.substring(0, 50) + '...show more'
                : props.description}
            </Text>
          </View>

          <Icon name="chevron-up" size={14} style={{marginRight: 12}} />
        </>
      )}
    </TouchableOpacity>
  );
};

export default ProductTile;

const styles = StyleSheet.create({
  productTileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 32,
    maxWidth: '80%',
    color: '#fff',
    fontWeight: '800',
  },

  title: {
    maxWidth: '95%',
    fontSize: 16,
    color: '#222',
    fontWeight: '800',
  },
  desc: {
    maxWidth: '95%',
  },
});
