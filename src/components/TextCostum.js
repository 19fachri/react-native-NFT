import React from "react"
import { Text, View } from "react-native"

export default TextCostum = ({label, value}) => {
    return (
        <View style={{flexDirection:"column", color:"black"}}>
            <Text style={{color:"black", color:"gray"}}>{label}</Text>
            <Text style={{color:"black", fontWeight:"bold"}}>{Number(value).toFixed(2)}</Text>
        </View>
    )
}