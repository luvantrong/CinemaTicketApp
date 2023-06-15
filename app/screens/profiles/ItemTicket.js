import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const ItemTicket = (props) => {
    const {data} = props;
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image style={styles.image} source={{uri: data.image}} />
            </View>
            <View style={styles.betweenContainer}>
                <Text style={styles.bc_time}>{data.ngayXem}</Text>
                <Text numberOfLines={1} style={styles.bc_name}>{data.tenPhim}</Text>
                <Text style={styles.bc_service}>{data.bapRang}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.rc_mine}>{data.suatXem}</Text>
                <Text style={styles.rc_mine}>{data.soGhe}</Text>
            </View>
        </View>
    )
}

export default ItemTicket

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 14,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        margin: 7,
        borderRadius: 10,
        padding: 5,
    },

    image: {
        width: 80,
        height: 100,
        resizeMode: 'stretch',
        borderRadius: 10,
    },

    leftContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    betweenContainer: {
        flex: 2,
        marginLeft: 10,
    },

    bc_time: {
        fontSize: 14,
        fontWeight: '400',
    },

    bc_name: {
        width: '100%',
        fontSize: 18,
        fontWeight: '600',
        color: 'orange',
    },

    bc_service: {
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5,
    },

    rightContainer: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'flex-end',
    },

    rc_mine: {
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 5,
        margin: 5,
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
    },
})