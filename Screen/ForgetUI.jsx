import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const scale = (size) => (width / 375) * size;

export default function ForgetUI() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();

  function loginHandler() {
    // navigation.navigate("Login");
  }
  function goToLogin() {
    navigation.navigate("Login");
  }

  return (
    <LinearGradient
      colors={["#A01B3A", "#2C1738"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.mainContainer}>
              <Text style={styles.heading}>Trouble loggin in?</Text>
              <Text style={styles.emailLable}>
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </Text>

              <View style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                </View>
                <TouchableOpacity onPress={loginHandler}>
                  <Button
                    icon={() => (
                      <Icon name="email-outline" size={24} color="white" />
                    )}
                    mode="contained"
                    onPress={() => console.log("Forgot Email button pressed")}
                  >
                    Send Forgot Email
                  </Button>
                </TouchableOpacity>
                <View >
                  <Text style={styles.Ortext}>OR</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={loginHandler}>
                    <Button
                      icon={() => (
                        <Icon name="login" size={24} color="white" />
                      )}
                      mode="contained"
                      onPress={goToLogin}
                    >
                      Back to Login
                    </Button>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Ortext: {
    fontSize: scale(16),
    color: "#fff",
    marginBottom: scale(20),
    marginTop: scale(20),
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
  },
  emailLable: {
    fontSize: scale(16),
    color: "#fff",
    marginBottom: scale(20),
    // textAlign: "center",
  },
  heading: {
    fontSize: scale(24),
    fontWeight: "bold",
    color: "#fff",
    marginBottom: scale(20),
    textAlign: "center",
  },
  mainContainer: {
    paddingVertical: scale(100),
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: scale(20),
    paddingTop: scale(50),
    paddingBottom: scale(20),
  },
  title: {
    fontSize: scale(24),
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: scale(10),
  },
  subtitle: {
    fontSize: scale(16),
    color: "#fff",
    textAlign: "center",
    marginBottom: scale(20),
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    marginTop: scale(20),
    alignSelf: "center",
  },
  buttonText: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#A01B3A",
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: scale(10),
    marginBottom: scale(20),
  },
});
