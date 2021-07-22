import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";

import { Input } from "react-native-elements";

import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      isModalVisible: false,
    };
  }

  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.props.navigation.navigate("AppDrawerNavigator");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
        console.log(errorMessage);
      });
  };

  signup = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      Alert.alert("Password didn't matched");
      console.log("Password didn't matched");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email_address: this.state.emailAddress,
            password: this.state.password,
          });

          this.setState({
            isModalVisible: false,
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
          });

          console.log("Sign up successfull...");
          Alert.alert("Sign up successfull...");

          this.props.navigation.navigate("Form");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.heading}>
            <Text
              style={[
                styles.headingText,
                { color: "white", fontSize: 30, marginBottom: 10 },
              ]}
            >
              WELCOME
            </Text>
            <Text
              style={[styles.headingText, { color: "white", fontSize: 20 }]}
            >
              Login to <Text style={{ color: "red" }}>your account</Text>
            </Text>
          </View>

          <View style={styles.body}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              style={[
                styles.loginBox,
                {
                  marginTop: 50,
                  backgroundColor: "#EBF0FC",
                  borderRadius: 50,
                  padding: 10,
                },
              ]}
              onChangeText={(text) => {
                this.setState({
                  emailAddress: text.toLowerCase(),
                });
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={[
                styles.loginBox,
                { backgroundColor: "#EBF0FC", borderRadius: 50, padding: 10 },
              ]}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />

            <TouchableOpacity
              onPress={() => {
                this.login(this.state.emailAddress, this.state.password);
              }}
              style={[
                styles.button,
                {
                  backgroundColor: "red",
                  height: 40,
                  width: 200,
                  marginTop: 30,
                },
              ]}
            >
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({ isModalVisible: true });
              }}
              style={styles.button}
            >
              <Text style={{ color: "black", fontSize: 15 }}>
                Don't have an account? Register here
              </Text>
            </TouchableOpacity>

            <View style={styles.centeredView}>
              <Modal
                transparent={true}
                visible={this.state.isModalVisible}
                animationType="slide"
              >
                <ScrollView>
                  <KeyboardAvoidingView>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text
                          style={[
                            styles.headingText,
                            {
                              color: "black",
                              fontSize: 20,
                              marginBottom: 50,
                            },
                          ]}
                        >
                          Register to{" "}
                          <Text style={{ color: "red" }}>your account</Text>
                        </Text>
                        <Input
                          placeholder="First Name"
                          onChangeText={(text) => {
                            this.setState({
                              firstName: text,
                            });
                          }}
                          value={this.state.firstName}
                        />
                        <Input
                          placeholder="Last Name"
                          onChangeText={(text) => {
                            this.setState({
                              lastName: text,
                            });
                          }}
                          value={this.state.lastName}
                        />
                        <Input
                          placeholder="Email Address"
                          onChangeText={(text) => {
                            this.setState({
                              emailAddress: text,
                            });
                          }}
                          value={this.state.emailAddress}
                        />
                        <Input
                          placeholder="Password"
                          onChangeText={(text) => {
                            this.setState({
                              password: text,
                            });
                          }}
                          value={this.state.password}
                        />
                        <Input
                          placeholder="Confirm password"
                          onChangeText={(text) => {
                            this.setState({
                              confirmPassword: text,
                            });
                          }}
                          value={this.state.confirmPassword}
                        />
                        <TouchableOpacity
                          style={[
                            styles.button,
                            {
                              backgroundColor: "red",
                              width: 200,
                              height: 50,
                            },
                          ]}
                          onPress={() => {
                            this.signup(
                              this.state.emailAddress,
                              this.state.password,
                              this.state.confirmPassword
                            );
                          }}
                        >
                          <Text>Register now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ isModalVisible: false });
                          }}
                        >
                          <Text style={{ textDecorationLine: "underline" }}>
                            Go back
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </KeyboardAvoidingView>
                </ScrollView>
              </Modal>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
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
  },
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  loginBox: {
    marginTop: 10,
    width: 280,
    height: 40,
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

  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
