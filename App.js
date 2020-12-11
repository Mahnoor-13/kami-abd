import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import AddPayment from "./Components/AddPayment";
import { loadAsync } from "expo-font";
console.disableYellowBox = true
export default function App() {
  let [fontLoaded, setFontLoaded] = useState(false);

  useEffect(async () => {
    let font = await loadAsync({
      Metropolisbold: require("./assets/fonts/metropolis.semi-bold.ttf"),

      Metropolis: require("./assets/fonts/metropolis.regular.ttf"),
    });
    setFontLoaded(true);
  }, []);

  return (
    <View style={styles.container}>{fontLoaded ? <AddPayment /> : <ActivityIndicator />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C31",
  },
});
