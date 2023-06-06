import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "../../context/AccountContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profiles = (props) => {
  const { navigation } = props;
  const [isEnabledNotification, setIsEnabledNotifications] = useState(true);
  const [isEnabledDarkMode, setIsEnabledDarkMode] = useState(true);
  const { dataAccount, setIsLoggedIn, setDataAccount } =
    useContext(AccountContext);
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    dataAccount.avatar === "" ? setAvatar(null) : setAvatar(dataAccount.avatar);
  }, [dataAccount]);

  console.log(dataAccount._id);

  const handleChangePassword = () => {
    navigation.navigate("ChangePass");
  };

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const handleLogout = async () => {
    Alert.alert("Thông báo", "Bạn có chắc chắn muốn đăng xuất không?", [
      {
        text: "Huỷ",
        // onPress: () => console.log('Cancel Pressed'),
        style: "cancel",
      },
      {
        text: "Đăng xuất",
        onPress: async () => {
          ToastAndroid.show("Đăng xuất thành công", ToastAndroid.SHORT);
          // navigation.navigate("Home");
          await AsyncStorage.removeItem("token");
          setDataAccount("");
          setIsLoggedIn(false);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Image source={require("../../images/back.png")}></Image>
          <Text style={styles.textHeader}>Profile</Text>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.contentCenter}>
          <Image style={styles.imgProfile} source={{ uri: avatar }}></Image>
        </View>
        <View style={styles.introduceCenter}>
          <Text style={styles.textCenterTitle}>{dataAccount.name}</Text>
          <Text style={styles.textCenterAddress}>{dataAccount.email}</Text>
        </View>
        <TouchableOpacity style={styles.btnEdit} onPress={handleEditProfile}>
          <Text style={styles.textEdit}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.content}>
        <Pressable
          style={styles.contentFunction}
          onPress={handleChangePassword}
        >
          <Image
            style={styles.contentFunctionImage}
            source={require("../../images/key.png")}
          ></Image>
          <Text style={styles.textFunction}>Change Password</Text>
        </Pressable>
        <Image
          style={styles.imgBack}
          source={require("../../images/backarrow1.png")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.contentFunction}>
          <Image
            style={styles.contentFunctionImage}
            source={require("../../images/cart.png")}
          ></Image>
          <Text style={styles.textFunction}>My Cards</Text>
        </View>
        <Image
          style={styles.imgBack}
          source={require("../../images/backarrow1.png")}
        ></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.content}>
        <View style={styles.contentFunction}>
          <Image
            style={styles.contentFunctionImage}
            source={require("../../images/bell.png")}
          ></Image>
          <Text style={styles.textFunction}>Notifications</Text>
        </View>
        <Switch
          trackColor={{ false: "grey", true: "orange" }}
          thumbColor={isEnabledNotification ? "#f4f3f4" : "#f4f3f4"}
          value={isEnabledNotification}
          onValueChange={setIsEnabledNotifications}
        ></Switch>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.content}>
          <View style={styles.contentFunction}>
            <Image
              style={styles.contentFunctionImage}
              source={require("../../images/moon.png")}
            ></Image>
            <Text style={styles.textFunction}>Dark Mode</Text>
          </View>
          <Switch
            trackColor={{ false: "grey", true: "orange" }}
            thumbColor={isEnabledDarkMode ? "#f4f3f4" : "#f4f3f4"}
            value={isEnabledDarkMode}
            onValueChange={setIsEnabledDarkMode}
          ></Switch>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.content, { marginTop: 35 }]}
          onPress={handleLogout}
        >
          <View style={styles.contentFunction}>
            <Image
              style={styles.contentFunctionImage}
              source={require("../../images/logout.png")}
            ></Image>
            <Text style={styles.textFunction}>Logout</Text>
          </View>
          <Image
            style={styles.imgBack}
            source={require("../../images/backarrow1.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profiles;
// 1A2232 màu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2232",
  },

  header: {
    flex: 0.1,
    marginTop: 20,
    marginLeft: 20,
  },

  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textHeader: {
    color: "white",
    width: "60%",
    fontSize: 20,
  },

  center: {
    flex: 0.45,
    alignItems: "center",
  },

  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  introduceCenter: {},

  textCenterTitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },

  textCenterAddress: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },

  btnEdit: {
    backgroundColor: "orange",
    borderRadius: 30,
    marginTop: 14,
  },

  textEdit: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 50,
    marginVertical: 8,
  },

  content: {
    flex: 0.05,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 15,
  },

  contentFunction: {
    flexDirection: "row",
  },

  contentFunctionImage: {
    width: 20,
    height: 20,
    tintColor: "orange",
  },

  textFunction: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },

  imgBack: {
    tintColor: "orange",
  },

  footer: {
    flex: 0.2,
    marginTop: 15,
    justifyContent: "center",
  },
});
