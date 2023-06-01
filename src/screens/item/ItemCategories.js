import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemCategories = props => {
  const {data} = props;
  const {id, name, imagef} = data;

  return (
    <TouchableOpacity style={styleItemCategories.container}>
      <Image style={styleItemCategories.imagef} source={imagef} />
      <Text style={styleItemCategories.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategories;

const styleItemCategories = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 180,
    marginStart: 11,
  },

  imagef: {
    width: 120,
    height: 120,
  },

  text: {
    marginTop: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    height: 18,
    lineHeight: 18,
    color: '#6D3805',
  },
});
