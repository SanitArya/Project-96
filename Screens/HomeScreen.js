import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Icon } from "react-native-elements";

import { Video } from "expo-av";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View
          style={{
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
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2FJethalal's%20Prank%20Gives%20His%20Friends%20A%20Mini%20Heart%20Attack%20-%20Taarak%20Mehta%20Ka%20Ooltah%20Chashmah.mp4?alt=media&token=878d1a2a-9527-4bd8-960e-41081d329697",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2FNO%20EXCUSES%20-%20Best%20Motivational%20Video.mp4?alt=media&token=ce2c72eb-643e-4da9-b43c-615bd2125745",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2FBest%20powerful%20motivational%20video%20in%20hindi%20inspirational%20speech%20by%20mann%20ki%20aawaz%20motivation.mp4?alt=media&token=5bd570f6-24e7-4f30-9e40-b8aad4265c49",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2Fyt1s.com%20-%20Dev%20Mishra%20%E0%A4%8F%E0%A4%95%20Motivational%20Life%20Shorts%20DevMishra%20By%201%20Min%20Knowledge.mp4?alt=media&token=5995e9eb-9b0c-4113-b8a6-fe15031db3fe",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2FINDIA%F0%9F%87%AE%F0%9F%87%B3%20%E0%A4%95%E0%A5%80%20%E0%A4%B6%E0%A4%BE%E0%A4%A8%20%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A4%A2%E0%A4%BC%E0%A4%BE%E0%A4%88%F0%9F%8C%A0%20%E0%A4%9F%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A5%80%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%A8%E0%A5%87%20%E0%A4%88%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%A6%E0%A4%BE%E0%A4%B0%E0%A5%80%F0%9F%92%AA%20%E0%A4%95%E0%A5%80%20%E0%A4%AE%E0%A4%BF%E0%A4%B8%E0%A4%BE%E0%A4%B2%20%E0%A4%AA%E0%A5%87%E0%A4%B6%20%E0%A4%95%E0%A5%80%20%E0%A4%9F%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%B8%E0%A5%80%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A5%87%20%E0%A4%A8%E0%A5%87%20%E0%A4%95%E0%A5%88%E0%A4%B8%E0%A5%87_%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A5%87%23shorts.mp4?alt=media&token=660c87d7-ef5a-4251-a2ef-12c586c213b0",
                }}
              />
            </View>

            <View
              style={{
                width: "100%",
              }}
            >
              <Video
                style={styles.videoPlayer}
                useNativeControls
                resizeMode="contain"
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/Videos%2Fyt1s.com%20-%20Always%20Be%20Happy%20Whatsapp%20status%20%20Enjoy%20the%20every%20moment%20be%20happy%20%20%20Boys%20Attitude%20Status.mp4?alt=media&token=95b7b5b5-4204-45f8-af15-a1a2b4d3d199",
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

  videoPlayer: {
    width: "95%",

    alignSelf: "center",
    marginTop: 8,
  },
});
