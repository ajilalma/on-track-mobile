import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const AppLineChart = () => {
    return <LineChart
    data={{
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2,
        },
      ],
    }}
    width={Dimensions.get('window').width - 32}
    height={220}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 0,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 0,
    }}
  />
}

export default AppLineChart; 