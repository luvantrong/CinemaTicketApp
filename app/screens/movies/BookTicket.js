import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-native-date-picker";
import moment from "moment/moment";
import { ScrollView } from "react-native-gesture-handler";
import InputSpinner from "react-native-input-spinner";
import NumericInput from "react-native-numeric-input";
import ItemPopcorn from "./Item/ItemPopcorn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config/config";
import { CinemaContext } from "../../context/CinemaContext";

const BookTicket = (props) => {
  const { navigation } = props;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { data } = props?.route?.params;
  const nameMovie = data.tenPhim;
  const hanldeToPayment = () => {
    navigation.navigate("Payment");
  };

  const { dataPopcorn } = useContext(CinemaContext);
 

  console.log(dataPopcorn);

  useEffect(() => {
    setText(moment(date).format("DD/MM/YYYY"));
  }, [date]);

  const [selectedIndex, setSelectedIndex] = useState(null);
 

  const [dataTicketDateAndNameMovie, setDataTicketDateAndNameMovie] = useState("")
  const getTicketByDateandNameMovie = async (date, nameMovie) => {
    let data = { date, nameMovie };
    const fetchData = async (data) => {
      let url = `${config.CONSTANTS.IP}api/ticket/getTicketByNameAndNameMovie`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      return res;
    };
    const res = await fetchData(data);
      setDataTicketDateAndNameMovie(res.Ticket);
      console.log(dataTicketDateAndNameMovie)
  }
  let tickets = [1,2,3];
  const getDataTicketByTime = (time)=>{
    // const tickets = dataTicketDateAndNameMovie.filter(ticket => ticket.suatXem !== time);
    console.log(tickets);
    tickets.splice(0, tickets.length);
    const newTickets = [...dataTicketDateAndNameMovie];
    for (let i = 0; i < newTickets.length; i++) {
      if (newTickets[i].suatXem === time) {
          tickets.push(newTickets[i]);
      }
    }

  }

 

  const backgroundColorList = ["#1A2232"];
  const [textList, setTextList] = useState([
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);

  const handlePress = (index) => {
    setSelectedIndex(index);
    const time = textList[index];
    getDataTicketByTime(time);
  };

  if (selectedIndex !== null) {
    backgroundColorList[selectedIndex] = "red";
  }

  const [selectedSeats, setselectedSeats] = useState(null);
  const handleSeats = (i) => {
    setselectedSeats(i);
  };

  const backgroundColorSeats = [
    "#1A2232",
  ];
  const [textListSeats, setTextListSeats] = useState([
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "E1",
    "E2",
    "E3",
    "E4",
    "E5",
    "E6",
    "E7",
    "E8",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "I1",
    "I2",
    "I3",
    "I4",
    "I5",
    "I6",
    'I7',
    'I8',
    'I9',
    'I10',
  ]);

  if (selectedSeats !== null) {
    backgroundColorSeats[selectedSeats] = "red";
  }
  const [bapThuong, setbapThuong] = useState(0);
  const [phoMai, setphoMai] = useState(0);
  const [socola, setsocola] = useState(0);
  const [pepsi, setpepsi] = useState(0);
  const [coca, setcoca] = useState(0);
  const [soda, setsoda] = useState(0);
  let a = 0;

  // const BuyNow = () => {
  //   console.log("-----------------------------------");
  //   console.log("Giờ: " + selectedIndex);
  //   console.log("Số ghế: " + selectedSeats);
  //   console.log("Số lượng bắp thường: " + bapThuong);
  //   console.log("Số lượng bắp phô mai: " + phoMai);
  //   console.log("Số lượng bắp socola: " + socola);
  //   console.log("Số lượng pepsi: " + pepsi);
  //   console.log("Số lượng soda: " + soda);
  //   console.log("Số lượng coca: " + coca);
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Image
              style={styles.icon}
              source={require("../../images/comeBack.png")}
            ></Image>
            <Text style={styles.textTitle}>Choose Cinema & Seats</Text>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.address}>
            <Image
              style={styles.icon}
              source={require("../../images/address.png")}
            ></Image>
            <Text style={styles.textAddress}>SM City Marikina</Text>
          </View>

          <View style={styles.schedule}>
            <Text style={styles.textSchedule}>Schedule</Text>
            <View style={styles.chooseDate}>
              <Text style={styles.textDate}>Date: {text} </Text>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Image
                  style={styles.icon}
                  source={require("../../images/calendar.png")}
                ></Image>
              </TouchableOpacity>
              <>
                <DatePicker
                  modal
                  open={open}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    getTicketByDateandNameMovie(date, nameMovie);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                  date={date}
                  mode="date"
                />
              </>
            </View>
          </View>

          <View style={styles.chooseViewingTime}>
            <Text style={styles.viewingTime}>Viewing Time</Text>
            <View style={styles.row}>
              {[0, 1, 2, 3].map((index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.btnTime,
                    { backgroundColor: backgroundColorList[index] },
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={styles.time}>{textList[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row}>
              {[4, 5, 6, 7].map((index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.btnTime,
                    { backgroundColor: backgroundColorList[index] },
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={styles.time}>{textList[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row}>
              {[8, 9, 10, 11].map((index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.btnTime,
                    { backgroundColor: backgroundColorList[index] },
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={styles.time}>{textList[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {[12, 13, 14, 15].map((index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.btnTime,
                    { backgroundColor: backgroundColorList[index] },
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={styles.time}>{textList[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.seats}>
            <Text style={styles.textSeats}>Seats</Text>
            <Text style={styles.textScreen}>Screen</Text>
            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[0, 1, 2].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[3, 4, 5].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[6, 7, 8, 9].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[10, 11, 12, 13].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[14, 15, 16, 17].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[18, 19, 20, 21].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[22, 23, 24, 25].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[26, 27, 28, 29].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[30, 31, 32, 33].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[34, 35, 36, 37].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[38, 39, 40, 41].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.chooseSeats}>
                {[42, 43, 44, 45].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[46, 47, 48, 49].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[50, 51, 52, 53].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[54, 55, 56, 57].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[58, 59, 60, 61].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.rowSeats}>
              <View style={styles.chooseSeats}>
                {[62, 63, 64, 65,66].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.chooseSeats}>
                {[  67, 68, 69,70,71].map((i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.btnSeats,
                      { backgroundColor: backgroundColorSeats[i] },
                    ]}
                    onPress={() => handleSeats(i)}
                  >
                    <Text style={styles.textSeatsRow}>{textListSeats[i]}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.status}>
            <View style={styles.available}>
              <View style={styles.btnAvailable}></View>
              <Text style={styles.textStatus}>Available</Text>
            </View>

            <View style={styles.available}>
              <View style={styles.btnReserved}></View>
              <Text style={styles.textStatus}>Reserved</Text>
            </View>

            <View style={styles.available}>
              <View style={styles.btnSelected}></View>
              <Text style={styles.textStatus}>Selected</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.textSeats, { margin: 20 }]}>Popcorn</Text>
          {
            /* <FlatList
                            data={data}
                            horizontal
                            renderItem={({ item }) => <ItemPopcorn data={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        />  */

            dataPopcorn.map((item) => (
              <ItemPopcorn key={item._id} data={item} navigation={navigation} />
            ))
          }
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={hanldeToPayment} style={styles.btnBuy}>
            <Text style={styles.textBuy}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookTicket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2232",
  },

  header: {
    marginTop: 20,
    marginLeft: 20,
  },

  title: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },

  textTitle: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },

  address: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginLeft: 230,
  },

  textAddress: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
  },

  schedule: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  textSchedule: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  chooseDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textDate: {
    fontSize: 16,
    color: "white",
  },

  chooseViewingTime: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  viewingTime: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  btnTime: {
    marginTop: 5,
    // backgroundColor: '#353535',
    height: 35,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1A5555",
    width: 80,
  },

  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
  },

  time: {
    fontSize: 18,
    color: "white",
    marginHorizontal: 10,
    textAlign: "center",
  },

  seats: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },

  textSeats: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  textScreen: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },

  rowSeats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnSeats: {
    marginTop: 5,
    height: 30,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6B6C6E",
    width: 30,
    marginHorizontal: 2,
  },

  textSeatsRow: {
    fontSize: 14,
    color: "#1A2232",
    textAlign: "center",
  },

  chooseSeats: {
    flexDirection: "row",
  },

  status: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  available: {
    flexDirection: "row",
    alignItems: "center",
  },

  btnAvailable: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderColor: "white",
    borderRadius: 5,
  },

  textStatus: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
    marginLeft: 10,
  },

  btnReserved: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 5,
  },

  btnSelected: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 5,
  },

  footer: {
    marginTop: 30,
    marginBottom: 70,
  },

  btnBuy: {
    backgroundColor: "orange",
    width: 150,
    height: 50,
    borderRadius: 10,
    position: "absolute",
    right: 30,
  },

  textBuy: {
    textAlign: "center",
    lineHeight: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  foodAndWater: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  textFood: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },

  normal: {
    width: 90,
    height: 90,
  },
  imgFoodAndWater: {
    width: 90,
    height: 90,
    marginTop: 20,
  },

  textFoodAndWater: {
    fontSize: 15,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },

  orderFood: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  water: {
    marginTop: 30,
  },

  textTitleFoodAndWater: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },

  barFoodAndWater: {
    borderWidth: 0.2,
    marginBottom: 10,
    borderColor: "white",
  },
});
const data = [
  {
    _id: 1,
    name: "Popcorn",
    price: 5,
    image: "require('../../images/popcorn.jpg')",
    content:
      "Popcorn is a variety of corn kernel which expands and puffs up when heated; the same names are also used to refer to the foodstuff produced by the expansion. A popcorn kernel has a hard, moisture-sealed hull and a dense starchy interior.",
  },
  {
    _id: 2,
    name: "Popcorn",
    price: 5,
    image: "require('../../images/popcorn.jpg')",
    content:
      "Popcorn is a variety of corn kernel which expands and puffs up when heated; the same names are also used to refer to the foodstuff produced by the expansion. A popcorn kernel has a hard, moisture-sealed hull and a dense starchy interior.",
  },
  {
    _id: 3,
    name: "Popcorn",
    price: 5,
    image: "require('../../images/popcorn.jpg')",
    content:
      "Popcorn is a variety of corn kernel which expands and puffs up when heated; the same names are also used to refer to the foodstuff produced by the expansion. A popcorn kernel has a hard, moisture-sealed hull and a dense starchy interior.",
  },
];
