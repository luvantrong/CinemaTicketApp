import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const SignupPassword = props => {
  const {navigation} = props;

  const handelNext = () => {
    navigation.navigate('SignupOTP');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.iconBack}
          source={require('../../images/Arrow.png')}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Sign Up</Text>
        </View>

        <View style={styles.viewImg}>
          <Image
            style={styles.img1}
            source={require('../../images/imgsignup4.png')}
          />
          <Image
            style={styles.img2}
            source={require('../../images/imgsignup3.png')}
          />
        </View>

        <View style={{marginHorizontal: 18}}>
          <Text style={styles.textContent1}>Enter the password</Text>
          <Text style={styles.textContent2}>
            For the security & safety please choose a password
          </Text>
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.styleTextInputName}
            placeholder="Password"
            placeholderTextColor={'#AC8E71'}
          />
          <Image
            style={styles.icon2}
            source={require('../../images/eyeee.png')}
          />
          <Image
            style={styles.icon1}
            source={require('../../images/lock.png')}
          />
        </View>

        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.styleTextInputName}
            placeholder="Confirm Password"
            placeholderTextColor={'#AC8E71'}
          />
          <Image
            style={styles.icon2}
            source={require('../../images/eyeee.png')}
          />
          <Image
            style={styles.icon1}
            source={require('../../images/lock.png')}
          />
        </View>

        <Pressable onPress={handelNext} style={styles.stylePress}>
          <Text style={styles.textPress1}>Next</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPassword;

const styles = StyleSheet.create({
  iconBack: {
    marginStart: 20,
    marginTop: 20,
  },

  viewTitle: {
    alignItems: 'center',
  },

  textTitle: {
    color: '#FF5E00',
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.41,
  },

  viewImg: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
    height: 300,
  },

  img2: {
    position: 'absolute',
    top: 40,
  },

  textContent1: {
    color: '#7F4E1D',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },

  textContent2: {
    color: '#7F4E1D',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 15,
    marginBottom: 20,
  },

  styleTextInputName: {
    borderWidth: 1,
    marginHorizontal: 16,
    backgroundColor: '#F9F9F9',
    borderColor: '#F9F9F9',
    paddingEnd: 15,
    paddingStart: 46,
    color: '#AC8E71',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 5,
    height: 48,
    marginBottom: 15,
  },

  viewTextInput: {
    position: 'relative',
  },

  icon1: {
    position: 'absolute',
    top: 15,
    left: 30,
  },
  icon2: {
    position: 'absolute',
    top: 15,
    right: 30,
  },

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
    marginHorizontal: 16,
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
