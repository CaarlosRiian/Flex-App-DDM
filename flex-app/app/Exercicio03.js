import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardEx03 from '../components/CardEx03';

export default function Exercicio03() {
  return (
    <SafeAreaView style={styles.container}>

      <CardEx03 />
      <CardEx03 />
      <CardEx03 />

      <Text style={styles.footer}>Exercício 03 — DDM</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdce6',
    padding: 16,
  },
  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});