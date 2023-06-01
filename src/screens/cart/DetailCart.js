import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ItemPopularDeals from '../item/ItemPopularDeals';
import InputSpinner from 'react-native-input-spinner';

const DetailCart = () => {
  const [numeric, setNumeric] = useState(0);

  const handleAddtoCart = () => {
    console.log(numeric);
  };

  return (
    <ScrollView>
      <View style={styles.view1}>
        <Image
          style={styles.imgv1}
          source={require('../../images/Arrow.png')}
        />
        <Image
          style={styles.imgv2}
          source={require('../../images/imgdtcart.png')}
        />
      </View>
      <View style={styles.imgMango}>
        <Image source={require('../../images/imgmango.png')} />
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.textName}>Orginal Mango</Text>
        <View style={styles.viewPrice}>
          <Text style={styles.textPrice1}>$3.00</Text>
          <Text style={styles.textPrice2}>/st</Text>
        </View>
        <Text style={styles.textContent}>
          Golden Ripe Alphonsa mangoes delivered to your house in the most
          hygenic way ever... Best for eating plain but can also be made into
          shakes and cakes.
        </Text>
        <View style={styles.containerNumeri}>
          <InputSpinner
            style={{
              width: '85%',
              backgroundColor: '#DCDCDC',
              borderColor: '#F9F9F9',
              borderWidth: 1,
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 30,
            }}
            buttonStyle={{backgroundColor: '#F9F9F9'}}
            buttonFontSize={45}
            buttonLeftImage={
              <Image source={require('../../images/dautru.png')} />
            }
            buttonRightImage={
              <Image source={require('../../images/daucong.png')} />
            }
            shadow={true}
            textColor={'#6D3805'}
            fontSize={25}
            min={0}
            step={1}
            color={'white'}
            // colorMax={'#F5F5F5'}
            // colorMin={'#F5F5F5'}
            colorPressed={'#F5F5F5'}
            value={numeric}
            onChange={num => {
              setNumeric(num);
            }}
            // onDecrease={() => {
            //   setNumeric(numeric - 1);
            // }}
            // onIncrease={() => {
            //   setNumeric(numeric + 1);
            // }}
          />
          <Image source={require('../../images/iconheart.png')} />
        </View>
        <Pressable onPress={handleAddtoCart} style={styles.stylePress}>
          <Text style={styles.textPress1}>Add to cart</Text>
        </Pressable>
      </View>

      <Text style={styles.textFlat}>You may also need</Text>

      <FlatList
        style={{marginStart: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => <ItemPopularDeals data={item} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default DetailCart;

const styles = StyleSheet.create({
  view1: {
    position: 'relative',
  },

  imgv1: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  imgv2: {
    marginLeft: 185,
    marginTop: -30,
  },

  imgMango: {
    alignItems: 'center',
    marginTop: -10,
  },

  viewPrice: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },

  textName: {
    color: '#6D3805',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 106,
    marginHorizontal: 16,
  },

  containerContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },

  textPrice1: {
    color: '#6D3805',
    fontSize: 24,
    fontWeight: '400',
  },

  textPrice2: {
    color: '#6D3805',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 6,
    marginStart: 8,
  },

  textContent: {
    color: '#6D3805',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    marginHorizontal: 16,
  },

  containerNumeri: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 16,
  },

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
    marginHorizontal: 16,
    marginBottom: 50,
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  textFlat: {
    color: '#6D3805',
    marginStart: 16,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 40,
  },
});

const data = [
  {
    id: 1,
    title: 'Mango1',
  },
  {
    id: 2,
    title: 'Mango',
  },
  {
    id: 4,
    title: 'Mango4',
  },
  {
    id: 5,
    title: 'Mango7',
  },
  {
    id: 6,
    title: 'Mango5',
  },
  {
    id: 7,
    title: 'Mango2',
  },
];
