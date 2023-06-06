import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import ItemMoreMovies from "./Item/ItemMoreMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";
import { CinemaContext } from "../../context/CinemaContext";
import { AccountContext } from "../../context/AccountContext";

const ListMoviesScreen = (props) => {
  const { navigation } = props;
  const { dataMovie } = useContext(CinemaContext);
  const { dataAccount } = useContext(AccountContext);

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
          <Text style={styles.TC_textBtn}>{dataAccount.name}</Text>
        </Pressable>
      </View>

      <View style={styles.inputSearch}>
        <TextInput style={styles.is_inputText} placeholder="Tìm phim ..." />
        <Pressable>
          <Image
            style={styles.is_btnSearch}
            source={require("../../images/search.png")}
          />
        </Pressable>
      </View>
      {/* Tiêu đề */}
      <Text style={styles.textTitle}>Now in cinemas</Text>
      {/* Danh sách phim */}
      <View style={styles.listMovieContainer}>
        <FlatList
          data={dataMovie}
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

  // thanh tìm kiếm
  inputSearch: {
    backgroundColor: "#F5EFE7",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  is_inputText: {
    paddingRight: 30,
    flex: 8,
    fontSize: 16,
    fontFamily: "Roboto",
  },

  is_btnSearch: {
    width: 30,
    heigh: 30,
    resizeMode: "contain",
    flex: 2,
    margin: 10,
  },
});
