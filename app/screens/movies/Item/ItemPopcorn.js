import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,

} from "react-native";
import React from "react";
import NumericInput from "react-native-numeric-input";

const ItemPopcorn = (props) => {
    const { data, navigation } = props;
    const [popcorn, setpopcorn] = React.useState(0);
    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.Image} />
            <View>
                <Text style={styles.TextTitle} numberOfLines={1}>{data.name} </Text>
                <Text style={styles.Text} numberOfLines={2}>{data.content}</Text>
                <Text style={styles.TextPrice}>Giá: {data.price}VNĐ</Text>
                <View style={styles.ViewNumeric}>
                    <NumericInput
                        value={popcorn}
                        onChange={(value) => {
                            // setNumeric({value});
                            setpopcorn(value);
                        }}
                        //   onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                        totalWidth={90}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        valueType="real"
                        rounded
                        textColor="orange"
                        rightButtonBackgroundColor="orange"
                        leftButtonBackgroundColor="orange"
                        minValue={0}
                        
                        
                    />
                </View>


            </View>


        </View>
    );
};

export default ItemPopcorn;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        margin: 5,
    },
    Image: {
        width: 120,
        height: 120,
        marginRight: 10,
    },
    TextTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
        marginBottom: 5,
        width: 230,
    },
    Text: {
        color: "black",
        width: 230,
    },
    TextPrice: {
        fontWeight: "500",
        fontSize: 18,
        color: "black",
        marginBottom: 5,
    },
    ViewNumeric: {
        alignItems: "center",
    }

})