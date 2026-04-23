import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio05() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.top}>
        <View style={styles.search} />
        <View style={styles.button} />
      </View>

      <View style={styles.grid}>
        
        <View style={styles.row}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>

        <View style={styles.row}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>

        <View style={styles.row}>
          <View style={styles.card} />
          <View style={styles.card} />
        </View>

      </View>

      <Text style={styles.footer}>Exercício 05 — DDM</Text>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfe0',
    padding: 12,
    justifyContent: 'space-between',
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dcdce6',
    padding: 10,
    borderRadius: 12,
  },

  search: {
    flex: 1,
    height: 40,
    backgroundColor: '#bfc3d6',
    borderRadius: 20,
    marginRight: 10,
  },

  button: {
    width: 50,
    height: 40,
    backgroundColor: '#1e1e2f',
    borderRadius: 8,
  },

  grid: {
    flex: 1,
    backgroundColor: '#dcdce6',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between',
    marginVertical: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    flex: 1,
    height: 90,
    backgroundColor: '#1e1e2f',
    borderRadius: 10,
    marginHorizontal: 5,
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});