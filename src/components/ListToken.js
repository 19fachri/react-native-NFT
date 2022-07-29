import React from "react"
import { View, Image, Text } from "react-native"

export default ListToken = ({tokens}) => {
    return (
        <View style={{flexDirection:"row", flexWrap: "wrap", justifyContent: "center"}}>
            {tokens.map((el, i) => {
                return (
                    <View key={i} style={{margin: 10}}>
                        <Image style={{width:140, height:140, borderRadius: 20}} source={{uri:el.image_url}} />
                    </View>
                )
            })}
        </View>
    )
}