import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ItemTest = () => {
  return (
    <View style={{margin: 10}}>
      <Image
        style={{width: 164, height: 138}}
        source={require('../../images/saleoff.png')}
      />
    </View>
  );
};

export default ItemTest;

const styles = StyleSheet.create({});
