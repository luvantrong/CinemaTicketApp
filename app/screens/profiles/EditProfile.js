import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useState, useCallback, useContext, useEffect } from "react";
import { AccountContext } from "../../context/AccountContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const EditProfile = (props) => {
  const { navigation } = props;
  const { dataAccount, setDataAccount } = useContext(AccountContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setName(dataAccount.name);
    setAddress(dataAccount.address);
    setPhone(dataAccount.phone);
    dataAccount.avatar === "" ? setAvatar(null) : setAvatar(dataAccount.avatar);
  }, [dataAccount]);

  const [showPass, setshowPass] = useState(true);
  const togglePass = () => {
    setshowPass(!showPass);
  };

  const id = dataAccount._id;

  const handleChoosePhoto = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: "photo",
      includeBase64: false,
      includeExtra: true,
    };
    //const result =  launchCamera(options, ...);
    const result = launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log("Cancel pick image");
      } else if (response.error) {
        console.log("image picker error: ", response.error);
      } else if (response.customButton) {
        console.log("tap button: ", response.customButton);
      } else {
        response = response.assets[0];
        const formData = new FormData();
        formData.append("image", {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
        const fetchData = async () => {
          let url = `${config.CONSTANTS.IP}api/account/upload-image-test`;
          const response = await fetch(url, {
            Accept: "application/json",
            method: "POST",
            headers: {
              // Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            body: formData,
          });
          const res = await response.json();
          return res;
        };
        const res = await fetchData();
        console.log(res);
        setAvatar(res.link);
        console.log(res.link);
      }
    });
  }, []);

  const handleUpdate = async () => {
    let data = { id, name, address, phone, avatar };
    const fetchData = async (data) => {
      let url = `${config.CONSTANTS.IP}api/account/update-account`;
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
      ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
      setDataAccount(res.account);
    } else {
      ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT);
    }
  };

  const update = () => {
    Alert.alert("Thông báo", "Bạn có muốn thay đổi thông tin cá nhân không?", [
      {
        text: "Huỷ",
        style: "cancel",
      },
      {
        text: "Đồng ý",
        onPress: handleUpdate,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Image source={require("../../images/back.png")}></Image>
          <Text style={styles.textHeader}>Edit Profile</Text>
        </View>
      </View>
      {/* <View style={styles.editImgProfile}>
        <Image
          style={styles.imgProfile}
          source={require("../../images/imgProfile.jpg")}
        ></Image>
      </View> */}
      <View style={styles.viewAvatar}>
        <Image style={styles.styleAvatar} source={{ uri: avatar }} />
        <Pressable onPress={handleChoosePhoto}>
          <Image
            style={styles.styleSelect}
            source={require("../../images/SelectAvatar.png")}
          />
        </Pressable>
      </View>

      <View style={styles.center}>
        <View>
          <TextInput
            placeholder="Name"
            placeholderTextColor={"white"}
            style={styles.editInputCenter}
            value={name}
            onChangeText={setName}
          ></TextInput>
          <Image
            style={styles.icon}
            source={require("../../images/user.png")}
          ></Image>
        </View>
        <View>
          <TextInput
            keyboardType="phone-pad"
            placeholder="Phone"
            placeholderTextColor={"white"}
            style={styles.editInputCenter}
            value={phone}
            onChangeText={setPhone}
          ></TextInput>
          <Image
            style={styles.icon}
            source={require("../../images/phone.png")}
          ></Image>
        </View>
        <View>
          <TextInput
            placeholder="Address"
            placeholderTextColor={"white"}
            style={styles.editInputCenter}
            value={address}
            onChangeText={setAddress}
          ></TextInput>
          <Image
            style={styles.icon}
            source={require("../../images/address.png")}
          ></Image>
          {/* <TouchableOpacity style={styles.eye} onPress={togglePass}>
                        {showPass ? (
                            <Image source={require('../../images/eyeoff.png')} style={styles.hidden}></Image>
                        ) : (
                            <Image source={require('../../images/eye.png')} style={styles.hidden}></Image>
                        )}
                    </TouchableOpacity> */}
        </View>

        <TouchableOpacity style={styles.btnEdit} onPress={update}>
          <Text style={styles.textEdit}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          Do you want to change your personal information?
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;

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
    width: "65%",
    fontSize: 20,
  },

  editImgProfile: {
    flex: 0.25,
    alignItems: "center",
  },

  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  center: {
    flex: 0.55,
  },

  editInputCenter: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
    position: "relative",
    marginHorizontal: 25,
    paddingLeft: 50,
    fontSize: 14,
    fontWeight: "bold",
    color: "yellow",
    borderColor: "#fff",
    marginTop: 15,
  },

  icon: {
    position: "absolute",
    top: 28,
    left: 40,
    tintColor: "orange",
    width: 24,
    height: 24,
  },

  eye: {
    position: "absolute",
    top: 33,
    right: 40,
  },

  hidden: {
    tintColor: "orange",
    width: 24,
    height: 24,
  },

  btnEdit: {
    backgroundColor: "orange",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 25,
    marginTop: 30,
  },

  textEdit: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  footer: {
    flex: 0.1,
  },

  textFooter: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginTop: 10,
  },
  viewAvatar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    flex: 0.25,
  },

  styleAvatar: {
    backgroundColor: "#EEF1F4",
    width: 140,
    height: 140,
    borderRadius: 100,
    borderColor: "#EEF1F4",
    borderWidth: 2,
  },

  styleSelect: {
    width: 30,
    height: 30,
    marginTop: -32,
    marginStart: 70,
  },
});
