import { StatusBar } from "expo-status-bar";
import CustomButton from "./CustomButton";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={[styles.Text, { fontWeight: "bold" }]}>App</Text>
      </View>
      <Text></Text>
      <Text style={[styles.Text, { color: "black" }]}>welcome to my app</Text>
      <Text></Text>

      <CustomButton
        title="button1"
        titleColor="white"
        onPress={() => alert("버튼 클릭")}
        buttonColor="green"
        disabled="false"
      />
      <CustomButton title="button2" titleColor="white" />
      <Button
        title="button3"
        buttonColor="#f194ff"
        fontSize="100"
        // disabled
        onPress={() => alert("disabled button")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
  },
  Text: {
    color: "white",
    fontSize: 18,
  },
  customButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  },
});
