import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';

const NewCard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={{marginTop: 20, marginStart: 4}}
          source={require('../../images/Arrow.png')}
        />
        <Text style={styles.textTitle}>New Card</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textName}>Card number</Text>
        <TextInput
          style={styles.styleTextInputName}
          placeholder="xxxx xxxx xxxx xxxx"
          placeholderTextColor={'#AC8E71'}
        />

        <Text style={styles.textName}>Expiry Date</Text>
        <TextInput
          style={styles.styleTextInputName}
          placeholder="MM/YY"
          placeholderTextColor={'#AC8E71'}
        />

        <Text style={styles.textName}>CCV</Text>
        <TextInput
          style={styles.styleTextInputName}
          placeholder="****"
          placeholderTextColor={'#AC8E71'}
        />
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.stylePress}>
          <Text style={styles.textPress1}>Add Card</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 20,
  },

  view1: {
    flex: 0.1,
  },

  view2: {
    flex: 0.75,
    marginTop: 40,
  },

  view3: {
    flex: 0.15,
  },

  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    marginStart: 14.25,
    textAlign: 'center',
  },

  styleTextInputName: {
    borderWidth: 1,
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

  textName: {
    color: '#6D3805',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
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
    fontSize: 20,
    fontWeight: '700',
  },
});
