import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const ItemHistory = props => {
  const {data} = props;
  const {maDon, trangThai, ngay, gia} = data;
  console.log(maDon + ' ' + trangThai + ' ' + ngay + ' ' + gia);
  const [showTrangThai, setShowTrangThai] = useState('#5EC401');
  const [contentTrangThai, setContentTrangThai] = useState('Delivered'); //'#F2110D'

  useEffect(() => {
    if (trangThai == false) {
      setContentTrangThai('Cancelled');
      setShowTrangThai('#F2110D');
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('../../images/iconHistoryitem.png')} />
        <View style={{marginStart: 20}}>
          <Text style={styles.textMaDon}>Order #{maDon}</Text>
          <Text style={[styles.textTrangThai, {color: showTrangThai}]}>
            {contentTrangThai}
          </Text>
          <Text style={styles.textNgay}>{ngay}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrive}>${gia}</Text>
      </View>
    </View>
  );
};

export default ItemHistory;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 98,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textMaDon: {
    color: '#804F1E',
    fontSize: 18,
    fontWeight: '700',
  },

  textTrangThai: {
    color: '#804F1E',
    fontSize: 14,
    fontWeight: '400',
  },

  textNgay: {
    color: '#804F1E',
    fontSize: 14,
    fontWeight: '400',
  },

  textPrive: {
    color: '#F37A20',
    fontSize: 20,
    fontWeight: '700',
  },
});
