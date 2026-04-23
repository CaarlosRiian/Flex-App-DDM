import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Exercicio06() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.nome}>Nome</Text>
        <Text style={styles.subtitulo}>Subtítulo</Text>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Botão 1</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Botão 2</Text>
        </View>
      </View>

      <Text style={styles.footer}>Exercício 06 — DDM</Text>

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

  header: {
    backgroundColor: '#dcdce6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1e1e2f',
    marginBottom: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 12,
    color: '#555',
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#dcdce6',
    borderRadius: 12,
    padding: 12,
  },

  card: {
    width: 60,
    height: 40,
    backgroundColor: '#1e1e2f',
    borderRadius: 8,
  },

  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#dcdce6',
    borderRadius: 12,
    padding: 10,
  },

  button: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
  },

  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
});