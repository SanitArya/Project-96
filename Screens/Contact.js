import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

import db from "../config";
import firebase from "firebase";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: firebase.auth().currentUser.email,
      subject: "",
      details: "",
    };
  }

  submit = () => {
    if (this.state.emailId === "") {
      alert("Please enter your email address");
    } else if (this.state.details === "") {
      alert("Please tell us about your problem");
    } else {
      db.collection("contact").add({
        email_address: this.state.emailId,
        subject: this.state.subject,
        details: this.state.details,
      });

      this.setState({
        subject: "",
        details: "",
      });
    }
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={{ marginTop: 0 }}>
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
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text
              style={[
                styles.headingText,
                {
                  color: "white",
                  fontSize: 30,
                  marginBottom: 10,
                  textDecorationLine: "underline",
                },
              ]}
            >
              Contact-Us
            </Text>
          </View>
          <View style={styles.body}>
            <TextInput
              placeholder="Email Address"
              style={styles.input1}
              onChangeText={(text) => {
                this.setState({ emailId: text });
              }}
              value={this.state.emailId}
            />
            <TextInput
              placeholder="Subject"
              onChangeText={(text) => {
                this.setState({ subject: text });
              }}
              value={this.state.subject}
              style={styles.input1}
            />

            <TextInput
              placeholder="Write feedback here"
              multiline
              onChangeText={(text) => {
                this.setState({ details: text });
              }}
              value={this.state.details}
              style={styles.input2}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.submit();
              }}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
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
    textAlign: "center",
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
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  input1: {
    borderWidth: 1,
    width: 250,
    height: 40,
    marginBottom: 10,
    borderRadius: 8,
    paddingLeft: 10,
  },
  input2: {
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    height: 150,
    borderRadius: 8,
    paddingLeft: 10,
    paddingTop: 10,
  },
  button: {
    margin: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "red",
    width: 200,
    height: 50,
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
});
