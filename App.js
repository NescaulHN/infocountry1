import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá!</Text>
      <Button
        title="Jogar"
        onPress={() => navigation.navigate('Jogo')}
      />
    </View>
  );
}

function JogoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.jogoText}>Jogo</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jogo" component={JogoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  },
});