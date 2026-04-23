import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio04() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header} />

      <View style={styles.main} />

      <View style={styles.row}>
        <View style={styles.card} />
        <View style={styles.card} />
      </View>

      <Text style={styles.footer}>Exercício 04 — DDM</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfe0',
    padding: 12,
  },

  header: {
    flex: 1,
    backgroundColor: '#2b2b3c',
    borderRadius: 10,
    marginBottom: 12,
  },

  main: {
    flex: 4,
    backgroundColor: '#1e1e2f',
    borderRadius: 10,
    marginBottom: 12,
  },

  row: {
    flex: 2,
    flexDirection: 'row',
    gap: 10, 
    marginBottom: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#2b2b3c',
    borderRadius: 10,
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});