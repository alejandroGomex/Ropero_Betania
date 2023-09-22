import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomImput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuario" style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default CustomImput;
