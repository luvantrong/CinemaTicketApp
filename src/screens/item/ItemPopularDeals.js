import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';

const ItemPopularDeals = () => {
  return (
    <DropShadow style={stylePopular.boxShadow}>
      <TouchableOpacity style={stylePopular.container}>
        <View style={stylePopular.viewImg}>
          <Image
            style={({width: 100}, {height: 80})}
            source={require('../../images/applered.png')}
          />
        </View>
        <Text style={stylePopular.textName}>Red Apple</Text>
        <Text style={stylePopular.textContent}>1kg,priceg</Text>
        <View style={stylePopular.viewPrice}>
          <Text style={stylePopular.textPrice}>$ 4,99</Text>
          <Image source={require('../../images/add.png')} />
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

export default ItemPopularDeals;

const stylePopular = StyleSheet.create({
  boxShadow: {
    shadowColor: '#C4C4C4',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  container: {
    flexDirection: 'column',
    width: 164,
    height: 194,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    margin: 10,
    paddingHorizontal: 12,
  },
  viewImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
    marginBottom: 17,
  },
  viewPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textName: {
    height: 18,
    lineHeight: 18,
    fontStyle: 'normal',
    fontSize: 15,
    color: '#6D3805',
    fontWeight: '700',
    marginBottom: 3,
  },

  textContent: {
    height: 14,
    lineHeight: 14,
    fontStyle: 'normal',
    fontSize: 12,
    color: '#929292',
    fontWeight: '400',
  },

  textPrice: {
    height: 24,
    lineHeight: 24,
    fontStyle: 'normal',
    fontSize: 20,
    color: '#FF5E00',
    fontWeight: '700',
    marginTop: 7,
  },
});
