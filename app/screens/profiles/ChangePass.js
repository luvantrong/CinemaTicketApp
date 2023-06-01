import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const ChangePass = () => {
    const [oldPass, setoldPass] = useState(true)
    const toggleOldPass = () => {
        setoldPass(!oldPass);
    }
    const [newPass, setnewPass] = useState(true)
    const toggleNewPass = () => {
        setnewPass(!newPass);
    }
    const [enterThePass, setenterThePass] = useState(true)
    const toggleEnterThePass = () => {
        setenterThePass(!enterThePass);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Image source={require('../../images/back.png')} ></Image>
                    <Text style={styles.textHeader}>Change Password</Text>
                </View>
            </View>
            <View style={styles.editImgChangePass}>
                <Image style={styles.imgProfile} source={require('../../images/imgProfile.jpg')}></Image>
            </View>

            <View style={styles.center}>
                <View>
                    <TextInput secureTextEntry={oldPass} placeholder='Old password' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/oldPass.png')}></Image>
                    <TouchableOpacity style={styles.eye} onPress={toggleOldPass}>
                        {oldPass ? (
                            <Image source={require('../../images/eyeoff.png')} style={styles.hidden}></Image>
                        ) : (
                            <Image source={require('../../images/eye.png')} style={styles.hidden}></Image>
                        )}
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput secureTextEnry={newPass} placeholder='New Password' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/newPass.png')}></Image>
                    <TouchableOpacity style={styles.eye} onPress={toggleNewPass}>
                        {newPass ? (
                            <Image source={require('../../images/eyeoff.png')} style={styles.hidden}></Image>
                        ) : (
                            <Image source={require('../../images/eye.png')} style={styles.hidden}></Image>
                        )}
                    </TouchableOpacity>
                </View>
             
                <View>
                    <TextInput secureTextEntry={enterThePass} placeholder='Enter the password' placeholderTextColor={'white'} style={styles.editInputCenter}></TextInput>
                    <Image style={styles.icon} source={require('../../images/newPass.png')}></Image>
                    <TouchableOpacity style={styles.eye} onPress={toggleEnterThePass}>
                        {enterThePass ? (
                            <Image source={require('../../images/eyeoff.png')} style={styles.hidden}></Image>
                        ) : (
                            <Image source={require('../../images/eye.png')} style={styles.hidden}></Image>
                        )}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnChangePass}>
                    <Text style={styles.textChangePass}>Change Password</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.textFooter}>You want to change password?</Text>
            </View>

        </View>
    )
}

export default ChangePass

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
        width: '75%',
        fontSize: 20

    },


    editImgChangePass:
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
        marginTop: 30
    },

    icon:
    {
        position: 'absolute',
        top: 43,
        left: 40,
        tintColor: 'orange',
        width: 24,
        height: 24
    },

    eye:
    {
        position: 'absolute',
        top: 45,
        right: 40
    },

    hidden:
    {
        tintColor: 'orange',
        width: 24,
        height: 24
    },

    btnChangePass:
    {
        backgroundColor: 'orange',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 25,
        marginTop: 60
    },

    textChangePass:
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