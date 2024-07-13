import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import HomePage from "./HomePage";
import { IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";

const hideScrollbar =
  Platform.OS === "android"
    ? { overflow: "hidden" }
    : {
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
      };
const { width } = Dimensions.get("window");
const scale = (size) => (width / 375) * size;

export default function SignupPage({ navigation }) {
  const [currentPage, setCurrentPage] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [loading, setLoading] = useState(false); // State to control loading indicator
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  function signupHandler() {
    if (email === "" || password === "" || fullname === "") {
      styles.inputBoxBg.color = "green";
      alert("Please fill in all fields");
      return;
    }
    setLoading(true); // Show loader

    // Simulating a delay before navigating (replace with actual login logic)
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigation.navigate("Home");
    }, 500); // Simulating 2 seconds delay
  }
  function termsHandler() {
    navigation.navigate("TermsAndService");
  }
  function refundPolicy() {
    navigation.navigate("Refundpolicy")
  }
  function privacyPolicy() {
    navigation.navigate("Privacypolicy")
  }
  function cookiePolicy() {
    navigation.navigate("Cookiepolicy")
  }

  function loginHandler() {
    setLoading(true); // Show loader

    // Simulating a delay before navigating (replace with actual login logic)
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigation.navigate("Login");
    }, 500); // Simulating 2 seconds delay
  }

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "Login":

      default:
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
                  style={hideScrollbar}
                  keyboardShouldPersistTaps="handled"
                >
                  {/* Loader */}
                  {loading && (
                    <View style={styles.loaderContainer}>
                      <ActivityIndicator size="large" color="#fff" />
                    </View>
                  )}

                  <View style={styles.titleContainer}>
                    <Text style={styles.createAccountText}>
                      Create Your Account
                    </Text>
                  </View>

                  <View style={styles.inputBoxBg}>
                    <View style={styles.inputBox}>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                          style={styles.input}
                          placeholder="Enter your full name"
                          value={fullname}
                          onChangeText={setFullname}
                          keyboardType="default"
                        />
                      </View>
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                          style={styles.input}
                          placeholder="Enter your email"
                          value={email}
                          onChangeText={setEmail}
                          keyboardType="email-address"
                        />
                      </View>

                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputWrapper}>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                          />
                          <TouchableOpacity
                            onPress={togglePasswordVisibility}
                            style={styles.iconButton}
                          >
                            <IconButton
                              icon={isPasswordVisible ? "eye-off" : "eye"}
                              size={20}
                              style={styles.icon}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={signupHandler}
                      style={styles.buttonContainer}
                    >
                      <LinearGradient
                        colors={["#A01B3A", "#2C1738"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                      >
                        <Text style={styles.buttonText}>Sign Up Now</Text>
                      </LinearGradient>
                    </TouchableOpacity>

                    <View style={styles.socialContainer}>
                      <Text style={styles.termandConditionText}>
                        By continuing past this page, you agree to our{" "}
                        <Text
                          style={styles.termsandcndtn}
                          onPress={termsHandler}
                        >
                          Terms of Service,
                        </Text>
                        <Text onPress={cookiePolicy} style={styles.termsandcndtn}> Cookie Policy, </Text>
                        <Text onPress={privacyPolicy} style={styles.termsandcndtn}>
                           Privacy Policy,
                        </Text>
                        <Text onPress={refundPolicy} style={styles.termsandcndtn}> Refund Policy </Text>
                        and Content Policies.
                      </Text>
                    </View>

                    <View style={styles.haveAc}>
                      <Text>Have an account? </Text>
                      <TouchableOpacity onPress={loginHandler}>
                        <Text style={styles.orText}>Sign In</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
            <StatusBar style="auto" />
          </LinearGradient>
        );
    }
  };

  return <View style={{ flex: 1 }}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
  termsandcndtn: {
    color: "#A01B3A",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    left: -75,
    marginTop: 80,
    maxWidth: "50%",
    marginBottom: scale(100),
  },
  inputBoxBg: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingVertical: 20,
    paddingBottom: 110,
    paddingTop: 50,
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  createAccountText: {
    fontSize: scale(30),
    color: "white",
    fontWeight: "600",
  },
  termandConditionText: {
    width: "80%",
    textAlign: "center",
    fontSize: 10,
    // flex: 1,

    justifyContent: "center",
  },
  termandCondition: {
    width: "80%",
    textAlign: "center",
    fontSize: 10,
    justifyContent: "center",
  },
  login: {
    fontSize: scale(30),
    fontWeight: "bold",
    marginBottom: scale(20),
    color: "black",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#A01B3A",
    justifyContent: "flex-start",
    left: 17,
    marginBottom: 5,
  },
  inputBox: {
    width: "90%",
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#518",
    borderRadius: 25,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  button: {
    width: "90%",
    padding: 15,
    backgroundColor: "#007BFF ",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
  },
  GooglebuttonText: {
    fontSize: scale(16),
    fontWeight: "600",
    padding: 10,
    borderRadius: 50,
    color: "white",
    backgroundColor: "#DD4B39",
  },
  orText: {
    color: "#A01B3A",
    textAlign: "center",
  },
  signupText: {
    marginTop: 20,
    color: "blue",
    textAlign: "center",
  },
  haveAc: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    alignItems: "center",
  },
  socialIcon: {
    width: scale(40),
    height: scale(40),
    marginHorizontal: 10,
    position: "absolute",
    left: 50,
  },
  pswrdinputWrapper: {
    flexDirection: "row",

    alignItems: "center",
    width: "100%",

    // borderWidth: 1,
    // borderColor: "#518",
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: "white",
    position: "relative", // Ensure the wrapper is positioned relatively
  },
  pswrdinput: {
    // flex: 1, // Take up remaining space
    paddingVertical: 10,
    paddingLeft: 20,
    width: "100%",
    paddingRight: 40, // Add right padding to make space for the eye icon
    backgroundColor: "white",
  },
  iconButton: {
    position: "absolute", // Position the button absolutely
    right: 10, // Align it to the right
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
