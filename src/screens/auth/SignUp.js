import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import PhoneInput from 'react-native-phone-number-input';

const SignUp = props => {
  const {navigation} = props;

  const handelNext = () => {
    navigation.navigate('SignupPassword');
  };

  const handelBackLogin = () => {
    navigation.navigate('SignIn');
  };
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [imageCountry, setImageCountry] = useState(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  return (
    <ScrollView>
      <TouchableOpacity style={styles.iconBack}>
        <Image source={require('../../images/Arrow.png')} />
      </TouchableOpacity>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Sign Up</Text>
      </View>
      <View style={styles.viewIMG}>
        <Image source={require('../../images/imgsignup1.png')} />
      </View>
      <TextInput
        style={styles.styleTextInputName}
        placeholder="Name Surname"
        placeholderTextColor={'#AC8E71'}
      />

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
      {/* <PhoneInput
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        containerStyle={{
          width: '92%',
          marginHorizontal: 16,
          backgroundColor: '#F9F9F9',
          borderRadius: 5,
          // height: 48,
        }}
        textContainerStyle={{
          backgroundColor: '#F9F9F9',
          borderRadius: 5,
          // height: 48,
          color: '#AC8E71',
          marginStart: -15,
        }}
        textInputProps={{color: '#AC8E71', placeholderTextColor: '#AC8E71'}}
        codeTextStyle={{display: 'none'}}
      /> */}

      <Text style={styles.textContent}>
        We need to verify you. We will send you a{'\n'}one time verification
        code.{' '}
      </Text>

      <Pressable onPress={handelNext} style={styles.stylePress}>
        <Text style={styles.textPress1}>Next</Text>
      </Pressable>

      <Pressable onPress={handelBackLogin} style={styles.viewEnd}>
        <Text style={styles.textEnd}>Already have an account?</Text>
        <Text style={[styles.textEnd, {color: '#FF5E00'}]}> Login</Text>
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
  );
};

export default SignUp;

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

  viewIMG: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: -20,
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
    marginBottom: 15,
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

  textContent: {
    color: '#7F4E1D',
    fontSize: 16,
    fontWeight: '400',
    marginStart: 25,
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
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
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
