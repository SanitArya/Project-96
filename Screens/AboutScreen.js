import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, marginTop: 0, backgroundColor: "white" }}>
          <Header
            backgroundColor="#181098"
            leftComponent={
              <Icon
                name="bars"
                type="font-awesome"
                color="white"
                size={28}
                onPress={() => {
                  this.props.navigation.toggleDrawer();
                }}
                style={{ marginTop: 3 }}
              />
            }
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#181098",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                marginBottom: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: 30,
                  color: "white",
                  textDecorationLine: "underline",
                }}
              >
                About Us
              </Text>
            </View>
            <View
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                backgroundColor: "white",
                borderRadius: 10,
                margin: 15,
                padding: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Hello Friends,
                </Text>
                <Text> </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Thanks for downloading this app.
                </Text>
                <Text> </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  This app is created by Sanit Arya. This app refered to those
                  people who demotivated from their life. In this app, they will
                  get some motivational video by which, they can be motivate and
                  can success in their life.
                </Text>
                <Text> </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  The videos in this app are taken from youtube and some other
                  sources.
                </Text>
                <Text> </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  If you have any complaint, issue, problem or want to give
                  feedback, you can go to feedback section and can inform us. We
                  will solve all your problems if you have.
                </Text>

                <Text> </Text>
                <Text
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  Thanks for reading it.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
