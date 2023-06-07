import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const SeatMap = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seats, setSeats] = useState([
    { id: "A1", status: "available" },
    { id: "A2", status: "available" },
    { id: "A3", status: "available" },
    { id: "A4", status: "available" },
    { id: "A5", status: "available" },
    { id: "A6", status: "available" },
    { id: "A7", status: "available" },
    { id: "A8", status: "available" },
    { id: "B1", status: "booked" },
    { id: "B2", status: "available" },
    { id: "B3", status: "booked" },
    { id: "B4", status: "available" },
    { id: "B5", status: "booked" },
    { id: "B6", status: "available" },
    { id: "B7", status: "booked" },
    { id: "B8", status: "available" },
    { id: "C1", status: "available" },
    { id: "C2", status: "available" },
    { id: "C3", status: "available" },
    { id: "C4", status: "available" },
    { id: "C5", status: "available" },
    { id: "C6", status: "available" },
    { id: "C7", status: "available" },
    { id: "C8", status: "available" },
    { id: "D1", status: "available" },
    { id: "D2", status: "available" },
    { id: "D3", status: "available" },
    { id: "D4", status: "available" },
    { id: "D5", status: "available" },
    { id: "D6", status: "available" },
    { id: "D7", status: "available" },
    { id: "D8", status: "available" },
    { id: "E1", status: "available" },
    { id: "E2", status: "available" },
    { id: "E3", status: "available" },
    { id: "E4", status: "available" },
    { id: "E5", status: "available" },
    { id: "E6", status: "available" },
    { id: "E7", status: "available" },
    { id: "E8", status: "available" },
    { id: "F1", status: "available" },
    { id: "F2", status: "available" },
    { id: "F3", status: "available" },
    { id: "F4", status: "available" },
    { id: "F5", status: "available" },
    { id: "F6", status: "available" },
    { id: "F7", status: "available" },
    { id: "F8", status: "available" },
    { id: "G1", status: "available" },
    { id: "G2", status: "available" },
    { id: "G3", status: "available" },
    { id: "G4", status: "available" },
    { id: "G5", status: "available" },
    { id: "G6", status: "available" },
    { id: "G7", status: "available" },
    { id: "G8", status: "available" },
    { id: "H1", status: "available" },
    { id: "H2", status: "available" },
    { id: "H3", status: "available" },
    { id: "H4", status: "available" },
    { id: "H5", status: "available" },
    { id: "H6", status: "available" },
    { id: "H7", status: "available" },
    { id: "H8", status: "available" },
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

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  seat: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  seatText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gap: {
    width: 10,
  },
  selectedSeat: {
    backgroundColor: "green",
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

export default SeatMap;
