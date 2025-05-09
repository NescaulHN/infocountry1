import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function JogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.jogoText}>Adivinha</Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/960px-Flag_of_Brazil.svg.png',
        }}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <Button title="Brasil" onPress={() => {}} />
        <Button title="Brazil" onPress={() => {}} />
        <Button title="Brassil" onPress={() => {}} />
        <Button title="Bostil" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jogoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row', // ou 'row' se quiser na horizontal
    flexDirection: 'column', // ou 'column' se quiser na vertical
    justifyContent: 'space-around',
    gap: 5, // no React Native 0.71+
  },
});
