import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Header } from "react-native-elements";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import { SafeAreaProvider } from "react-native-safe-area-context";

import db from "../config";
import firebase from "firebase";

var radio_props = [
  { label: "10-15", value: "10-15" },
  { label: "15-20", value: "15-20" },
  { label: "20-35", value: "20-35" },
  { label: "35-45", value: "35-45" },
  { label: "45-60", value: "45-60" },
  { label: "60 or greater", value: "60+" },
];

var radio_props2 = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

var radio_props3 = [
  { label: "Facebook", value: "fb" },
  { label: "Instagram", value: "in" },
  { label: "Whatsapp", value: "wa" },
  { label: "Twitter", value: "twit" },
  { label: "Other", value: "other" },
  { label: "None of the above", value: "none" },
];

var radio_props4 = [
  { label: "Less than 5", value: "5-" },
  { label: "5-10", value: "5-10" },
  { label: "10-15", value: "10-15" },
  { label: "More than 15", value: "15+" },
];

export default class SurveyScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: firebase.auth().currentUser.email,
      age: "10-15",
      gender: "male",
      socialApps: "fb",
      friends: "5-",
      feelings: "",
    };
  }

  storeDetails() {
    db.collection("details").add({
      email_address: this.state.userId,
      age: this.state.age,
      gender: this.state.gender,
      socialApps: this.state.socialApps,
      friends: this.state.friends,
      feelings: this.state.feelings,
    });

    this.props.navigation.navigate("AppDrawerNavigator");
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <ScrollView>
            <KeyboardAvoidingView>
              <View style={styles.heading}>
                <Text
                  style={[
                    styles.headingText,
                    { color: "white", fontSize: 30, marginBottom: 10 },
                  ]}
                >
                  FORM
                </Text>
                <Text
                  style={[styles.headingText, { color: "white", fontSize: 20 }]}
                >
                  Please fill the{" "}
                  <Text style={(styles.headingText, { color: "red" })}>
                    form to continue
                  </Text>
                </Text>
              </View>

              <View style={styles.body}>
                <Text
                  style={{ marginTop: 10, marginBottom: 10, paddingLeft: 20 }}
                >
                  Whats your age ?
                </Text>

                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  buttonSize={7}
                  buttonColor="black"
                  formHorizontal={false}
                  style={{ paddingLeft: 30 }}
                  onPress={(value) => {
                    this.setState({ age: value });
                  }}
                />

                <Text
                  style={{ marginTop: 10, marginBottom: 10, paddingLeft: 20 }}
                >
                  You are ?
                </Text>

                <RadioForm
                  radio_props={radio_props2}
                  initial={0}
                  buttonSize={7}
                  buttonColor="black"
                  formHorizontal={false}
                  style={{ paddingLeft: 30 }}
                  onPress={(value) => {
                    this.setState({ gender: value });
                  }}
                />

                <Text
                  style={{ marginTop: 10, marginBottom: 10, paddingLeft: 20 }}
                >
                  Which social media app you are using ?
                </Text>

                <RadioForm
                  radio_props={radio_props3}
                  initial={0}
                  buttonSize={7}
                  buttonColor="black"
                  formHorizontal={false}
                  style={{ paddingLeft: 30 }}
                  onPress={(value) => {
                    this.setState({ socialApps: value });
                  }}
                />

                <Text
                  style={{ marginTop: 10, marginBottom: 10, paddingLeft: 20 }}
                >
                  How many friends do you have ?
                </Text>

                <RadioForm
                  radio_props={radio_props4}
                  initial={0}
                  buttonSize={7}
                  buttonColor="black"
                  formHorizontal={false}
                  style={{ paddingLeft: 30 }}
                  onPress={(value) => {
                    this.setState({ friends: value });
                  }}
                />

                <Text
                  style={{ marginTop: 10, marginBottom: 10, paddingLeft: 20 }}
                >
                  Tell us about your feelings ?
                </Text>
                <TextInput
                  placeholder="Specify here..."
                  style={{
                    marginLeft: 20,
                    width: 200,
                    height: 40,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 5,
                  }}
                  onChangeText={(text) => {
                    this.setState({ feelings: text });
                  }}
                  value={this.state.feelings}
                />

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.storeDetails();
                  }}
                >
                  <Text>Submit</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
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
  heading: {
    alignSelf: "center",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontStyle: "italic",
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
    height: 800,
  },
  button: {
    margin: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FF4500",
    width: 200,
    height: 50,
  },
});
