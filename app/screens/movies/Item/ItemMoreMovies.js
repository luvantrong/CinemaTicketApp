import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";

const ItemMoreMovies = (props) => {
  const { data, navigation } = props;

  const handleToDetailMovie = () => {
    navigation.navigate("DetailMovieScreen", { data: data });
  };

  return (
    <Pressable style={styles.container} onPress={handleToDetailMovie}>
      <Image style={styles.posterImage} source={{ uri: data.anhBia }} />
      <Text style={styles.TextName}>{data.tenPhim}</Text>
      <Text style={styles.textType}>{data.dangPhim}</Text>
      <View style={styles.pointContainer}>
        <Text style={styles.textPoint}>4.5</Text>
      </View>
    </Pressable>
  );
};

export default ItemMoreMovies;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width / 2,
    height: 350,
  },

  posterImage: {
    width: "90%",
    height: "80%",
    borderRadius: 8,
    margin: 10,
  },

  TextName: {
    fontFamily: "PT Root UI",
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 10,
    marginTop: -5,
  },

  textType: {
    fontFamily: "PT Root UI",
    fontSize: 14,
    fontWeight: "400",
    color: "#637394",
    marginLeft: 10,
  },

  textPoint: {
    fontFamily: "PT Root UI",
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  pointContainer: {
    width: 30,
    height: 22,
    backgroundColor: "#D98639",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },
});
