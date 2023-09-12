import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import { TextInput } from "react-native-web";
export default function App() {
  const [name, setName] = useState("shahzad");
  const [age, setAge] = useState("34");

  const textChange = (val) => {
    setName(val);
  };
  const ageChange = (val) => {
    setAge(val);
  };
  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput
        multiline
        placeholder="e.g. shahzad"
        onChangeText={textChange}
      />
      <Text>Enter your age</Text>
      <TextInput
        multiline
        placeholder="e.g. 33"
        keyboardType="numeric"
        onChangeText={ageChange}
      />
      <Text>
        my name {name} and my age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
