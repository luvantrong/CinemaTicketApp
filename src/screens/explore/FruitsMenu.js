import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fruits from '../explore/Fruits';
import Cake from '../explore/Cake';
import Drinks from '../explore/Drinks';
import EggMilk from '../explore/EggMilk';
import Fish from '../explore/Fish';
import IceCream from '../explore/IceCream';
import Juice from '../explore/Juice';
import Meat from '../explore/Meat';
import SeaFood from '../explore/SeaFood';
import Vegetables from '../explore/Vegetables';
import Wash from '../explore/Wash';

const Tab = createMaterialTopTabNavigator();

const FruitsMenu = () => {
  return (
    <>
      <View>
        <Image
          style={styles.iconBack}
          source={require('../../images/Arrow.png')}
        />
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Fruits</Text>
        </View>

        <View style={styles.viewFind}>
          <TextInput placeholder="Search" style={styles.textInputFind} />
          <Image
            style={styles.imageFind}
            source={require('../../images/search.png')}
          />
        </View>
      </View>

      <Tab.Navigator
        initialRouteName="Fruits"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#FF5E00',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 3,
          },
          tabBarStyle: {
            width: '100%',
          },
          tabBarLabelStyle: {
            fontSize: 20,
            textTransform: 'capitalize',
            color: '#804F1E',
          },
          tabBarItemStyle: {
            width: 'auto',
            alignItems: 'flex-start',
          },
        }}>
        <Tab.Screen name="Fruits" component={Fruits} />
        <Tab.Screen name="Vegetables" component={Vegetables} />
        <Tab.Screen name="Meat" component={Meat} />
        <Tab.Screen name="Fish" component={Fish} />
        <Tab.Screen name="Sea Food" component={SeaFood} />
        <Tab.Screen name="Juice" component={Juice} />
        <Tab.Screen name="Drinks" component={Drinks} />
        <Tab.Screen name="Egg&Milk" component={EggMilk} />
        <Tab.Screen name="Ice Cream" component={IceCream} />
        <Tab.Screen name="Cake" component={Cake} />
        <Tab.Screen name="Wash" component={Wash} />
      </Tab.Navigator>
    </>
  );
};

export default FruitsMenu;

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
  viewFind: {
    flexDirection: 'column',
    marginHorizontal: 17,
    height: 48,
    marginTop: 20,
    marginBottom: 10,
  },

  textInputFind: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    paddingStart: 46,
    paddingEnd: 20,
  },
  imageFind: {
    marginTop: -33,
    marginStart: 16,
  },
});
