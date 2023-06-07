import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Payment = () => {
    return (
        <ScrollView style={styles.Container}>
            <View style={{ padding: 10 }}>
                <View style={styles.Headers}>
                    <Image source={require('../../images/poster1.jpg')} style={styles.imgFilm} />
                    <View>
                        <Text style={styles.textFilm}>SPIDERMAN</Text>
                        <Text style={styles.textHeader}>Thứ 4, 7 Thg 6, 2023</Text>
                        <Text style={styles.textHeader}>15:30 - 18:16</Text>
                        <Text style={styles.textHeader}>Seat: F8</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textHeader}>MY COMBO</Text>
                            <Text style={styles.textHeader}> x1</Text>
                        </View>
                        <Text style={styles.textPriceHeader}>Tổng thanh toán: 100.000 VND</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.textTitle}>THÔNG TIN VÉ</Text>
                    <View style={styles.view}>

                        <Text style={styles.text}>Số lượng</Text>

                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text}>Tổng</Text>
                        <Text style={styles.text}>100.000 VND</Text>
                    </View>
                    <Text style={styles.textTitle}>BẮP NƯỚC (TÙY CHỌN)</Text>
                    <View style={styles.view}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../images/popcorn.jpg')} style={{ width: 30, height: 30, marginRight: 5 }} />
                            <Text style={styles.text}>MY COMBO</Text>
                        </View>
                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text}>Tổng</Text>
                        <Text style={styles.text}>100.000 VND</Text>
                    </View>

                    <Text style={styles.textTitle}>THANH TOÁN</Text>
                    <View style={styles.view}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../images/creditcard.png')} style={{ width: 30, height: 30, marginRight: 5 }} />
                            <Text style={styles.text}>ATM Card (Thẻ nội địa)</Text>
                        </View>
                        <Image source={require('../../images/checkmark.png')} style={{ width: 20, height: 20 }} />

                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Text >Tôi đồng ý với điều khoản sử dụng và đang mua vé cho người có độ tuổi phù hợp.</Text>
                        <Pressable style={styles.button}>
                            <Text style={{color:'white'}}>Tôi đồng ý và tiếp tục</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </ScrollView>


    )
}

export default Payment

const styles = StyleSheet.create({
    Container: {

        backgroundColor: '#e6e6e6',
    },
    Headers: {
        flexDirection: "row",
        marginLeft: -10,
        marginRight: -10,
        padding: 10,
        backgroundColor: 'white',
    },
    imgFilm: {
        height: 150,
        width: 100,
        marginRight: 10,
        borderRadius: 10,
    },
    textFilm: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    textHeader: {
        color: 'black',
    },
    textPriceHeader: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    view: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginLeft: -10,
        marginRight: -10,
        padding: 10,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,

    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#e6e6e6',
        padding: 5,
        paddingTop: 15,

    },

    text: {
        fontWeight: '450',
        marginTop: 5,

    },
    button: {
        backgroundColor: 'orange',

        height: 40,
        borderRadius: 20,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        
    }

})

