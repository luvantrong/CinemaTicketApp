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
import {Picker} from '@react-native-picker/picker';
import {SelectList} from 'react-native-dropdown-select-list';

const dataCity = [
  {key: '1', value: 'Goteborg'},
  {key: '2', value: 'Kungsbacka'},
];

const dataHome = [
  {key: '1', value: 'Home'},
  {key: '2', value: 'City'},
];

const EditAddress = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedLanguage1, setSelectedLanguage1] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={{marginStart: 20, marginTop: 20}}
          source={require('../../images/Arrow.png')}
        />
        <Text style={styles.text1}>Edit Addresses</Text>
      </View>
      <View style={styles.view2}>
        <SelectList
          setSelected={val => setSelectedLanguage(val)}
          data={dataHome}
          save="value"
          boxStyles={{
            marginHorizontal: 16,
            borderRadius: 5,
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            height: 48,
            // marginBottom: 20,
          }}
          dropdownStyles={{
            marginHorizontal: 16,
            borderRadius: 5,
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            marginBottom: 20,
            paddingStart: 7,
          }}
          inputStyles={{
            color: '#AC8E71',
            fontSize: 16,
            fontWeight: '400',
            paddingStart: 7,
          }}
          dropdownTextStyles={{
            color: '#AC8E71',
            fontSize: 16,
            fontWeight: '400',
          }}
        />

        <TextInput
          style={styles.styleTextInputName}
          placeholder="mati egh"
          placeholderTextColor={'#AC8E71'}
        />

        <SelectList
          setSelected={val => setSelectedLanguage(val)}
          data={dataCity}
          save="value"
          boxStyles={{
            marginHorizontal: 16,
            borderRadius: 5,
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            height: 48,
            // marginBottom: 20,
          }}
          dropdownStyles={{
            marginHorizontal: 16,
            borderRadius: 5,
            backgroundColor: '#F9F9F9',
            borderColor: '#F9F9F9',
            marginBottom: 20,
          }}
          inputStyles={{
            color: '#AC8E71',
            fontSize: 16,
            fontWeight: '400',
            paddingStart: 7,
          }}
          dropdownTextStyles={{
            color: '#AC8E71',
            fontSize: 16,
            fontWeight: '400',
            paddingStart: 7,
          }}
        />

        <TextInput
          style={styles.styleTextInputName}
          placeholder="mati egh"
          placeholderTextColor={'#AC8E71'}
        />
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.stylePress}>
          <Text style={styles.textPress1}>Update Address</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view1: {
    flex: 0.1,
    marginBottom: 50,
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
    marginBottom: 20,
    marginTop: 20,
  },

  styleTextInputName1: {
    borderWidth: 1,
    marginHorizontal: 16,
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
    paddingHorizontal: 10,
    color: '#AC8E71',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    marginBottom: 20,
  },

  styleTextInputName2: {
    borderWidth: 1,
    marginHorizontal: 16,
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
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
