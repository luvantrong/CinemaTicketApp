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
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import NumericInput from 'react-native-numeric-input';

const Favorite = () => {
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
        onPress={() => console.log('You touched me')}>
        <View style={styles.view11}>
          <Image
            style={styles.imgRender}
            source={require('../../images/applered2.png')}
          />
          <Text style={styles.textTitleName}>{data.item.nameCard}</Text>
          <TouchableOpacity style={styles.stlyeNumeric}>
            <Image source={require('../../images/giohang.png')} />
            <Text style={styles.textAddtocart}>Add to cart</Text>
          </TouchableOpacity>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>$24</Text>
            <Text
              style={[
                styles.textPrice,
                {fontSize: 15, marginTop: 3, marginStart: 5},
              ]}>
              st
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
        <Image source={require('../../images/iconDelete.png')} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Image
        style={{marginStart: 10, marginTop: 20}}
        source={require('../../images/Arrow.png')}
      />
      <Text style={styles.textTitle}>Favorite</Text>
      {listData == '' ? (
        <View style={styles.container}>
          <View style={styles.viewImgTop}>
            <Image source={require('../../images/imgfavorite.png')} />
          </View>

          <View style={styles.viewImgTop}>
            <Text style={styles.textWelcome}>Your heart is empty</Text>
            <View style={styles.viewTextWelcome2}>
              <Text style={styles.textWelcome2}>
                Start fall in love with some good{' '}
              </Text>
              <Text style={styles.textWelcome2}>goods</Text>
            </View>
          </View>

          <Pressable style={styles.stylePress}>
            <Text style={styles.textPress1}>Start shoping</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{marginTop: 20}}>
          <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-72}
            disableRightSwipe={true}
          />
        </View>
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },

  viewImgTop: {
    alignItems: 'center',
    marginTop: 12,
  },

  textWelcome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7F4E1D',
  },

  viewTextWelcome2: {
    alignItems: 'center',
    marginTop: 16,
  },

  textWelcome2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7F4E1D',
  },

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
  },

  textPress2: {
    color: '#FF5E00',
    fontSize: 17,
    fontWeight: '700',
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
    flexDirection: 'row',
    position: 'absolute',
    left: 90,
    top: 15,
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

  stylePress: {
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FF5E00',
    borderColor: '#FF5E00',
    marginHorizontal: 16,
  },

  textPress1: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  textAddtocart: {
    position: 'absolute',
    color: '#FF5E00',
    left: 23,
    fontSize: 14,
    fontWeight: '400',
  },
});
