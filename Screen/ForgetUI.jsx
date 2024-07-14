import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
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
  const [email, setEmail] = useState("");

  const backHandler = () => {
    navigation.goBack();
  };

  function goToLogin() {
    navigation.navigate("Login");
  }

  function forgotEmailHandler() {
    console.log("Forgot Email button pressed");
    // Implement logic for sending forgot email
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
          <TouchableOpacity style={styles.arrowBack} onPress={backHandler}>
            <Icon name="arrow-left" size={40} color="white" />
          </TouchableOpacity>

          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.mainContainer}>
              <Text style={styles.heading}>Trouble logging in?</Text>
              <Text style={styles.emailLabel}>
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />

                

                <Button
                  icon={() => (
                    <Icon name="email-outline" size={24} color="white" />
                  )}
                  mode="contained"
                  onPress={forgotEmailHandler}
                  style={styles.button}
                >
                  Send Forgot Email
                </Button>

                <Text style={styles.orText}>OR</Text>

                <Button
                  icon={() => <Icon name="login" size={24} color="white" />}
                  mode="contained"
                  onPress={goToLogin}
                  style={styles.button}
                >
                  Back to Login
                </Button>
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
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  scrollView: {
    flexGrow: 1,
    // justifyContent: "center",
  },
  mainContainer: {
    paddingVertical: scale(100),
    paddingHorizontal: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  arrowBack: {
    position: "absolute",
    top: scale(50),
    left: scale(20),
    zIndex: 1,
  },
  heading: {
    fontSize: scale(24),
    fontWeight: "bold",
    color: "#fff",
    marginBottom: scale(20),
    textAlign: "center",
  },
  emailLabel: {
    fontSize: scale(16),
    color: "#fff",
    marginBottom: scale(20),
    // textAlign: "center",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: scale(10),
    marginBottom: scale(20),
  },
  orText: {
    fontSize: scale(16),
    color: "#fff",
    marginBottom: scale(20),
    // marginTop: scale(20),
    textAlign: "center",
  },
  button: {
    width: "100%",
    borderRadius: 25,
    // paddingVertical: scale(10),
    marginBottom: scale(20),
  },
});
