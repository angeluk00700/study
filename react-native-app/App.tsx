import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const App = () => {
  const [isBtnDisable='true', setBtnDisable] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={[styles.button, isBtnDisable && styles.activeButton]}
        disabled={!isBtnDisable}
        onPress={() => {
          setBtnDisable(false)
        }}
      >
        <Text style={styles.buttonText}>buttonAAA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, isBtnDisable && styles.activeButton]}
        disabled={!isBtnDisable}
        onPress={() => {
          setBtnDisable(true)
        }}
      >
        <Text style={styles.buttonText}>buttonA활성화</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DCEDC8',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  activeButton: {
    backgroundColor: '#B2EBF2',
  },
  buttonText: {
    color: '#000',
  },
});

export default App;