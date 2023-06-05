import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import ItemMoreMovies from "./Item/ItemMoreMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";

const DetailMovieScreen = (props) => {
  const { navigation } = props;
  const { data } = props?.route?.params;
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

  const [dataMovie, setDataMovie] = useState("");

  useEffect(() => {
    const getAllMovies = async () => {
      let token = await AsyncStorage.getItem("token");
      const fetchData = async () => {
        let url = `${config.CONSTANTS.IP}api/movie/getAllMovies`;
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
      setDataMovie(res.movies);
    };
    getAllMovies();
    return () => {};
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Phần đầu */}
        <View style={styles.headerContainer}>
          <Image
            style={styles.HC_imgBackground}
            // source={require("../../images/poster1.jpg")}
            source={{ uri: data.anhBia }}
          />
          <Image
            style={styles.HC_iconBack}
            source={require("../../images/backArrow.png")}
          />
          <Pressable style={styles.HC_btnPlay}>
            <Image source={require("../../images/btnPlay.png")} />
          </Pressable>
          <LinearGradient
            locations={[0, 0.9]}
            colors={["rgba(0,0,0,0)", "rgb(26,34,50)"]}
          >
            <Pressable style={styles.HC_btnGetTicket}>
              <Image
                style={styles.HC_iconTicket}
                source={require("../../images/ticket.png")}
              />
              <Text style={styles.HC_textButton}>Get Tickets</Text>
            </Pressable>
            <View style={{ width: "100%", height: 120 }} />
          </LinearGradient>
        </View>
        {/* Phần thông tin*/}
        <View style={styles.InformationContainer}>
          <View style={styles.IC_listNote}>
            <View style={styles.IC_listContainer}>
              <Text style={styles.IC_itemListNote}>13+</Text>
              <Text style={styles.IC_itemListNote}>{data.dangPhim}</Text>
              <Text style={styles.IC_itemListNote}>2 Trailers</Text>
            </View>
            <View style={styles.IC_timeContainer}>
              <Image
                style={styles.IC_iconTime}
                source={require("../../images/Clock.png")}
              />
              <Text style={styles.IC_textTime}>{data.thoiLuong} phút</Text>
            </View>
          </View>
          <Text style={styles.TextName}>{data.tenPhim}</Text>
          <Text style={styles.textContent}>{data.moTa}</Text>
          <View style={styles.moreInfor}>
            <View style={styles.row}>
              <Text style={styles.textTitle}>Release</Text>
              <Text style={styles.textParticle}>2022</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textTitle}>Director</Text>
              <Text style={styles.textParticle}>Matt Reeves</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textTitle}>Cast</Text>
              <Text style={styles.textParticle}>
                Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell,
                Paul Dano, John Turturro, Andy Serkis, Peter Sarsgaard
              </Text>
            </View>
          </View>
        </View>
        {/* Danh sách đề xuất */}
        <View style={styles.listMoreMovieContainer}>
          <Text style={styles.TextTitleMoreMovies}>Now in cinemas</Text>
          <FlatList
            horizontal={true}
            data={dataMovie}
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

export default DetailMovieScreen;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    flex: 1,
    backgroundColor: "#1A2232",
  },

  // Phần đầu
  headerContainer: {
    width: "100%",
    height: 490,
  },

  HC_imgBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  HC_iconBack: {
    width: 24,
    height: 24,
    marginLeft: 20,
    marginTop: 25,
  },

  HC_btnPlay: {
    width: 34,
    height: 34,
    position: "absolute",
    top: "40%",
    left: "45%",
  },

  HC_btnGetTicket: {
    flexDirection: "row",
    backgroundColor: "#D98639",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 55,
    alignSelf: "center",
    marginTop: "70%",
  },

  HC_textButton: {
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: 10,
  },

  HC_iconTicket: {
    width: 18,
    height: 18,
  },

  // Phần thông tin
  InformationContainer: {
    width: Dimensions.get("screen").width - 60,
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: -30,
  },

  IC_listNote: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  IC_listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  IC_itemListNote: {
    backgroundColor: "#484747",
    borderRadius: 5,
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: "500",
    paddingHorizontal: 5,
    margin: 5,
  },

  IC_timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
  },

  IC_iconTime: {
    width: 9,
    height: 9,
    marginRight: 5,
  },

  IC_textTime: {
    fontFamily: "Poppins",
    fontSize: 10,
    fontWeight: "400",
    color: "#FFFFFF",
  },

  TextName: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    marginTop: 30,
  },

  textContent: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: "300",
    color: "#FFFFFF",
    marginTop: 10,
  },

  moreInfor: {
    marginTop: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width - 60,
    margin: 5,
  },

  textTitle: {
    color: "#637394",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    flex: 1,
  },

  textParticle: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    flex: 2,
  },

  // danh sách đề xuất
  listMoreMovieContainer: {
    width: Dimensions.get("screen").width - 20,
    marginLeft: 10,
    marginTop: 30,
  },

  TextTitleMoreMovies: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 10,
  },
});
