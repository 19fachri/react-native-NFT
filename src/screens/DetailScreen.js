import { Dimensions, ScrollView, Text, Image, View } from "react-native";
import React, { useEffect, useState } from 'react';
import ListToken from "../components/ListToken";
import ChartToken from "../components/ChartToken";
import DetailTokenHeader from "../components/DetailTokenHeader";
import TextCostum from "../components/TextCostum";

export default DetailScreen = ({ navigation, route }) => {
    let tokens = route.params.token.map(el => {
      return {
        name: el.name,
        image_url: el.image_url
      }
    })
    let external_id = route.params.external_id

    const [collectionItem, setCollectionItem] = useState({})
    const [dataSet, setDataSet] = useState([])
    const [label, setLabel] = useState([])

    const getChartData = async () => {
      try {
        const response = await fetch('https://api-generator.retool.com/j3Iz08/collections')
        const collection = await response.json()
        let collect = collection.find(el => el.external_id == external_id)
        setCollectionItem(collect)
        const response2 = await fetch(`https://api-generator.retool.com/ELI42D/collection_stats?collection_id=${collect.id}`)
        const stats = await response2.json()
        setDataSet(stats.map(el => Number(el.floor_price_eth)))
        setLabel(stats.map(el => el.timestamp))
      } catch (error) {
        console.log(error);        
      }
    }

    useEffect(() => {
      getChartData()
    }, [])
    return (
      <ScrollView>
        <DetailTokenHeader collectionItem={collectionItem} />
        
        <View style={{flexDirection:"row", justifyContent:"space-evenly", backgroundColor:"white", height: 50, paddingHorizontal: 10, borderRadius: 10, alignItems:"center", marginVertical:10, borderRadius:30}}>
          <TextCostum label={"ITEMS"} value={tokens.length} />
          <TextCostum label={"FLOOR"} value={collectionItem.one_day_volume} />
          <TextCostum label={"TOTAL FLOOR"} value={collectionItem.total_volume} />
          <TextCostum label={"1 DAY"} value={collectionItem.one_day_change} />
        </View>
        { dataSet.length >= 1 && <ChartToken label={label} dataSet={dataSet} />}
        <ListToken tokens={tokens} />
      </ScrollView>
    );
  };