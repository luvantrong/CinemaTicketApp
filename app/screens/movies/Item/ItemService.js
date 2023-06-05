import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React from 'react'

const ItemService = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../images/banner1.jpg')}/>
    </View>
  )
}

export default ItemService

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 2,
        height: 200,
        
    },

    image: {
        width: '80%',
        height: '60%',
        resizeMode: 'contain'
    }
})