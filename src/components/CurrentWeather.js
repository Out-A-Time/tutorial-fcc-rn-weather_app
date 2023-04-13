import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.tempMain_Text}>6</Text>
        <Text style={styles.tempFeels_Text}>Feels like 5</Text>
        <View style={styles.tempHighLow_View}>
          <Text style={styles.tempHighLow_Text}>High: 8 </Text>
          <Text style={styles.tempHighLow_Text}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.description_View}>
        <Text style={styles.description_Text}>Its sunny</Text>
        <Text style={styles.message_Text}>Its perfect t-shirt weather</Text>
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
  container: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tempMain_Text: {
    color: "black",
    fontSize: 48,
  },
  tempFeels_Text: {
    color: "black",
    fontSize: 30,
  },
  tempHighLow_View: {
    flexDirection: "row",
  },
  tempHighLow_Text: {
    color: "black",
    fontSize: 20,
  },
  description_View: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description_Text: {
    fontSize: 48,
  },
  message_Text: {
    fontSize: 30,
  },
});

export default CurrentWeather;
