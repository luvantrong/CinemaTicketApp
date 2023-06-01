import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';

export default function Register() {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.ViewTextSignIn}>
        <Text style={styles.TextSignIn}>Sign Up</Text>
      </View>
      <View style={styles.ViewTextInput}>
        <TextInput style={styles.TextInput} placeholder="Username"></TextInput>
        <TextInput style={styles.TextInput} placeholder="Password"></TextInput>
        <Pressable style={styles.Button}>
          <Text style={styles.TextButton}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
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
});
