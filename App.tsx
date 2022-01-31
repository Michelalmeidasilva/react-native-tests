import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/home/Home";
import DetailsScreen from "./src/screens/details/Details";
import { useRef } from "react";

const { Screen, Navigator } = createNativeStackNavigator();

export default function Navigation() {
  const options = {};
  const refNavigation = useRef();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen options={options} name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
