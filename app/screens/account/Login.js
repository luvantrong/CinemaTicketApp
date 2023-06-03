import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import { AccountContext } from "../../context/AccountContext";
import React, { useContext, useState, useEffect } from "react";
import config from "../../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const { navigation } = props;
  const { setIsLoggedIn, setDataAccount, rememberEmailRegister } =
    useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrowEmail, setShowErrowEmail] = useState("none");
  const [showErrowPW, setShowErrowPW] = useState("none");
  const [contentErrorEmail, setContentErrorEmail] = useState("");
  const [contentErrorPW, setContentErrorPW] = useState("");

  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const onChangeTextEmail = (text) => {
    if (!text) {
      setShowErrowEmail("flex");
      setContentErrorEmail("Không để trống email");
    } else if (!validateEmail(email)) {
      setShowErrowEmail("flex");
      setContentErrorEmail("Nhập chưa đúng định dạng email");
    } else {
      setShowErrowEmail("none");
      setContentErrorEmail("");
    }
    setEmail(text);
  };

  const onChangeTextPassword = (text) => {
    if (!text) {
      setShowErrowPW("flex");
      setContentErrorPW("Không để trống mật khẩu");
    } else {
      setShowErrowPW("none");
      setContentErrorPW("");
    }
    setPassword(text);
  };

  useEffect(() => {
    setEmail(rememberEmailRegister);
    return () => {};
  }, [rememberEmailRegister]);

  const handleLogin = async () => {
    let data = { email, password };
    const fetchData = async (data) => {
      let url = `${config.CONSTANTS.IP}api/account/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      return res;
    };
    const res = await fetchData(data);
    console.log(res);

    if (res.result) {
      setIsLoggedIn(true);
      setDataAccount(res.account);
      await AsyncStorage.setItem("token", res.token);
    } else {
      ToastAndroid.show(res.message, ToastAndroid.SHORT);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <ScrollView style={styles.Container}>
      <Pressable onPress={handleRegister}>
        <Text
          style={{
            textAlign: "right",
            color: "black",
            fontFamily: "Popins",
            marginRight: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>

      <View style={styles.ViewTextSignIn}>
        <Text style={styles.TextSignIn}>Sign In</Text>
      </View>
      <View style={styles.ViewTextInput}>
        <TextInput
          value={email}
          onChangeText={onChangeTextEmail}
          style={styles.TextInput}
          placeholder="Username"
        ></TextInput>
        <Text style={[styles.textError, { display: showErrowEmail }]}>
          {contentErrorEmail}
        </Text>
        <TextInput
          value={password}
          onChangeText={onChangeTextPassword}
          style={styles.TextInput}
          placeholder="Password"
        ></TextInput>
        <Text style={[styles.textError, { display: showErrowPW }]}>
          {contentErrorPW}
        </Text>
        <Text style={{ textAlign: "right", color: "black" }}>
          Forgot Password?
        </Text>
        <Pressable style={styles.Button} onPress={handleLogin}>
          <Text style={styles.TextButton}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.ButtonGoogle}>
          <Image
            source={require("../../images/ggicon.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
          <Text
            style={{
              margin: 20,
              fontWeight: "bold",
              fontSize: 17,
              color: "black",
            }}
          >
            Continue with Google
          </Text>
        </Pressable>
        <Pressable style={styles.ButtonGoogle}>
          <Image
            source={require("../../images/fbicon.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
          <Text
            style={{
              margin: 20,
              fontWeight: "bold",
              fontSize: 17,
              color: "black",
            }}
          >
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
    width: 350,
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
  ButtonGoogle: {
    height: 60,
    borderRadius: 30,
    width: 350,
    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    shadowOffset: { width: 1, height: 13 },
    paddingLeft: 30,
  },
});
