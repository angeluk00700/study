import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={[styles.Text, {fontWeight:'bold'}]}>App</Text>
      </View>
      <Text></Text>
      <Text style={[styles.Text, {color:'black'}]}>welcome to my app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  Text: {
    color: "white",
    fontSize: 18,
  }
});
