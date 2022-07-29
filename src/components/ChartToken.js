import React from "react"
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native"

export default ChartToken = ({label, dataSet}) => {
    return (
        <View >
            <LineChart
                data={{
                labels: label,
                datasets: [
                    {
                        data: dataSet || []
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                withInnerLines={false}
                withVerticalLabels={false}
            />
        </View>
    )
}