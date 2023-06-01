import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const EditProfile = () => {

    const [showPass, setshowPass] = useState(true)
    const togglePass = () => {
        setshowPass(!showPass);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Image source={require('../../images/back.png')} ></Image>
                    <Text style={styles.textHeader}>Edit Profile</Text>
                </View>
            </View>
            <View style={styles.editImgProfile}>
                <Image style={styles.imgProfile} source={require('../../images/imgProfile.jpg')}></Image>
            </View>

            <View style={styles.center}>
                <View>
                    <TextInput placeholder='Name' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/user.png')}></Image>
                </View>
                <View>
                    <TextInput placeholder='Email' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/email.png')}></Image>
                </View>
                <View>
                    <TextInput keyboardType='phone-pad' placeholder='Phone' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/phone.png')}></Image>
                </View>
                <View>
                    <TextInput secureTextEntry={showPass} placeholder='Address' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/address.png')}></Image>
                    {/* <TouchableOpacity style={styles.eye} onPress={togglePass}>
                        {showPass ? (
                            <Image source={require('../../images/eyeoff.png')} style={styles.hidden}></Image>
                        ) : (
                            <Image source={require('../../images/eye.png')} style={styles.hidden}></Image>
                        )}
                    </TouchableOpacity> */}
                </View>

                <TouchableOpacity style={styles.btnEdit}>
                    <Text style={styles.textEdit}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textFooter}>Do you want to change your personal information?</Text>
            </View>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#1A2232'
    },

    header:
    {
        flex: 0.1,
        marginTop: 20,
        marginLeft: 20

    },

    headerTitle:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textHeader:
    {
        color: 'white',
        width: '65%',
        fontSize: 20

    },


    editImgProfile:
    {
        flex: 0.25,
        alignItems: 'center',
    },

    imgProfile:
    {
        width: 150,
        height: 150,
        borderRadius: 75
    },

    center:
    {
        flex: 0.55,
    },

    editInputCenter:
    {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 30,
        position: 'relative',
        marginHorizontal: 25,
        paddingLeft: 50,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'yellow',
        borderColor: '#fff',
        marginTop: 15
    },

    icon:
    {
        position: 'absolute',
        top: 28,
        left: 40,
        tintColor: 'orange',
        width: 24,
        height: 24
    },

    eye:
    {
        position: 'absolute',
        top: 33,
        right: 40
    },

    hidden:
    {
        tintColor: 'orange',
        width: 24,
        height: 24
    },

    btnEdit:
    {
        backgroundColor: 'orange',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 25,
        marginTop: 30
    },

    textEdit:
    {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },

    footer:
    {
        flex: 0.1,
    },

    textFooter:
    {
        fontSize:14,
        textAlign:'center',
        color:'white',
        marginTop:10
    }
})