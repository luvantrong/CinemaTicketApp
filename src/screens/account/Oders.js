import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
  Animated,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import OdersOngoing from '../account/OdersOngoing';
import History from '../account/History';

const Tab = createMaterialTopTabNavigator();

const Oders = () => {
  return (
    <>
      <View>
        <Image
          style={styles.iconBack}
          source={require('../../images/Arrow.png')}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Orders</Text>
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="OdersOngoing"
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: '#FF5E00',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 3,
          },
          tabBarStyle: {
            width: '80%',
            marginStart: 40,
            backgroundColor: 'transparent',
          },
          tabBarLabelStyle: {
            fontSize: 20,
            textTransform: 'capitalize',
          },
          tabBarActiveTintColor: '#FF5E00',
          tabBarInactiveTintColor: '#804F1E',
        }}>
        <Tab.Screen name="Ongoing" component={OdersOngoing} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </>
  );
};

export default Oders;

const styles = StyleSheet.create({
  iconBack: {
    marginStart: 20,
    marginTop: 25,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    marginStart: 14.25,
  },
});
