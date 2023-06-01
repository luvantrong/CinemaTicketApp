import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import ItemCategories from '../item/ItemCategories';

const Categories = () => {
  return (
    <SafeAreaView style={stylesShop.container}>
      <View style={stylesShop.viewTitle}>
        <Text style={stylesShop.textTitle}>Categories</Text>
      </View>

      <View style={stylesShop.viewFind}>
        <TextInput placeholder="Search" style={stylesShop.textInputFind} />
        <Image
          style={stylesShop.imageFind}
          source={require('../../images/search.png')}
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        data={dataCategories}
        renderItem={({item}) => <ItemCategories data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Categories;

const stylesShop = StyleSheet.create({
  container: {paddingBottom: 140},
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    marginStart: 14.25,
  },
  viewFind: {
    flexDirection: 'column',
    marginHorizontal: 17,
    height: 48,
    marginTop: 20,
    marginBottom: 20,
  },

  textInputFind: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    paddingStart: 46,
    paddingEnd: 20,
  },
  imageFind: {
    marginTop: -33,
    marginStart: 16,
  },
});

const dataCategories = [
  {
    id: 1,
    name: 'Fruits',
    imagef: require('../../images/fr1.png'),
  },
  {
    id: 2,
    name: 'Vegetables',
    imagef: require('../../images/fr2.png'),
  },
  {
    id: 3,
    name: 'Meat',
    imagef: require('../../images/fr3.png'),
  },
  {
    id: 4,
    name: 'Fish',
    imagef: require('../../images/fr4.png'),
  },
  {
    id: 5,
    name: 'Sea food',
    imagef: require('../../images/fr5.png'),
  },
  {
    id: 6,
    name: 'Juice',
    imagef: require('../../images/fr6.png'),
  },
  {
    id: 7,
    name: 'Egg & Milk',
    imagef: require('../../images/fr7.png'),
  },
  {
    id: 8,
    name: 'Ice cream',
    imagef: require('../../images/fr8.png'),
  },
  {
    id: 9,
    name: 'Cake',
    imagef: require('../../images/fr9.png'),
  },
  // {
  //   id: 10,
  //   name: 'Drinks',
  //   imagef: require('../../images/f10.png'),

  // },
  // {
  //   id: 11,
  //   name: 'Wash',
  //   imagef: require('../../images/f11.png'),
  // },
];
