import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";

const EventScreen = (props) => {
  const { data } = props?.route?.params;
  console.log(data);
  return (
    <View style={styles.container}>
      {/* toolbar */}
      <View style={styles.toolbar}>
        <View></View>
        <Image
          style={styles.tb_imgLogo}
          source={require("../../images/Logo.png")}
        />
        <Pressable>
          <Image
            style={styles.tb_imgAvatar}
            source={require("../../images/avatar.png")}
          />
        </Pressable>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{data.tenSuKien}</Text>
      </View>
      {/* banner */}
      <View style={styles.imgContainer}>
        <Image style={styles.imgStyle} source={{ uri: data.anhBiaSuKien }} />
      </View>
      {/* content */}
      <View style={styles.contentContainer}>
        <ScrollView>
          <Text style={styles.textContent}>{data.noiDungSuKien}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    flex: 1,
    backgroundColor: "#1A2232",
  },

  // toolbar
  toolbar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tb_imgLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginLeft: 20,
  },

  tb_imgAvatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  // banner
  imgContainer: {
    width: "100%",
    height: 200,
  },

  imgStyle: {
    width: Dimensions.get("screen").width - 40,
    height: "100%",
    resizeMode: "contain",
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
  },

  // content
  contentContainer: {
    width: Dimensions.get("screen").width - 30,
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    marginLeft: 15,
  },

  titleContainer: {
    width: Dimensions.get("screen").width - 30,
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
  },

  textTitle: {
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFFFF",
  },

  textContent: {
    fontFamily: "Helvetica Neue",
    fontSize: 16,
    fontWeight: "400",
    color: "#D7C0AE",
    marginTop: 20,
  },
});
