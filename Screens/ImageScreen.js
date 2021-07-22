import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Icon, Image } from "react-native-elements";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default class ImageScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
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
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F01.jfif?alt=media&token=e9865dc0-e31d-43c5-8a16-9bb2bacd3f02",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 350 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F02.png?alt=media&token=64cf3445-6b31-472c-aef5-855b4b519cd0",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 200 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F04.jfif?alt=media&token=e9c5f964-f377-45d8-b685-0f8c1711ab8f",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 300 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F06.jfif?alt=media&token=99d01554-58bb-4263-8153-345efde2191e",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 300 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F05.png?alt=media&token=e059e3bb-bf03-4038-b830-41b4c22d6f6d",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
                padding: 7,
                alignSelf: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 300 }}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/images%2F03.png?alt=media&token=9db629c6-1238-4bee-bb41-46e9d5f377cd",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
