import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailMovieScreen from "../screens/movies/DetailMovieScreen";
import ListMoviesScreen from "../screens/movies/ListMoviesScreen";
import Profiles from "../screens/profiles/Profiles";
import EditProfile from "../screens/profiles/EditProfile";
import ChangePass from "../screens/profiles/ChangePass";
import HomeScreen from "../screens/movies/HomeScreen";
import EventScreen from "../screens/Event/EventScreen";
import BookTicket from "../screens/movies/BookTicket";
import Payment from "../screens/movies/Payment";
import TicketHistory from "../screens/profiles/TicketHistory";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
      <Stack.Screen name="ListMoviesScreen" component={ListMoviesScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="BookTicket" component={BookTicket} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profiles"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="TicketHistory" component={TicketHistory}/>
    </Stack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage2"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage2" component={ListMoviesScreen} />
      <Stack.Screen name="ListMoviesScreent2" component={DetailMovieScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const CinemaNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#FF8036",
        tabBarInactiveTintColor: "#828282",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "400",
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 10,
          backgroundColor: "#1A2232",
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Image
                style={{
                  width: 18,
                  height: 18,
                  tintColor: focused ? "#FF8036" : "#828282",
                }}
                source={require("../images/iconHome.png")}
              />
            );
          } else if (route.name === "Search") {
            return (
              <Image
                style={{
                  width: 17,
                  height: 17,
                  tintColor: focused ? "#FF8036" : "#828282",
                }}
                source={require("../images/iconSearch.png")}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Image
                style={{
                  width: 16,
                  height: 19,
                  tintColor: focused ? "#FF8036" : "#828282",
                }}
                source={require("../images/iconProfile.png")}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default CinemaNavigation;
