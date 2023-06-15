import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'
import { Pressable } from 'react-native'
import { FlatList } from 'react-native'
import ItemTicket from './ItemTicket'
import { useContext, useState } from 'react'
import { AccountContext } from '../../context/AccountContext'
import config from "../../config/config";

const TicketHistory = (props) => {
    const {dataAccount} = useContext(AccountContext);
    const [listTickets, setlistTickets] = useState([]);
    const {navigation} = props;

    const handleBack = () => {
        navigation.goBack();
    }

    useEffect( () => {
        const email = dataAccount.email;
        let data = {email}
          const fetchData = async (data) => {
            let url = `${config.CONSTANTS.IP}api/ticket/getTicketByAccount`;
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            setlistTickets(res.Ticket)
            return res;
        };
        fetchData(data)
    
      return () => {
        
      }

    }, [])
    

    return (
        <View style={styles.container}>
            {/* toolbar */}
            <View style={styles.toolbar}>
                <Pressable onPress={handleBack}>
                    <Image style={styles.tb_iconBack} source={require('../../images/backArrow2.png')} />
                </Pressable>
                <Text style={styles.tb_title}>Ticket History</Text>
            </View>
            {/* danh sách vé */}
            <View>
                <FlatList
                    style={{marginBottom: 75}}
                    data={listTickets}
                    renderItem={({ item }) => <ItemTicket data={item}/>}
                    keyExtractor={item => item._id}
                />
            </View>
        </View>
    )
}

export default TicketHistory

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        flex: 1,
        backgroundColor: "#1A2232",
    },

    // toolbar
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        marginBottom: 20,
    },

    tb_iconBack: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        margin: 10,
    },

    tb_title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
})