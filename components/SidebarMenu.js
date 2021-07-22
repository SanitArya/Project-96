import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { DrawerItems } from "react-navigation-drawer";
import { Icon, Avatar } from "react-native-elements";

import * as ImagePicker from "expo-image-picker";

import firebase from "firebase";

import db from "../config";

export default class SidebarMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: firebase.auth().currentUser.email,
      image:
        "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/profile.jpg?alt=media&token=c248cad1-7779-4dcc-be50-ad7bee93499b",
      name: "",
      docId: "",
    };
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child("user_profile/" + imageName);
    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profile/" + imageName);
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({
          image: url,
        });
      })

      .catch((error) => {
        this.setState({
          image:
            "https://firebasestorage.googleapis.com/v0/b/motivational-app-7b650.appspot.com/o/profile.jpg?alt=media&token=c248cad1-7779-4dcc-be50-ad7bee93499b",
        });
      });
  };

  getUserProfile = () => {
    db.collection("users")
      .where("email_address", "==", this.state.userId)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + " " + doc.data().last_name,
          });
        });
      });
  };

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.7,
            alignItems: "center",
            backgroundColor: "#181098",
            marginTop: 40,
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size="large"
            onPress={() => {
              this.selectPicture();
            }}
            containerStyle={{
              marginTop: 30,
            }}
            showEditButton
          />
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              fontWeight: "bold",
              color: "white",
              fontStyle: "italic",
            }}
          >
            {this.state.name}
          </Text>
        </View>

        <DrawerItems {...this.props} />

        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              width: "100%",
              height: 30,
              padding: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Icon name="logout" color="#000" />
              <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
                {" "}
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
