import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardEx03() {
  return (
    <View style={styles.card}>

      {/* Topo */}
      <View style={styles.top}>
        <View style={styles.avatar} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Título</Text>
          <Text style={styles.subtitle}>Subtítulo</Text>
        </View>
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#cfcfe0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1e1e2f',
    marginRight: 10,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e1e2f',
  },

  subtitle: {
    fontSize: 12,
    color: '#555',
  },

  button: {
    backgroundColor: '#1e1e2f',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
  },
});