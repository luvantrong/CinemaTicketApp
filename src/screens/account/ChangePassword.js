import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';

const ChangePassword = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={styles.iconBack}
          source={require('../../images/Arrow.png')}
        />
        <Text style={styles.textTitle}>Change Password</Text>
      </View>
      <View style={styles.view2}>
        <View style={[styles.viewTextInput, {marginTop: 40, marginBottom: 40}]}>
          <TextInput
            style={styles.styleTextInputName}
            placeholder="Old Password"
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
            placeholder="New Password"
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
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.stylePress}>
          <Text style={styles.textPress1}>Confirm</Text>
        </Pressable>

        <Pressable style={styles.stylePress1}>
          <Text style={styles.textPress2}>Back To Sign In</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },

  view1: {
    flex: 0.1,
  },

  view2: {
    flex: 0.7,
  },

  view3: {
    flex: 0.2,
    margin: 16,
    marginBottom: 30,
  },

  iconBack: {
    marginTop: 20,
    marginStart: 20,
  },

  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    textAlign: 'center',
    marginBottom: 50,
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
