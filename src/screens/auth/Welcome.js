import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const Welcome = props => {
  const {navigation} = props;

  const handelSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handelSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImgTop}>
        <Image source={require('../../images/imgwelcom1.png')} />
      </View>

      <View style={styles.viewImgTop}>
        <Text style={styles.textWelcome}>Realax and Shop</Text>
        <View style={styles.viewTextWelcome2}>
          <Text style={styles.textWelcome2}>Shop online and get grocories</Text>
          <Text style={styles.textWelcome2}>
            delivered from stores to your home
          </Text>
          <Text style={styles.textWelcome2}>in as fast as 1 hour.</Text>
        </View>
      </View>

      <Pressable onPress={handelSignUp} style={styles.stylePress}>
        <Text style={styles.textPress1}>Sign up</Text>
      </Pressable>

      <Pressable onPress={handelSignIn} style={styles.stylePress1}>
        <Text style={styles.textPress2}>Sign in</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },

  viewImgTop: {
    alignItems: 'center',
    marginTop: 32,
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
