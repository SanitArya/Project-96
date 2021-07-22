import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Input, Header, Icon } from "react-native-elements";

import firebase from "firebase";
import db from "../config";

export default class SettingScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      docId: "",
    };
  }

  getUserDetails = () => {
    var user = firebase.auth().currentUser;
    var email = user.email;
    db.collection("users")
      .where("email_address", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            firstName: data.first_name,
            lastName: data.last_name,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
    });
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ marginTop: 20, backgroundColor: "white", flex: 1 }}>
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
          <View style={styles.container}>
            <KeyboardAvoidingView>
              <View style={styles.heading}>
                <Text style={styles.headingText}>Profile Setting</Text>
              </View>
              <View style={styles.body}>
                <Input
                  placeholder="First Name"
                  style={{ marginTop: 0 }}
                  value={this.state.firstName}
                  onChangeText={(text) => {
                    this.setState({ firstName: text });
                  }}
                />
                <Input
                  placeholder="Last Name"
                  onChangeText={(text) => {
                    this.setState({ lastName: text });
                  }}
                  value={this.state.lastName}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.updateUserDetails();
                  }}
                >
                  <Text>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181098",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
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
    width: 300,
    height: 300,
    alignItems: "center",
    //  alignItems:'center',
    justifyContent: "center",
  },

  heading: {
    alignSelf: "center",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontStyle: "italic",
    fontSize: 30,
    color: "white",
  },
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "red",
    height: 40,
    width: 200,
    marginTop: 30,
  },
});
