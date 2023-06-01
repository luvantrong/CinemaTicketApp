import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Animated,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

const Account = props => {
  const {navigation} = props;

  const goProfile = () => {
    navigation.navigate('Profile');
  };

  const goOrders = () => {
    navigation.navigate('Orderss');
  };

  const goAddress = () => {
    navigation.navigate('Address');
  };

  const goPayment = () => {
    navigation.navigate('Payment');
  };
  return (
    <View>
      <Image
        style={{marginStart: 20, marginTop: 20}}
        source={require('../../images/Arrow.png')}
      />
      <Text style={styles.textTitle}>Account</Text>

      <TouchableOpacity onPress={goProfile} style={styles.viewContent}>
        <Image
          style={{marginEnd: 7, marginStart: 2}}
          source={require('../../images/icontAccount.png')}
        />
        <Text style={styles.textName}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goOrders} style={styles.viewContent}>
        <Image source={require('../../images/iconOder.png')} />
        <Text style={styles.textName}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goAddress} style={styles.viewContent}>
        <Image
          style={{marginEnd: 5, marginStart: 2}}
          source={require('../../images/iconAdress.png')}
        />
        <Text style={styles.textName}>Address</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goPayment} style={styles.viewContent}>
        <Image source={require('../../images/iconpayment.png')} />
        <Text style={[styles.textName, {marginTop: -15, marginStart: 15}]}>
          Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    textAlign: 'center',
    marginBottom: 30,
  },

  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 21,
    marginTop: 15,
    marginBottom: 15,
  },

  textName: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
    marginStart: 20,
  },
});
