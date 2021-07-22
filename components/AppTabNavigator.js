import * as React from "react";

import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../Screens/HomeScreen";
import ImageScreen from "../Screens/ImageScreen";

export const AppTabNavigator = createBottomTabNavigator({
  ImageScreen: {
    screen: ImageScreen,
    navigationOptions: {
      tabBarLabel: "ImageScreen",
    },
  },

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HomeScreen",
    },
  },
});
