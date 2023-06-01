import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import ItemHistory from '../../screens/item/ItemHistory';

const History = props => {
  return (
    <View style={{marginTop: 20}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <ItemHistory data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});

const data = [
  {
    id: 1,
    maDon: 345,
    trangThai: true,
    ngay: 'October 26, 2014',
    gia: 700,
  },
  {
    id: 2,
    maDon: 346,
    trangThai: false,
    ngay: 'October 14, 2016',
    gia: 452,
  },
  {
    id: 3,
    maDon: 347,
    trangThai: true,
    ngay: 'July 26, 2017',
    gia: 281,
  },
];
