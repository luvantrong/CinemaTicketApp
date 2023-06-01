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

const MyCards = props => {
  const {navigation} = props;
  const [listData, setListData] = useState([
    {id: 0, nameCard: 'My Card', numberCard: '5432 **** **** 6745'},
    {id: 1, nameCard: 'My Card', numberCard: '6589 **** **** 7850'},
    {id: 2, nameCard: 'Apple Pay', numberCard: ''},
  ]);

  const goNewCard = () => {
    navigation.navigate('NewCard');
  };

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
        onPress={() => console.log('You touched me')}>
        <View style={styles.view1}>
          <Image
            style={{marginEnd: 20}}
            source={require('../../images/logoMastercart.png')}
          />
          <View style={{marginTop: 15}}>
            <Text style={styles.textCard}>{data.item.nameCard}</Text>
            <Text style={styles.textIDCard}>5432 **** **** 6745</Text>
          </View>
        </View>
        <Image source={require('../../images/arrRight.png')} />
      </TouchableOpacity>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}>
        <Image source={require('../../images/iconDelete.png')} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.viewIconTitle}>
        <Image source={require('../../images/Arrow.png')} />
        <TouchableOpacity onPress={goNewCard}>
          <Image source={require('../../images/add2.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.textTitle}>My Cards</Text>

      {listData == '' ? (
        <View style={styles.viewNoCard}>
          <Image source={require('../../images/imgNocard.png')} />
          <Text style={styles.textNo1}>No Saved Card</Text>
          <Text style={styles.textNo2}>You can save your card info to</Text>
          <Text style={styles.textNo2}>make purchase easier, faster</Text>
        </View>
      ) : (
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-72}
          disableRightSwipe={true}
        />
      )}
    </View>
  );
};

export default MyCards;

const styles = StyleSheet.create({
  container: {
    marginBottom: 150,
  },
  viewIconTitle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
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

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textCard: {
    color: '#6D3805',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 13,
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
});
