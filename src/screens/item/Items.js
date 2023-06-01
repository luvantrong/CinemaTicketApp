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
import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import NumericInput from 'react-native-numeric-input';

const Items = props => {
  const {navigation} = props;
  const [listData, setListData] = useState([
    {id: 0, nameCard: 'Red Apple', numberCard: '5432 **** **** 6745'},
    {id: 1, nameCard: 'Orginal Banana', numberCard: '6589 **** **** 7850'},
    {id: 2, nameCard: 'Avocado Bowl', numberCard: ''},
    {id: 3, nameCard: 'Salmon', numberCard: '5432 **** **** 6745'},
  ]);

  const [numeric, setNumeric] = useState();
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
    closeRow(rowMap, rowKey);
  };

  const renderItem = data => (
    <TouchableHighlight style={styles.rowFront}>
      <TouchableOpacity
        style={styles.container2}
        onPress={() => navigation.navigate('DetailCart')}>
        <View style={styles.view11}>
          <Image
            style={styles.imgRender}
            source={require('./images/applered2.png')}
          />
          <Text style={styles.textTitleName}>{data.item.nameCard}</Text>
          <View style={styles.stlyeNumeric}>
            <NumericInput
              //   value={numeric}
              onChange={value => setNumeric({value})}
              //   onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={100}
              totalHeight={30}
              iconSize={25}
              step={1}
              valueType="real"
              rounded
              textColor="#6D3805"
              rightButtonBackgroundColor="white"
              leftButtonBackgroundColor="white"
              minValue={0}
            />
          </View>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>$ 5.99</Text>
            <Text
              style={[
                styles.textPrice,
                {fontSize: 15, marginTop: 3, marginStart: 5},
              ]}>
              kg
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}>
        <Image source={require('./images/iconDelete.png')} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={{marginStart: 20, marginTop: 20}}
          source={require('./images/Arrow.png')}
        />
        <Text style={styles.textTitle}>Itemes</Text>
      </View>
      <View style={styles.view2}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-72}
          disableRightSwipe={true}
        />
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },

  view1: {
    flex: 0.1,
  },

  view2: {
    flex: 0.9,
    marginTop: 30,
  },

  textTitle: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    height: 29,
    lineHeight: 29,
    color: '#FF5E00',
    letterSpacing: -0.165,
    textAlign: 'center',
    marginBottom: 50,
  },

  container2: {
    width: '100%',
    height: 98,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#804F1E24',
  },

  view11: {
    position: 'relative',
  },

  textCard: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
  },

  textIDCard: {
    color: '#6D3805',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 11,
  },

  viewNoCard: {
    marginTop: -90,
    alignItems: 'center',
  },

  textNo1: {
    color: '#6D3805',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },

  textNo2: {
    color: '#6D3805',
    fontSize: 16,
    fontWeight: '400',
  },

  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 98,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 70,
  },

  backRightBtnRight: {
    backgroundColor: '#A42B32',
    right: 0,
  },
  trash: {
    height: 25,
    width: 25,
  },

  imgRender: {
    position: 'absolute',
    top: -35,
  },

  textTitleName: {
    position: 'absolute',
    left: 90,
    top: -25,
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
  },

  textInPutItem: {
    position: 'absolute',
    left: 140,
    borderWidth: 1,
    width: 98,
    height: 30,
    fontSize: 18,
    top: 10,
    textAlign: 'center',
    paddingHorizontal: 35,
    borderRadius: 30,
    alignItems: 'center',
    padding: 3,
  },

  stlyeNumeric: {
    position: 'absolute',
    left: 140,
    top: 10,
  },

  viewPrice: {
    flexDirection: 'row',
    position: 'absolute',
    left: 280,
    top: 18,
  },

  textPrice: {
    color: '#6D3805',
    fontWeight: '400',
    fontSize: 18,
  },
});
