import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useContext, useState } from "react";
import config from "../../config/config";
import { AccountContext } from "../../context/AccountContext";

const Register = (props) => {
  const { navigation } = props;
  const { setRememberEmailRegister } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async () => {
    let data = { email, password, name };
    const fetchData = async (data) => {
      let url = `${config.CONSTANTS.IP}api/account/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      return res;
    };
    const res = await fetchData(data);
    console.log(res);
    if (res.result) {
      ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
      setRememberEmailRegister(email);
      navigation.navigate("Login");
    } else {
      const mes = res.message;
      ToastAndroid.show(mes, ToastAndroid.SHORT);
    }
  };
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.ViewTextSignIn}>
        <Text style={styles.TextSignIn}>Sign Up</Text>
      </View>
      <View style={styles.ViewTextInput}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Verifi Password"
          value={rePassword}
          onChangeText={setRePassword}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        ></TextInput>
        <Pressable style={styles.Button} onPress={handleRegister}>
          <Text style={styles.TextButton}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "pink",
  },
  ViewTextSignIn: {
    paddingTop: 50,
    paddingBottom: 80,
    paddingLeft: 20,
  },
  TextSignIn: {
    fontFamily: "Popins",
    color: "black",
    fontWeight: "700",
    fontSize: 30,
  },
  ViewTextInput: {
    backgroundColor: "white",
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
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Popins",
    fontSize: 15,
    paddingLeft: 30,
    fontWeight: "bold",
  },
  Button: {
    height: 60,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
  },
  TextButton: {
    fontSize: 20,
    color: "white",
    fontFamily: "Popins",
    fontWeight: "bold",
  },
});
