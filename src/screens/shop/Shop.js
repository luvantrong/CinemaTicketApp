import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ItemCategories from '../item/ItemCategories';
import ItemPopularDeals from '../item/ItemPopularDeals';

const Shop = props => {
  const {navigation} = props;

  const goCategories = () => {
    navigation.navigate('Categories');
  };

  const goFruitsMenu = () => {
    navigation.navigate('FruitsMenus');
  };

  return (
    <SafeAreaView>
      <View style={stylesShop.viewTitle}>
        <Image source={require('../../images/location.png')} />
        <Text style={stylesShop.textTitle}>Lungangen</Text>
      </View>

      <View style={stylesShop.viewFind}>
        <TextInput placeholder="Search" style={stylesShop.textInputFind} />
        <Image
          style={stylesShop.imageFind}
          source={require('../../images/search.png')}
        />
      </View>

      <View style={stylesShop.viewCategories}>
        <Text style={stylesShop.textCategories}>Categories</Text>
        <TouchableOpacity onPress={goCategories}>
          <Text style={stylesShop.textCategories2}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataCategories}
        renderItem={({item}) => <ItemCategories data={item} />}
        keyExtractor={item => item.id}
      />
      <View style={stylesShop.viewCategories}>
        <Text style={stylesShop.textCategories}>Popular deals</Text>
        <TouchableOpacity onPress={goFruitsMenu}>
          <Text style={stylesShop.textCategories2}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{marginStart: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dataCategories}
        renderItem={({item}) => <ItemPopularDeals data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Shop;

const stylesShop = StyleSheet.create({
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
    marginBottom: 30,
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
  viewCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
  },
  textCategories: {
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 26,
    lineHeight: 26,
    color: '#6D3805',
    marginBottom: 10,
  },
  textCategories2: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    height: 22,
    lineHeight: 22,
    color: '#FF5E00',
    textTransform: 'capitalize',
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
  //   imagef: require('../../images/fr11.png'),
  // },
  // {
  //   id: 11,
  //   name: 'Wash',
  //   imagef: require('../../images/f11.png'),
  // },
];
