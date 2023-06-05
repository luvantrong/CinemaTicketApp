import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";

const ItemEventHomeScreen = (props) => {
  const { data, navigation } = props;

  const handleToEventScreen = () => {
    navigation.navigate("EventScreen", { data: data });
  };

  return (
    <Pressable onPress={handleToEventScreen}>
      <Image style={styles.itemProgram} source={{ uri: data.anhBiaSuKien }} />
    </Pressable>
  );
};

export default ItemEventHomeScreen;

const styles = StyleSheet.create({
  itemProgram: {
    width: Dimensions.get("screen").width / 2,
    height: 100,
    borderRadius: 8,
    margin: 5,
    resizeMode: "stretch",
  },
});
