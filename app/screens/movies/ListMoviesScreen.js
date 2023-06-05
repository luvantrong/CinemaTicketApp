import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ItemMoreMovies from "./Item/ItemMoreMovies";

const ListMoviesScreen = (props) => {
  const { navigation } = props;
  const listMovies = [
    {
      _id: 1,
      image: require("../../images/poster1.jpg"),
      name: "Spider-man 1",
      type: "Action",
      point: 8.0,
    },
    {
      _id: 2,
      image: require("../../images/poster2.jpg"),
      name: "Spider-man 2",
      type: "Action",
      point: 8.5,
    },
    {
      _id: 3,
      image: require("../../images/poster3.jpg"),
      name: "Spider-man 3",
      type: "Action",
      point: 6.0,
    },
    {
      _id: 4,
      image: require("../../images/poster4.jpg"),
      name: "Tấm vé định mệnh",
      type: "Action",
      point: 7.1,
    },
    {
      _id: 5,
      image: require("../../images/poster1.jpg"),
      name: "Tấm vé định mệnh",
      type: "Action",
      point: 7.1,
    },
    {
      _id: 6,
      image: require("../../images/poster2.jpg"),
      name: "Tấm vé định mệnh",
      type: "Action",
      point: 7.1,
    },
    {
      _id: 7,
      image: require("../../images/poster3.jpg"),
      name: "Tấm vé định mệnh",
      type: "Action",
      point: 7.1,
    },
  ];
  return (
    <View style={styles.container}>
      {/* Thanh điều hướng */}
      <View style={styles.toolbarContainer}>
        <Image
          style={styles.TC_logoImg}
          source={require("../../images/Logo.png")}
        />
        <View style={styles.makerContainer}>
          <Image
            style={styles.MC_iconMaker}
            source={require("../../images/maker.png")}
          />
          <Text style={styles.MC_textAddress}>Nur-Sultan</Text>
        </View>
        <Pressable style={styles.TC_btnAccount}>
          <Text style={styles.TC_textBtn}>Log in</Text>
        </Pressable>
      </View>
      {/* Tiêu đề */}
      <Text style={styles.textTitle}>Now in cinemas</Text>
      {/* Danh sách phim */}
      <View style={styles.listMovieContainer}>
        <FlatList
          data={listMovies}
          renderItem={({ item }) => (
            <ItemMoreMovies data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ListMoviesScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    flex: 1,
    backgroundColor: "#1A2232",
  },

  toolbarContainer: {
    width: Dimensions.get("screen").width - 20,
    height: 70,
    backgroundColor: "#112031",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },

  TC_logoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  makerContainer: {
    flexDirection: "row",
  },

  MC_textAddress: {
    fontFamily: "PT Root UI",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 7,
  },

  MC_iconMaker: {
    width: 17,
    height: 20,
    resizeMode: "contain",
  },

  TC_btnAccount: {
    width: 70,
    height: 40,
    backgroundColor: "#FC6D19",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  TC_textBtn: {
    fontFamily: "PT Root UI",
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  // tiêu đề
  textTitle: {
    color: "#FFFFFF",
    fontFamily: "PT Root UI",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  // danh sách phim
  listMovieContainer: {
    width: Dimensions.get("screen").width,
    flex: 1,
  },
});
