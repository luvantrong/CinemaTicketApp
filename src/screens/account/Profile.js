import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TextInput,
  Switch,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Picker} from '@react-native-picker/picker';

const Profile = props => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const [selectedLanguage, setSelectedLanguage] = useState();

  const goEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const goChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const goMyCard = () => {
    navigation.navigate('MyCards');
  };
  return (
    <View>
      <Image
        style={{marginStart: 20, marginTop: 20}}
        source={require('../../images/Arrow.png')}
      />
      <Text style={styles.text1}>Profile</Text>

      <TouchableOpacity onPress={goEditProfile} style={styles.viewItem}>
        <View style={styles.viewItem_1}>
          <Image
            style={{marginStart: 3}}
            source={require('../../images/animalEdit.png')}
          />
          <Text style={styles.textTitle}>Edit Profile</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={goChangePassword} style={styles.viewItem}>
        <View style={styles.viewItem_1}>
          <Image source={require('../../images/changePW.png')} />
          <Text style={styles.textTitle}>Change Password</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={goMyCard} style={styles.viewItem}>
        <View style={styles.viewItem_1}>
          <Image source={require('../../images/iconMyCart.png')} />
          <Text style={styles.textTitle}>My Card</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </TouchableOpacity>

      <Text
        style={[styles.text1, {textAlign: 'left', margin: 20, marginTop: 38}]}>
        App Settings
      </Text>

      <TouchableOpacity style={styles.viewItem}>
        <View style={styles.viewItem_1}>
          <Image
            style={{marginStart: 2}}
            source={require('../../images/thongbao.png')}
          />
          <Text style={styles.textTitle}>Notifications</Text>
        </View>
        <Switch
          value={isEnabled}
          trackColor={{false: '#906233', true: '#FF5E00'}}
          thumbColor={'white'}
          onValueChange={toggleSwitch}
        />
      </TouchableOpacity>

      <View style={[styles.viewItem, {paddingEnd: 0}]}>
        <View style={styles.viewItem_1}>
          <Image source={require('../../images/laguage.png')} />
          <Text style={styles.textTitle}>Language</Text>
        </View>
        <Picker
          mode="dropdown"
          style={{width: '40%'}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Vietnamese" value="Vietnamese" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.viewItem}>
        <View style={styles.viewItem_1}>
          <Image source={require('../../images/logout.png')} />
          <Text style={styles.textTitle}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text1: {
    color: '#FF5E00',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },

  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
  },

  viewItem_1: {
    flexDirection: 'row',
  },

  textTitle: {
    color: '#804F1E',
    fontSize: 18,
    fontWeight: '700',
    marginStart: 10,
  },
});
