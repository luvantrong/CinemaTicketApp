import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

const OdersOngoing = () => {
  const [onGoing, setOnGoing] = useState([
    {
      id: 1,
      title: 'Ongoing',
    },
    {
      id: 2,
      title: 'Ongoing',
    },
  ]);
  return (
    <View>
      {onGoing == '' ? (
        <View style={styles.container1}>
          <Image source={require('../../images/imgOders.png')} />
          <Text style={styles.textContainer1}>
            There is n ongoing order right now.
          </Text>
          <Text style={[styles.textContainer1, {marginTop: 0}]}>
            You can order from home
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.container2}>
            <View style={styles.container2_1}>
              <Image source={require('../../images/calendar.png')} />
              <Text style={styles.textContainer2_1}>March 5, 2019</Text>
            </View>
            <Text style={styles.textContainer2_2}>6:30 pm</Text>
          </View>

          <View style={styles.container3}>
            <Image
              style={styles.container3_1}
              source={require('../../images/line1.png')}
            />
            <Image
              style={styles.container3_2}
              source={require('../../images/ongoingtick.png')}
            />
            <Image
              style={styles.container3_3}
              source={require('../../images/ongoingtick.png')}
            />
            <Image
              style={styles.container3_4}
              source={require('../../images/ongoingdone.png')}
            />
            <Image
              style={styles.container3_5}
              source={require('../../images/on1.png')}
            />
            <Image
              style={styles.container3_6}
              source={require('../../images/on2.png')}
            />
            <Image
              style={styles.container3_7}
              source={require('../../images/on3.png')}
            />
            <Text style={styles.container3_8}>We are packin your items...</Text>
            <Text style={styles.container3_9}>
              Your order is delivering to your location...
            </Text>
            <Text style={styles.container3_10}>Your order is received.</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default OdersOngoing;

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    marginTop: 50,
  },

  textContainer1: {
    color: '#804F1E',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 40,
  },

  container2_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer2_1: {
    color: '#6D3805',
    letterSpacing: 1.28,
    fontWeight: '700',
    marginStart: 3,
    fontSize: 18,
  },

  textContainer2_2: {
    color: '#F37A20',
    letterSpacing: 0.9,
    fontWeight: '400',
    marginStart: 3,
    fontSize: 14,
  },

  container3: {
    position: 'relative',
  },

  container3_1: {
    position: 'absolute',
    left: 25,
    top: 70,
  },

  container3_2: {
    position: 'absolute',
    left: 18,
    top: 55,
  },

  container3_3: {
    position: 'absolute',
    left: 18,
    top: 200,
  },

  container3_4: {
    position: 'absolute',
    left: 18,
    top: 360,
  },

  container3_5: {
    position: 'absolute',
    left: 55,
    top: 40,
  },

  container3_6: {
    position: 'absolute',
    left: 55,
    top: 170,
  },

  container3_7: {
    position: 'absolute',
    left: 55,
    top: 310,
  },

  container3_8: {
    position: 'absolute',
    left: 150,
    top: 70,
    color: '#6D3805',
    letterSpacing: 0.9,
    fontSize: 16,
  },

  container3_9: {
    position: 'absolute',
    left: 150,
    top: 200,
    width: 190,
    color: '#6D3805',
    letterSpacing: 0.9,
    fontSize: 16,
  },

  container3_10: {
    position: 'absolute',
    left: 150,
    top: 330,
    color: '#6D3805',
    letterSpacing: 0.9,
    fontSize: 16,
  },
});
