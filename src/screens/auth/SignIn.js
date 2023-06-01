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
import React, {useState, useContext} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import {UserContext} from '../../useContexts/UserContext';

import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../redux/actions';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

const SignIn = props => {
  const {navigation} = props;
  // const {setIsLoggedIn} = useContext(UserContext);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [imageCountry, setImageCountry] = useState(null);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  // const handleSignIn = () => {
  //   setIsLoggedIn(true);
  // };

  const handleSignInWithRedux = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.iconBack}
          source={require('../../images/Arrow.png')}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Sign In</Text>
        </View>

        <View style={styles.viewImg}>
          <Image
            style={styles.img2}
            source={require('../../images/imgsignin11.png')}
          />
        </View>

        <View style={{marginHorizontal: 18}}>
          <Text style={styles.textContent1}>
            Enter your phone number and{'\n'}password to access your account
          </Text>
        </View>

        <View style={styles.viewCountry}>
          <TextInput
            style={styles.styleTextInputName2}
            placeholder="Phone Number"
            placeholderTextColor={'#AC8E71'}
          />
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={styles.viewSeclecCountry}>
            {imageCountry === null ? (
              <Image source={require('../../images/sweden.png')} />
            ) : (
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                }}>
                {imageCountry}
              </Text>
            )}

            <Image source={require('../../images/down.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewPW}>
          <TextInput
            style={styles.styleTextInputName}
            placeholder="Password"
            placeholderTextColor={'#AC8E71'}
          />
          <Image
            style={styles.imgPW}
            source={require('../../images/ion_eye.png')}
          />
        </View>

        <Text style={styles.textForgot}>Forgote Password</Text>

        <Pressable onPress={handleSignInWithRedux} style={styles.stylePress}>
          <Text style={styles.textPress1}>Sign In</Text>
        </Pressable>

        <Pressable onPress={handleSignInWithRedux} style={styles.stylePress}>
          <Text style={styles.textPress1}>Sign In with Google</Text>
        </Pressable>

        <Pressable onPress={handleSignUp} style={styles.viewEnd}>
          <Text style={styles.textEnd}>Don't have a account?</Text>
          <Text style={[styles.textEnd, {color: '#FF5E00'}]}> Sign Up</Text>
        </Pressable>

        <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={item => {
            setCountryCode(item.dial_code);
            setImageCountry(item.flag);
            console.log(item.flag);
            setShow(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
    marginTop: -70,
    alignItems: 'center',
    marginBottom: -40,
  },

  textContent1: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 0.41,
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

  styleInputOTP: {
    borderBottomWidth: 3,
    width: '15%',
    borderBottomColor: '#7F4E1D',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },

  viewOTP: {
    marginTop: 5,
    flexDirection: 'row',
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  styleTextInputName: {
    borderWidth: 1,
    marginHorizontal: 16,
    backgroundColor: '#F9F9F9',
    borderColor: '#F9F9F9',
    paddingHorizontal: 27,
    color: '#AC8E71',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 5,
    height: 48,
    marginBottom: 5,
  },

  styleTextInputName2: {
    borderWidth: 1,
    marginHorizontal: 16,
    backgroundColor: '#F9F9F9',
    borderColor: '#F9F9F9',
    paddingStart: 87,
    paddingEnd: 27,
    color: '#AC8E71',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 5,
    height: 48,
    marginBottom: 15,
  },

  viewCountry: {
    position: 'relative',
    marginTop: 15,
  },

  viewSeclecCountry: {
    width: '20%',
    height: 48,
    position: 'absolute',
    marginStart: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 13,
    justifyContent: 'space-between',
  },

  viewPW: {
    position: 'relative',
  },

  imgPW: {
    position: 'absolute',
    top: 13,
    right: 32,
  },

  textForgot: {
    color: '#FF5E00',
    marginEnd: 23,
    textAlign: 'right',
    fontWeight: '400',
    marginBottom: 10,
  },

  viewEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  textEnd: {
    color: '#7F4E1D',
    fontSize: 16,
  },
});
