import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const ItemMyCard = () => {
  return (
    <TouchableHighlight>
      <TouchableOpacity
        onPress={() => console.log('You touched me')}
        style={styles.container}>
        <View style={styles.view1}>
          <Image
            style={{marginEnd: 20}}
            source={require('./images/logoMastercart.png')}
          />
          <View style={{marginTop: 15}}>
            <Text style={styles.textCard}>My Card</Text>
            <Text style={styles.textIDCard}>5432 **** **** 6745</Text>
          </View>
        </View>
        <Image source={require('./images/arrRight.png')} />
      </TouchableOpacity>
    </TouchableHighlight>
  );
};

export default ItemMyCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 98,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#804F1E24',
  },

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textCard: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 13,
  },

  textIDCard: {
    color: '#6D3805',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 11,
  },
});
