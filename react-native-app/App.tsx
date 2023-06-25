import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const App = () => {
  const [isBtnDisable, setBtnDisable] = useState<boolean>(false);
  const clickButton = () => {
    Alert.alert("clicked");
    setBtnDisable(false);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={[
          styles.button,
          isBtnDisable ? styles.disabledButton : styles.activeButton,
        ]}
        // style={[styles.button]}
        disabled={isBtnDisable}
        onPress={() => {
          setBtnDisable(true);
          // clickBtnABC();
        }}
      >
        <Text style={styles.buttonText}>buttonABC</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          // buttonABC가 활성화인 경우에는 비활성화, 비활성화인 경우에는 활성화로 표시
          isBtnDisable ? styles.activeButton : styles.disabledButton,
        ]}
        disabled={!isBtnDisable}
        onPress={() => {
          setBtnDisable(false);
        }}
      >
        <Text style={styles.buttonText}>buttonA활성화</Text>
      </TouchableOpacity>

      <Text>버튼 disabled 상황 1 : {isBtnDisable ? "true" : "false"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "sky",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  activeButton: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "#000",
  },
});

export default App;
