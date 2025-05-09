import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>InfoCountry</Text>
      <Button
        title="Jogar"
        onPress={() => navigation.navigate('Jogo')}
      />
     <Button
        title="info"
        onPress={() => navigation.navigate('Jogo')}
      />
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
});
