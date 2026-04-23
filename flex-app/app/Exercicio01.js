import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exercicio01() {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.innerBlock} />
      </View>

      <View style={styles.section}>
        <View style={styles.smallCard}>
          <View style={styles.innerBlock} />
        </View>

        <View style={styles.smallCard}>
          <View style={styles.innerBlock} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.innerBlock} />
      </View>

      <Text style={styles.footer}>Exercício 01 — DDM</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdce6',
    padding: 16,
  },

  section: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  button: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
  },

  card: {
    backgroundColor: '#cfcfe0',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },

  smallCard: {
    flex: 1,
    backgroundColor: '#cfcfe0',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 4,
  },

  innerBlock: {
    height: 70,
    backgroundColor: '#1e1e2f',
    borderRadius: 8,
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});