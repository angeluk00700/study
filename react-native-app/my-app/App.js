import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={[styles.Text, {fontWeight:'bold'}]}>App</Text>
      </View>
      <Text></Text>
      <Text style={[styles.Text, {color:'black'}]}>welcome to my app</Text>
      <Text></Text>
      <CustomButton
        title='button'
        titleColor='white'
        butt
        onPress={() => Alert.alert('버튼 클릭')}
        // onPress={() => alert('회원가입 버튼')}
      />
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
  },
  customButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  }
});
