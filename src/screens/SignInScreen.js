import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../../assets/images/Logo.png";
import CustomImput from "../components/customImput/customImput";
const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox} />
      <Image source={Logo} style={styles.logo} />
      <Text>Sign In Screen</Text>
      <CustomImput />
      <View style={styles.bottomBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBox: {
    backgroundColor: "rgba(191, 241, 236, 1)", // Set your desired color
    height: 126, // Set the height of the top box
    width: 450,
  },
  logo: {
    marginTop: -125,
    height: 125,
    width: 170,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomBox: {
    backgroundColor: "rgba(191, 241, 236, 1)", // Set your desired color
    height: 125, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
  },
});

export default SignInScreen;
