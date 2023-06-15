import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemTicket = () => {
  return (
    <View style={styles.container}>
      <Text>Tên phim: Lật Mặt</Text>
      <Text>Ngày xem: 02/07/2023</Text>
      <Text>Suất xem: 08:00</Text>
      <Text>Số ghế: A3</Text>
    </View>
  );
};

export default ItemTicket;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBottomColor: "black",
    margin: 10,
    padding: 10,
  },
});
