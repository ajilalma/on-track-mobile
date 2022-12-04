import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppHeader from './components/common/AppHeader';
import Progress from './components/progress/Progress';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#888',
  },
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <AppHeader></AppHeader>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <Progress></Progress>
          <Progress></Progress>
          <Progress></Progress>
          <Progress></Progress><Progress></Progress>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    width: '100%',
    innerHeight: '100%'
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
});
