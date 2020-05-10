import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTaskHandler = (todo) => {
    if (todo.length < 1) {
      Alert.alert("OOPS", "Todo msg length should be greater than one char", [
        {
          text: "OK",
        },
      ]);
    } else {
      console.log("happy" + todo);
      setTodoList([{ task: todo, key: Math.random().toString() }, ...todoList]);
    }
  };

  const pressHandler = (key) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <Input addTaskHandler={addTaskHandler} />
        <View style={styles.list}>
          <FlatList
            data={todoList}
            renderItem={({ item }) => {
              return <List item={item} pressHandler={pressHandler} />;
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  whiteText: {
    color: "#fff",
  },
  list: {
    marginTop: 15,
    flex: 1,
    padding: 10,
  },
});
