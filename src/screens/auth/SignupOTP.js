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
import OTPInputView from '@twotalltotems/react-native-otp-input';

const SignupOTP = props => {
  const {navigation} = props;

  const handelSignIn = () => {
    navigation.navigate('SignIn');
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
            source={require('../../images/signup12.png')}
          />
        </View>

        <View style={{marginHorizontal: 18}}>
          <Text style={styles.textContent1}>Enter Verification Code</Text>
          <Text style={styles.textContent2}>
            We have sent SMS to:{'\n'}046 XXX XX XX
          </Text>
        </View>

        <View style={styles.viewOTP}>
          <OTPInputView
            style={{width: '100%', height: 50}}
            pinCount={5}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>

        <Pressable onPress={handelSignIn} style={styles.stylePress}>
          <Text style={styles.textPress1}>Sign Up</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupOTP;

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

  viewOTP: {
    marginTop: 40,
    marginHorizontal: 24,
    marginBottom: 50,
  },

  borderStyleBase: {
    width: 50,
    height: 50,
  },

  borderStyleHighLighted: {
    borderColor: '#7F4E1D',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: '#7F4E1D',
    color: '#7F4E1D',
    fontSize: 20,
    fontWeight: '700',
  },

  underlineStyleHighLighted: {
    borderColor: '#7F4E1D',
  },
});
