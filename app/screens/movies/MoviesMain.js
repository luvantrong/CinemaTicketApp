import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";

const MoviesMain = (props) => {
  const { data, navigation } = props;
  console.log(data);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.56;
  const [newData, setNewData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);

  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  // const [currentTime, setCurrentTime] = useState("");
  // const [currentName, setCurrentName] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   setCurrentName(data[currentIndex].name);
  //   setCurrentTime(data[currentIndex].time);
  // }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate={"fast"}
        onScroll={onScroll}
      >
        {newData.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.75, 1, 0.75]
            );
            return {
              transform: [{ scale }],
            };
          });
          if (!item.anhBia) {
            return <View style={{ width: SPACER }} key={index} />;
          }
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("DetailMovieScreen", { data: item });
              }}
              style={{ width: SIZE }}
              key={index}
            >
              <Animated.View style={[styles.imageContainer, style]}>
                <Image
                  style={styles.imageItem}
                  source={{ uri: item.anhBia }}
                  key={item._id}
                />
              </Animated.View>
            </Pressable>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default MoviesMain;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },

  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },

  imageItem: {
    width: "100%",
    height: undefined,
    aspectRatio: 7.5 / 12,
  },

  inforMovie: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: -30,
    justifyContent: "center",
    width: Dimensions.get("screen").width - 40,
    marginLeft: 20,
  },

  textName: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    width: "80%",
  },

  textTime: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
    marginLeft: 10,
  },

  btnSelect: {
    backgroundColor: "#FF8036",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  textButtonSelect: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "700",
  },
});
