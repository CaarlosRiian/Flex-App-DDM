import { View, StyleSheet } from 'react-native';
import CardEx03 from '../components/CardEx03';

export default function Exercicio03() {
  return (
    <View style={styles.container}>

      <CardEx03 />
      <CardEx03 />
      <CardEx03 />

    <Text style={styles.footer}>Exercício 02 — DDM</Text>
    </View>
    
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