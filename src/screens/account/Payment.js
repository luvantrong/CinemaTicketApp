import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

const BtnGroup = props => {
  const [selection, setSelection] = useState(1);
  const {time, setTime} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 1
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(1);
          setTime('8 AM - 11 AM');
        }}>
        <Text
          style={[styles.btnText, selection === 1 ? {color: 'white'} : null]}>
          8 AM - 11 AM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 2
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(2);
          setTime('11 AM - 13 PM');
        }}>
        <Text
          style={[styles.btnText, selection === 2 ? {color: 'white'} : null]}>
          11 AM - 13 PM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 3
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(3);
          setTime('13 AM - 15 PM');
        }}>
        <Text
          style={[styles.btnText, selection === 3 ? {color: 'white'} : null]}>
          13 PM - 15 PM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 4
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(4);
          setTime('15 AM - 17 PM');
        }}>
        <Text
          style={[styles.btnText, selection === 4 ? {color: 'white'} : null]}>
          15 PM - 17 PM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 5
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(5);
          setTime('17 AM - 19 PM');
        }}>
        <Text
          style={[styles.btnText, selection === 5 ? {color: 'white'} : null]}>
          17 PM - 19 PM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selection === 6
            ? {backgroundColor: '#6B7280'}
            : {backgroundColor: '#FFFFFF'},
        ]}
        onPress={() => {
          setSelection(6);
          setTime('19 AM - 21 PM');
        }}>
        <Text
          style={[styles.btnText, selection === 6 ? {color: 'white'} : null]}>
          19 PM - 21 PM
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Payment = props => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateText, setDateText] = useState('');
  const [time, setTime] = useState('');

  const handlePay = () => {
    console.log(time);
    console.log(dateText);
  };

  useEffect(() => {
    setDateText(moment(date).format('DD/MM/YYYY'));
  }, [date]);

  return (
    <ScrollView style={{marginBottom: 20}}>
      <View style={styles.container1}>
        <Image source={require('../../images/Arrow.png')} />
        <Text style={styles.c1_text}>Payment</Text>
      </View>

      <View style={styles.container9}>
        <View style={styles.view_c9}>
          <Text style={styles.text_c4}>Delivery Location</Text>
          <Text style={{color: '#FF5E00', fontSize: 18, fontWeight: '700'}}>
            Change
          </Text>
        </View>
        <View style={styles.view_c9_1}>
          <Image
            style={{marginEnd: 10}}
            source={require('../../images/add24.png')}
          />
          <Text style={[styles.text_c4_1, {fontSize: 13, marginStart: 7}]}>
            Floor 4, Kartini Tower No 43{'\n'}Lumajang, Jawa Timur
          </Text>
        </View>
      </View>

      <View style={styles.container10}>
        <Text style={styles.text_c4}>Expected date & Time</Text>

        <View style={styles.viewDate}>
          <TextInput
            style={styles.styleTextInputDate}
            placeholder="Select Date"
            placeholderTextColor={'#6D3805A3'}
            value={dateText}
            editable={false}
          />
          <Image
            style={styles.imgDate1}
            source={require('../../images/calendar3.png')}
          />
          <TouchableOpacity
            style={styles.imgDate2}
            onPress={() => setOpen(true)}>
            <Image source={require('../../images/down22.png')} />
          </TouchableOpacity>
        </View>

        <BtnGroup time={time} setTime={setTime} />

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            console.log(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>

      <View style={styles.container2}>
        <Text style={styles.c2_text}>In-Store Pick Up</Text>
        <Text style={styles.c2_text}>FREE</Text>
      </View>

      <Picker
        style={{color: '#AC8E71', width: '98%', marginStart: 5}}
        mode="dropdown"
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item
          style={{color: '#AC8E71'}}
          label="Some Stores May Be Temporarily
Unavalable."
          value="Some Stores May Be Temporarily
Unavalable."
        />
        <Picker.Item style={{color: '#AC8E71'}} label="City" value="City" />
      </Picker>

      <View style={styles.container3}>
        <TextInput
          style={styles.textinput}
          placeholder="Search For Town, Street, Zip Code..."
        />
        <TouchableOpacity style={styles.iconFind}>
          <Image source={require('../../images/iconFindP.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.container4}>
        <View>
          <Text style={styles.text_c4}>Goteborg{'\n'}Arkaden</Text>
          <Text style={styles.text_c4_1}>1.4 MI</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </View>
      <View style={styles.container5}>
        <View>
          <Text style={styles.text_c4}>
            Kungsbacka
            {'\n'}Kungsmassan
          </Text>
          <Text style={styles.text_c4_1}>17 MI</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </View>

      <View style={styles.container6}>
        <View style={styles.view_c6}>
          <Image source={require('../../images/see.png')} />
          <Text style={[styles.text_c4, {marginStart: 10}]}>See Itemes</Text>
        </View>
        <Image source={require('../../images/arrowpro.png')} />
      </View>

      <View style={styles.container7}>
        <Text style={styles.text_c4}>Payment Method</Text>
        <View style={styles.c7_view1}>
          <View style={styles.c7_view2}>
            <Image
              style={{marginEnd: 10}}
              source={require('../../images/applepayp.png')}
            />
            <Text style={styles.text_c4_1}>Apple Pay</Text>
          </View>
          <Image source={require('../../images/tickp.png')} />
        </View>
      </View>
      <View style={styles.container8}>
        <Image
          style={{marginEnd: 10}}
          source={require('../../images/cash.png')}
        />
        <Text style={styles.text_c4_1}>Cash on delivery</Text>
      </View>

      <View style={styles.container7}>
        <Text style={styles.text_c4}>Order Sammery</Text>
        <View style={styles.c7_view1}>
          <Text style={styles.text_c4_1}>Subtotal</Text>
          <Text style={styles.text_c4_1}>$137.00</Text>
        </View>
        <View style={styles.c7_view1}>
          <Text style={styles.text_c4_1}>Tax</Text>
          <Text style={styles.text_c4_1}>$4.50</Text>
        </View>
        <View style={styles.c7_view1}>
          <Text style={styles.text_c4_1}>In-Store Pick Up</Text>
          <Text style={styles.text_c4_1}>$00.00</Text>
        </View>
      </View>
      <View style={styles.container8_1}>
        <Text style={[styles.text_c4_1, {fontWeight: '700'}]}>Total</Text>
        <Text style={[styles.text_c4_1, {fontWeight: '700'}]}>$141.50</Text>
      </View>

      <Pressable onPress={handlePay} style={styles.stylePress}>
        <Text style={styles.textPress1}>CheckOut$141.50</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },

  c1_text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    left: 130,
  },

  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 40,
  },

  c2_text: {
    fontSize: 22,
    fontWeight: '700',
    color: '#6D3805',
  },

  container3: {
    position: 'relative',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  textinput: {
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    paddingStart: 40,
    borderRadius: 6,
  },

  iconFind: {
    position: 'absolute',
    top: 17,
    left: 10,
  },

  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  text_c4: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },

  text_c4_1: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 4,
  },

  container5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopWidth: 0,
  },

  container6: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 30,
    paddingStart: 20,
  },

  view_c6: {
    flexDirection: 'row',
  },

  container7: {
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },

  container8: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 0,
  },
  container8_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF4E9',
    borderColor: '#FFE6CC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 0,
  },

  c7_view1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  c7_view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
    marginHorizontal: 16,
    marginTop: 60,
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  container9: {
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    borderColor: '#FFE6CC',
    backgroundColor: '#FFF4E9',
    marginTop: 50,
  },

  view_c9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  view_c9_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  container10: {
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    borderColor: '#FFE6CC',
    backgroundColor: '#FFF4E9',
    marginTop: 20,
  },

  styleTextInputDate: {
    borderWidth: 1,
    height: 48,
    color: '#6D3805A3',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    marginTop: 10,
    paddingHorizontal: 50,
    fontSize: 16,
  },

  viewDate: {
    position: 'relative',
  },

  imgDate1: {
    position: 'absolute',
    top: 25,
    left: 15,
  },

  imgDate2: {
    position: 'absolute',
    top: 30,
    right: 15,
  },

  container: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginEnd: -14,
  },

  btn: {
    width: '30%',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginTop: 10,
    marginEnd: 10,
    height: 48,
    alignItems: 'center',
    borderRadius: 7,
  },
  btnText: {
    textAlign: 'center',
    paddingTop: 13,
    fontSize: 13,
    color: '#6D3805',
  },
});
