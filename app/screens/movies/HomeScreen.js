import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import MoviesMain from "./MoviesMain";
import ItemMoreMovies from "./Item/ItemMoreMovies";
import ItemEventHomeScreen from "../Event/Item/ItemEventHomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";
import { CinemaContext } from "../../context/CinemaContext";

const HomeScreen = (props) => {
  const { navigation } = props;
  const { dataMovie } = useContext(CinemaContext);
  const listTab = [
    {
      status: "Đang chiếu",
      _id: 1,
    },
    {
      status: "Đặc biệt",
      _id: 2,
    },
    {
      status: "Sắp chiếu",
      _id: 3,
    },
  ];

  const listMovies = [
    {
      _id: 1,
      anhBia:
        "http://192.168.1.39:3000/images/image-1685941443683-40774320-movie3.jpg",
      name: "Spider-man: No way home",
      time: "1h 24p",
    },
    {
      _id: 2,
      anhBia:
        "http://192.168.1.39:3000/images/image-1685941443683-40774320-movie3.jpg",
      name: "Spider-man: The amazing Spider-man",
      time: "1h 24p",
    },
    {
      _id: 3,
      anhBia:
        "http://192.168.1.39:3000/images/image-1685941443683-40774320-movie3.jpg",
      name: "Spider-man: end",
      time: "1h 24p",
    },
    {
      _id: 4,
      anhBia:
        "http://192.168.1.39:3000/images/image-1685941443683-40774320-movie3.jpg",
      name: "Lật mặt",
      time: "1h 24p",
    },
  ];

  const moreMovies = [
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
  ];

  const [dataEvent, setDataEvent] = useState("");
  useEffect(() => {
    const getAllEvents = async () => {
      let token = await AsyncStorage.getItem("token");
      const fetchData = async () => {
        let url = `${config.CONSTANTS.IP}api/event/getAllEvent`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        return res;
      };
      const res = await fetchData();
      setDataEvent(res.events);
    };
    getAllEvents();
    return () => {};
  }, []);

  const [status, setStatus] = useState("Đang chiếu");
  const setStatusFilter = (status) => {
    setStatus(status);
  };

  const handleToAllMovies = () => {
    navigation.navigate("ListMoviesScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          blurRadius={5}
          style={styles.imgBackground}
          source={require("../../images/poster1.jpg")}
        />
        {/* toolbar */}
        <View style={styles.toolbar}>
          <Pressable>
            <Image
              style={styles.tb_imgAvatar}
              source={require("../../images/avatar.png")}
            />
          </Pressable>
          <Image
            style={styles.tb_imgLogo}
            source={require("../../images/Logo.png")}
          />
          <Pressable>
            <Image
              style={styles.tb_imgMenu}
              source={require("../../images/menu.png")}
            />
          </Pressable>
        </View>
        {/* Danh sách chương trình khuyến mãi */}
        <View>
          <FlatList
            data={dataEvent}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
              <ItemEventHomeScreen data={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
        {/* LIST TAB */}
        <View style={[styles.listTab]}>
          {listTab.map((e) => (
            <Pressable
              style={[styles.btnTab, status === e.status && styles.btnActive]}
              onPress={() => setStatusFilter(e.status)}
              key={e._id}
            >
              <Text
                style={[
                  styles.textButton,
                  status === e.status && styles.textButtonActive,
                ]}
              >
                {e.status}
              </Text>
            </Pressable>
          ))}
        </View>
        {/* danh sách phim */}
        <MoviesMain data={dataMovie} navigation={navigation} />
        {/* thanh tìm kiếm */}
        <View style={styles.inputSearch}>
          <TextInput style={styles.is_inputText} placeholder="TÌm phim ..." />
          <Pressable>
            <Image
              style={styles.is_btnSearch}
              source={require("../../images/search.png")}
            />
          </Pressable>
        </View>
        {/* banner */}
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={require("../../images/banner.jpg")}
          />
        </View>
        {/* Các phim khác */}
        <View style={styles.moreMovies}>
          <View style={styles.mm_TitleContainer}>
            <Text style={styles.mm_textTitle}>Một số phim khác</Text>
            <TouchableOpacity onPress={handleToAllMovies}>
              <Text style={styles.mm_btnAll}>Tất cả</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataMovie}
            horizontal={true}
            renderItem={({ item }) => (
              <ItemMoreMovies data={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    // height: Dimensions.get('screen').height,
    flex: 1,
    backgroundColor: "#1A2232",
  },

  imgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: (Dimensions.get("screen").height / 5) * 4,
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
  },

  tb_imgAvatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  tb_imgMenu: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  // Danh sách chương trình
  itemProgram: {
    width: Dimensions.get("screen").width / 2,
    height: 100,
    borderRadius: 8,
    margin: 5,
    resizeMode: "stretch",
  },

  // LIST TAB
  listTab: {
    borderBottomColor: "#E0E0E0",
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btnTab: {
    width: Dimensions.get("window").width / 4,
    padding: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'rgba(0, 0, 0,0.1)',
    borderRadius: 4,
  },

  textButton: {
    color: "#637394",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
  },

  btnActive: {
    // backgroundColor: '#FF8036',
  },

  textButtonActive: {
    color: "#FF8036",
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

  // banner
  banner: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  bannerImage: {
    width: Dimensions.get("screen").width - 40,
    height: "95%",
    borderRadius: 20,
    resizeMode: "contain",
  },

  // một số phim khác
  moreMovies: {
    width: Dimensions.get("screen").width,
    flex: 1,
  },

  mm_TitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mm_textTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "900",
    color: "#FFFFFF",
    marginLeft: 10,
    marginVertical: 10,
  },

  mm_btnAll: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "900",
    color: "#FF8036",
    marginHorizontal: 20,
  },
});
