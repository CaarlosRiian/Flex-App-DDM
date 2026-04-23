import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Exercícios</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio01')}
      >
        <Text style={styles.buttonText}>Exercício 01</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio02')}
      >
        <Text style={styles.buttonText}>Exercício 02</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio03')}
      >
        <Text style={styles.buttonText}>Exercício 03</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio04')}
      >
        <Text style={styles.buttonText}>Exercício 04</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio05')}
      >
        <Text style={styles.buttonText}>Exercício 05</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('./Exercicio06')}
      >
        <Text style={styles.buttonText}>Exercício 06</Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});