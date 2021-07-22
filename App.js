import * as React from "react";
import WelcomeScreen from "./Screens/WelcomeScreen";
import Form from "./Screens/Form";

import { AppDrawerNavigator } from "./components/AppDrawerNavigator";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Form: { screen: Form },
  AppDrawerNavigator: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppNavigator);
