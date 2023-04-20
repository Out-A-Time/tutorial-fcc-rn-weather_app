import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
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
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.tempMinMax}>{temp_min}</Text>
      <Text style={styles.tempMinMax}>{temp_max}</Text>
    </View>
  );
};

const Empty = () => (
  <View>
    <Text>Empty List. No items fetched.</Text>
  </View>
);

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
      <ImageBackground
        style={styles.image}
        source={require("../../assets/upcoming-background.jpg")}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          style
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ListEmptyComponent={<Empty />}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: "black", height: 1 }} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: "darkgrey",
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  tempMinMax: {
    color: "white",
    fontSize: 20,
  },
  image: {
    flex: 1,
    // height: 100,
    // width: 100,
  },
});

export default UpcomingWeather;
