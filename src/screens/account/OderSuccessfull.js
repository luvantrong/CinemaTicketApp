import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

const OderSuccessfull = props => {
  const {navigation} = props;

  const handelTrackOder = () => {};

  const handelBackHome = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.viewImgTop}>
        <Image source={require('./images/imgOderOK.png')} />
      </View>

      <View style={styles.viewImgTop}>
        <Text style={styles.textWelcome}>Your Order Has Been Accepted</Text>
        <View style={styles.viewTextWelcome2}>
          <Text style={styles.textWelcome2}>
            We’ve accepted your order, and we’re
          </Text>
          <Text style={styles.textWelcome2}>getting it ready.</Text>
        </View>
      </View>

      <Pressable onPress={handelTrackOder} style={styles.stylePress}>
        <Text style={styles.textPress1}>Track Order</Text>
      </Pressable>

      <Pressable onPress={handelBackHome} style={styles.stylePress1}>
        <Text style={styles.textPress2}>Back Home</Text>
      </Pressable>
    </View>
  );
};

export default OderSuccessfull;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },

  viewImgTop: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 30,
  },

  textWelcome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7F4E1D',
  },

  viewTextWelcome2: {
    alignItems: 'center',
    marginTop: 16,
  },

  textWelcome2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7F4E1D',
  },

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  stylePress1: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 16,
    borderColor: '#FF5E00',
  },

  textPress2: {
    color: '#FF5E00',
    fontSize: 17,
    fontWeight: '700',
  },
});
