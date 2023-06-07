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

  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([
    { id: "A0", status: "available" },
    { id: "A1", status: "available" },
    { id: "A2", status: "available" },
    { id: "A3", status: "available" },
    { id: "A4", status: "available" },
    { id: "A5", status: "available" },
    { id: "A6", status: "available" },
    { id: "A7", status: "available" },
    { id: "B0", status: "available" },
    { id: "B1", status: "availaboe" },
    { id: "B2", status: "available" },
    { id: "B3", status: "availaboe" },
    { id: "B4", status: "available" },
    { id: "B5", status: "availaboe" },
    { id: "B6", status: "available" },
    { id: "B7", status: "availaboe" },
    { id: "C0", status: "available" },
    { id: "C1", status: "available" },
    { id: "C2", status: "available" },
    { id: "C3", status: "available" },
    { id: "C4", status: "available" },
    { id: "C5", status: "available" },
    { id: "C6", status: "available" },
    { id: "C7", status: "available" },
    { id: "D0", status: "available" },
    { id: "D1", status: "available" },
    { id: "D2", status: "available" },
    { id: "D3", status: "available" },
    { id: "D4", status: "available" },
    { id: "D5", status: "available" },
    { id: "D6", status: "available" },
    { id: "D7", status: "available" },
    { id: "E0", status: "available" },
    { id: "E1", status: "available" },
    { id: "E2", status: "available" },
    { id: "E3", status: "available" },
    { id: "E4", status: "available" },
    { id: "E5", status: "available" },
    { id: "E6", status: "available" },
    { id: "E7", status: "available" },
    { id: "F0", status: "available" },
    { id: "F1", status: "available" },
    { id: "F2", status: "available" },
    { id: "F3", status: "available" },
    { id: "F4", status: "available" },
    { id: "F5", status: "available" },
    { id: "F6", status: "available" },
    { id: "F7", status: "available" },
    { id: "G0", status: "available" },
    { id: "G1", status: "available" },
    { id: "G2", status: "available" },
    { id: "G3", status: "available" },
    { id: "G4", status: "available" },
    { id: "G5", status: "available" },
    { id: "G6", status: "available" },
    { id: "G7", status: "available" },
    { id: "H0", status: "available" },
    { id: "H1", status: "available" },
    { id: "H2", status: "available" },
    { id: "H3", status: "available" },
    { id: "H4", status: "available" },
    { id: "H5", status: "available" },
    { id: "H6", status: "available" },
    { id: "H7", status: "available" },
    { id: "K0", status: "available" },
    { id: "K1", status: "available" },
    { id: "K2", status: "available" },
    { id: "K3", status: "available" },
    { id: "K4", status: "available" },
    { id: "K5", status: "available" },
    { id: "K6", status: "available" },
    { id: "K7", status: "available" },
    { id: "L0", status: "available" },
    { id: "L1", status: "available" },
    { id: "L2", status: "available" },
    { id: "L3", status: "available" },
    { id: "L4", status: "available" },
    { id: "L5", status: "available" },
    { id: "L6", status: "available" },
    { id: "L7", status: "available" },
    { id: "L8", status: "available" },
    { id: "L9", status: "available" },
  ]);

  const handleSeatPress = (seatId, seatStatus) => {
    if (seatStatus === "available") {
      const newSeats = seats.map((seat) => {
        if (seat.id === seatId) {
          return { ...seat, status: "selected" };
        } else {
          return seat;
        }
      });

      setSeats(newSeats);
      setSelectedSeat(seatId);
    } else if (seatStatus === "selected") {
      const newSeats = seats.map((seat) => {
        if (seat.id === seatId) {
          return { ...seat, status: "available" };
        } else {
          return seat;
        }
      });

      setSeats(newSeats);
      setSelectedSeat(seatId);
    }
  };
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

  const [dataTicketDateAndNameMovie, setDataTicketDateAndNameMovie] =
    useState("");
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
    console.log(dataTicketDateAndNameMovie);
  };
  let tickets = [1, 2, 3];
  const getDataTicketByTime = (time) => {
    // const tickets = dataTicketDateAndNameMovie.filter(ticket => ticket.suatXem !== time);
    console.log(tickets);
    tickets.splice(0, tickets.length);
    const newTickets = [...dataTicketDateAndNameMovie];
    for (let i = 0; i < newTickets.length; i++) {
      if (newTickets[i].suatXem === time) {
        tickets.push(newTickets[i]);
      }
    }
  };

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
            <View style={styles.row1}>
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

            <View style={styles.row1}>
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

            <View style={styles.row1}>
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
            <View style={styles.row1}>
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

          <Text style={[styles.viewingTime, { marginLeft: 20 }]}>Seats</Text>
          <Text style={styles.textScreen}>Screen</Text>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.row}>
              {seats.slice(0, 4).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(4, 8).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(8, 12).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(12, 16).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(16, 20).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(20, 24).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(24, 28).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(28, 32).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(32, 36).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(36, 40).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(40, 44).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(44, 48).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(48, 52).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(52, 56).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(56, 60).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(60, 64).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(64, 68).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              <View style={styles.gap} />
              {seats.slice(68, 72).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {seats.slice(72, 77).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
              {/* <View style={styles.gap} /> */}
              {seats.slice(77, 82).map((seat) => (
                <TouchableOpacity
                  key={seat.id}
                  style={[
                    styles.seat,
                    seat.status === "selected" && styles.selectedSeat,
                    seat.status === "booked" && styles.bookedSeat,
                  ]}
                  onPress={() => handleSeatPress(seat.id, seat.status)}
                  disabled={seat.status === "booked"}
                >
                  <Text style={styles.seatText}>{seat.id}</Text>
                </TouchableOpacity>
              ))}
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
    marginTop: 10,
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

  row1: {
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
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 5,
  },

  btnSelected: {
    backgroundColor: "yellow",
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

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  seat: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  seatText: {
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#1A2232",
  },
  gap: {
    width: 70,
  },
  selectedSeat: {
    backgroundColor: "yellow",
  },
  bookedSeat: {
    backgroundColor: "red",
  },
  confirmButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
