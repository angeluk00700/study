import React from "react";
import { View, Text, Alert } from "react-native";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const getFullName = (firstName: string, lastName: string) => {
  return firstName + " " + lastName;
};

/**
 * 주제 입력창
 * 1단계 입력창, 확인버튼, 추가버튼
 * 2단계 입력창, 확인버튼, 추가버튼
 * 추가버튼 누를때마다 위와 같은 단계를 반복
 *
 */

/**
 * 주제 표시창
 * 1단계 표시창
 * 단계가 늘어날때마다 위와 같은 표시창이 반복
 */

type InputTitle = {
  title: string;
};
const MainDisp = () => {
  return (
    <View>
      <TitleInput title="주제입력2"></TitleInput>
    </View>
  );
};

const TitleInput = (props: InputTitle) => {
  return (
    <View>
      <TextInput label={props.title} style={{ margin: 20 }} />
    </View>
  );
};

const OkBtn = () => {
  return <View></View>;
};

export default MainDisp;
