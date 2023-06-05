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
    navigation.navigate("DetailMovieScreen");
  };

  return (
    <Pressable style={styles.container} onPress={handleToDetailMovie}>
      <Image style={styles.posterImage} source={data.image} />
      <Text style={styles.TextName}>{data.name}</Text>
      <Text style={styles.textType}>{data.type}</Text>
      <View style={styles.pointContainer}>
        <Text style={styles.textPoint}>{data.point}</Text>
      </View>
    </Pressable>
  );
};

export default ItemMoreMovies;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width / 2,
    height: 300,
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
