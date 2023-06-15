import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import config from "../../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccountContext } from "../../context/AccountContext";

const Payment = (props) => {
  const { soGhe, movie, soLuongPopcorn, idPopcorn, selectedIndex, date } =
    props?.route?.params;
  console.log(soGhe, movie, soLuongPopcorn, idPopcorn, selectedIndex, date);
  console.log("Số ghế", soGhe);
  console.log("Movie", movie);
  console.log("Số lượng bắp", soLuongPopcorn);
  console.log("Id bắp", idPopcorn);
  console.log("Suất xem", selectedIndex);
  console.log("Ngày xem", date);
  const { dataAccount } = useContext(AccountContext);
  const [dataPopcorn, setDataPopcorn] = useState("");

  useEffect(() => {
    const getPopcornById = async () => {
      const id = idPopcorn;

      let data = { id };
      console.log(data);
      let token = await AsyncStorage.getItem("token");
      const fetchData = async () => {
        let url = `${config.CONSTANTS.IP}api/popcorn/get-by-id`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const res = await response.json();
        return res;
      };
      const res = await fetchData();
      setDataPopcorn(res.popcorn);
    };
    getPopcornById();
    return () => {};
  }, []);
  const sumPay =
    Number(movie.giaVe) + Number(dataPopcorn.price) * Number(soLuongPopcorn);

  const sumPopcorn = Number(dataPopcorn.price) * Number(soLuongPopcorn);
  const handlePayment = async () => {
    const tenPhim = movie.tenPhim;
    const giaVe = movie.giaVe;
    const ngayXem = date;
    const suatXem = selectedIndex;
    const bapRang = dataPopcorn.name;
    const soLuong = soLuongPopcorn;
    const nguoiDung = dataAccount.email;
    const image = dataPopcorn.image;
    console.log(
      tenPhim,
      giaVe,
      soGhe,
      ngayXem,
      suatXem,
      bapRang,
      soLuong,
      nguoiDung,
      image
    );
    let data = {
      tenPhim,
      giaVe,
      soGhe,
      ngayXem,
      suatXem,
      bapRang,
      soLuong,
      nguoiDung,
      image,
    };
    const fetchData = async (data) => {
      let url = `${config.CONSTANTS.IP}api/ticket/addNewTicket`;
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
      ToastAndroid.show("Mua vé thành công", ToastAndroid.SHORT);
    } else {
      const mes = res.message;
      ToastAndroid.show(mes, ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={{ padding: 10 }}>
        <View style={styles.Headers}>
          <Image source={{ uri: movie.anhBia }} style={styles.imgFilm} />
          <View>
            <Text style={styles.textFilm}>{movie.tenPhim}</Text>
            <Text style={styles.textHeader}>Ngày xem: {date}</Text>
            <Text style={styles.textHeader}>Suất xem: {selectedIndex}h</Text>
            <Text style={styles.textHeader}>Seat: {soGhe}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textHeader}>{dataPopcorn.name}</Text>
              <Text style={styles.textHeader}> x{soLuongPopcorn}</Text>
            </View>
            <Text style={styles.textPriceHeader}>
              Tổng thanh toán: {sumPay} VND
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>THÔNG TIN VÉ</Text>
          <View style={styles.view}>
            <Text style={styles.text}>Số lượng</Text>

            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Tổng</Text>
            <Text style={styles.text}>{movie.giaVe}</Text>
          </View>
          <Text style={styles.textTitle}>BẮP NƯỚC (TÙY CHỌN)</Text>
          <View style={styles.view}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: dataPopcorn.image }}
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              <Text style={styles.text}>{dataPopcorn.name}</Text>
            </View>
            <Text style={styles.text}>{soLuongPopcorn}</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Tổng</Text>
            <Text style={styles.text}>{sumPopcorn}</Text>
          </View>

          <Text style={styles.textTitle}>THANH TOÁN</Text>
          <View style={styles.view}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../images/creditcard.png")}
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
              <Text style={styles.text}>ATM Card (Thẻ nội địa)</Text>
            </View>
            <Image
              source={require("../../images/checkmark.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text>
              Tôi đồng ý với điều khoản sử dụng và đang mua vé cho người có độ
              tuổi phù hợp.
            </Text>
            <Pressable style={styles.button} onPress={handlePayment}>
              <Text style={{ color: "white" }}>Tôi đồng ý và tiếp tục</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#e6e6e6",
  },
  Headers: {
    flexDirection: "row",
    marginLeft: -10,
    marginRight: -10,
    padding: 10,
    backgroundColor: "white",
  },
  imgFilm: {
    height: 150,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  textFilm: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },
  textHeader: {
    color: "black",
  },
  textPriceHeader: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginLeft: -10,
    marginRight: -10,
    padding: 10,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#e6e6e6",
    padding: 5,
    paddingTop: 15,
  },

  text: {
    fontWeight: "450",
    marginTop: 5,
  },
  button: {
    backgroundColor: "orange",

    height: 40,
    borderRadius: 20,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
