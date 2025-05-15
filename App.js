import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import HooksDemo from './components/HooksDemo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HooksDemo />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
