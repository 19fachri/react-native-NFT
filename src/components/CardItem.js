import React from "react"
import { View, Image, StyleSheet, Text, Pressable, Button } from "react-native"

export default CardItem = ({item, handleOnPress}) => {
    return (
        <Pressable onPress={() => handleOnPress(item.external_id)}>
            <View style={styles.card}>
                <Image 
                style={styles.imageCard}
                source={{
                    uri: item.image_url
                }} />
                <View>
                    <Text style={styles.TextCard}>{item.name}</Text>
                    <Text style={styles.TextCard}>Total : {item.totalToken}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
    },
    imageCard: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginRight: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    TextCard: {
        fontWeight: "bold",
        color: "black",
        fontSize: 16
    }
})