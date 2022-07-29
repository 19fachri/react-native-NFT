import React from "react"
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native"

export default DetailTokenHeader = ({collectionItem}) => {
    return (
        <>
            <ImageBackground style={style.imageBackground} blurRadius={5} source={{uri: collectionItem.banner_image_url}}>
                <Image style={style.imageCollection} source={{uri: collectionItem.image_url}} />
            </ImageBackground>
        </>
    )
}

const style = StyleSheet.create({
    imageBackground:{
        width:Dimensions.get("window").width,
        height:260,
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    imageCollection:{
        width:100,
        height:100,
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        borderColor: "white"
    }
})