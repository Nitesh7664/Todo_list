import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Your TODO's</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,
    paddingTop: 48,
    backgroundColor: "coral",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  title: {
    margin: 10,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
