import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

function Input({ addTaskHandler }) {
  const [todo, setTodo] = useState("");

  const inputHandler = (val) => {
    setTodo(val);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your task ...."
        onChangeText={inputHandler}
      />
      <Button color="coral" title="ADD" onPress={() => addTaskHandler(todo)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    width: "80%",
    borderBottomColor: "#777",
    borderBottomWidth: 2,
    padding: 5,
  },
  button: {
    width: "15%",
    padding: 5,
    backgroundColor: "green",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
  },
});

export default Input;
