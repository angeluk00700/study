import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

const Cat = () => {
  return (
    <View>
      <Text>hello world. my name is {getFullName("kay", "jay")}</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 2 }}
        defaultValue="입력해주세요"
      ></TextInput>
      <Text></Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Text>루프</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
};

export default Cafe;
