import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
    dt_txt: "2022-08-29 15:00:00",
  },
  {
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
    dt_txt: "2022-08-30 15:00:00",
  },
  {
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
    dt_txt: "2022-08-31 15:00:00",
  },
];

const Item = (props) => {
  const { dt_txt, temp_min, temp_max, condition } = props;
  return (
    <View>
      <Feather name={"sun"} size={50} color={"red"} />
      <Text>{dt_txt}</Text>
      <Text>{temp_min}</Text>
      <Text>{temp_max}</Text>
      <Text>----------------</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      temp_min={item.main.temp_min}
      temp_max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        style
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UpcomingWeather;
