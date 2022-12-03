import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLineChart from './components/chart/AppLineChart';
import AppHeader from './components/common/AppHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader></AppHeader>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <AppLineChart />
        <AppLineChart />
        <AppLineChart />
        <AppLineChart />
        <AppLineChart />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    alignItems: 'center',
    width: '100%',
    innerHeight: '100%'
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
});
