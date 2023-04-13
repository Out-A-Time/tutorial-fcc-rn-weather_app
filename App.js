import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.containerUp}>
        <Text>Current Weather</Text>
        <Text>6</Text>
      </View>
      <View style={styles.containerMiddle}>
        <Text>Some other header</Text>
      </View>
      <View style={styles.containerDown}>
        <Text>Some other header</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 10,
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  containerUp: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
  },
  containerMiddle: {
    backgroundColor: "orange",
    flex: 1,
    alignItems: "flex-end",
  },
  containerDown: {
    backgroundColor: "red",
    flex: 2,
    justifyContent: "center",
  },
});

export default App;
