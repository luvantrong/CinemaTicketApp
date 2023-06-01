import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';

const EditProfile = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [imageCountry, setImageCountry] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={{marginStart: 20, marginTop: 20}}
          source={require('../../images/Arrow.png')}
        />
        <Text style={styles.text1}>Edit Profile</Text>
      </View>
      <View style={styles.view2}>
        <TextInput
          style={styles.styleTextInputName}
          placeholder="mati egh"
          placeholderTextColor={'#AC8E71'}
        />

        <View style={styles.viewCountry}>
          <TextInput
            style={styles.styleTextInputName2}
            placeholder="+46 707 07 07"
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
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.stylePress}>
          <Text style={styles.textPress1}>Update Profile</Text>
        </Pressable>
      </View>
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
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view1: {
    flex: 0.1,
  },

  view2: {
    flex: 0.75,
  },

  view3: {
    flex: 0.15,
  },

  text1: {
    color: '#FF5E00',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
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
    marginTop: 60,
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

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
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
