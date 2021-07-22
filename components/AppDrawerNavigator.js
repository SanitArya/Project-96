import * as React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Icon } from "react-native-elements";

import SidebarMenu from "./SidebarMenu";
import { AppTabNavigator } from "./AppTabNavigator";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreen";
import Contact from "../Screens/Contact";
import AboutScreen from "../Screens/AboutScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerIcon: (
          <Icon name="home" size={20} type="font-awesome" color="#000" />
        ),
      },
    },

    Profile: {
      screen: SettingScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="user" size={20} type="font-awesome" color="#000" />
        ),
      },
    },

    Feedback: {
      screen: Contact,
      navigationOptions: {
        drawerIcon: (
          <Icon name="comments" size={20} type="font-awesome" color="#000" />
        ),
      },
    },

    "About Us": {
      screen: AboutScreen,
      navigationOptions: {
        drawerIcon: (
          <Icon name="users" size={20} type="font-awesome" color="#000" />
        ),
      },
    },
  },

  {
    contentComponent: SidebarMenu,
  },

  {
    initialRouteName: "Home",
  }
);
