import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {AccountContext} from '../../context/AccountContext';
import React, {useContext} from 'react';

const Login = props => {
  const {navigation} = props;
  const {setIsLoggedIn} = useContext(AccountContext);

  const handleLogin = async () => {
    setIsLoggedIn(true);
  };
  return (
    <ScrollView style={styles.Container}>
      <Text
        style={{
          textAlign: 'right',
          color: 'black',
          fontFamily: 'Popins',
          marginRight: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
        Register
      </Text>
      <View style={styles.ViewTextSignIn}>
        <Text style={styles.TextSignIn}>Sign In</Text>
      </View>
      <View style={styles.ViewTextInput}>
        <TextInput style={styles.TextInput} placeholder="Username"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Password"></TextInput>
        <Text style={{textAlign: 'right', color: 'black'}}>
          Forgot Password?
        </Text>
        <Pressable style={styles.Button} onPress={handleLogin}>
          <Text style={styles.TextButton}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.ButtonGoogle}>
          <Image
            source={require('../../images/ggicon.png')}
            style={{width: 30, height: 30}}></Image>
          <Text
            style={{
              margin: 20,
              fontWeight: 'bold',
              fontSize: 17,
              color: 'black',
            }}>
            Continue with Google
          </Text>
        </Pressable>
        <Pressable style={styles.ButtonGoogle}>
          <Image
            source={require('../../images/fbicon.png')}
            style={{width: 30, height: 30}}></Image>
          <Text
            style={{
              margin: 20,
              fontWeight: 'bold',
              fontSize: 17,
              color: 'black',
            }}>
            Continue with Facebook
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  ViewTextSignIn: {
    paddingTop: 50,
    paddingBottom: 80,
    paddingLeft: 20,
  },
  TextSignIn: {
    fontFamily: 'Popins',
    color: 'black',
    fontWeight: '700',
    fontSize: 30,
  },
  ViewTextInput: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -40,
    paddingTop: 30,
    height: 600,
  },
  TextInput: {
    height: 60,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Popins',
    fontSize: 15,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  Button: {
    height: 60,
    borderRadius: 30,
    width: 350,
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  TextButton: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Popins',
    fontWeight: 'bold',
  },
  ButtonGoogle: {
    height: 60,
    borderRadius: 30,
    width: 350,
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 13},
    paddingLeft: 30,
  },
});
