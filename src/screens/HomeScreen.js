import { Image, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import CardItem from "../components/CardItem";


export default HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([])
  const [tokens, setTokens] = useState([])
  const getItemsCollections = async () => {
    try {
      const response = await fetch(
        'https://api-generator.retool.com/jlEsLB/wallet_content'
      );
      const json = await response.json();
      let totalTokenOwned = {}
      json.forEach(el => {
        el.collection_json = JSON.parse(el.collection_json)
        totalTokenOwned[el.collection_json.name] = {
          name: el.collection_json.name,
          image_url: el.collection_json.image_url,
          external_id: el.collection_json.external_id,
          totalToken: totalTokenOwned[el.collection_json.name] ? totalTokenOwned[el.collection_json.name].totalToken + 1 : 1,
        }
      })
      setTokens(json)
      let collectionItems = []
      for (const key in totalTokenOwned) {
        collectionItems.push(totalTokenOwned[key])
      }
      setItems(collectionItems)
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnPress = (key) => {
    let token = tokens.filter(el => el.collection_json.external_id == key)
    navigation.navigate("Detail", {external_id: key, token: token})
  }

  useEffect(() => {
    getItemsCollections()
  }, [])
    return (
      <ScrollView>
        {items.map((el, i) => {
          return <CardItem item={el} key={i} handleOnPress={handleOnPress}/>
        })}
      </ScrollView>
    );
  };