import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio02() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Card 1 - círculos */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </View>

      {/* Card 2 - quadrados */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.square} />
          <View style={styles.square} />
          <View style={styles.square} />
        </View>
      </View>

      {/* Card 3 - 4 retângulos */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
          <View style={styles.rect} />
        </View>
      </View>

      {/* Card 4 - 2 retângulos */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.rectSmall} />
          <View style={styles.rectSmall} />
        </View>
      </View>

      <Text style={styles.footer}>Exercício 02 — DDM</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdce6',
    padding: 16,
  },

  card: {
    backgroundColor: '#cfcfe0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1e1e2f',
  },

  square: {
    width: 40,
    height: 40,
    backgroundColor: '#1e1e2f',
    borderRadius: 6,
  },

  rect: {
    width: 50,
    height: 30,
    backgroundColor: '#1e1e2f',
    borderRadius: 6,
  },

  rectSmall: {
    width: 60,
    height: 30,
    backgroundColor: '#1e1e2f',
    borderRadius: 6,
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});