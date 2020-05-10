import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function List({ item, pressHandler }) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => pressHandler(item.key)}
    >
      <Text style={styles.item}>{item.task}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: "row",
    flex: 1,
    borderStyle: "dashed",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  item: {
    fontWeight: "490",
  },
});

export default List;
