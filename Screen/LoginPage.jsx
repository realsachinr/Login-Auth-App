import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { IconButton } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator, // Import ActivityIndicator for the loader
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const hideScrollbar =
  Platform.OS === "android"
    ? { overflow: "hidden" }
    : {
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
      };
const { width } = Dimensions.get("window");
const scale = (size) => (width / 375) * size;

export default function LoginPage() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to control loading indicator

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid Email");
      return;
    }

    setLoading(true); // Show loader

    // Simulating a delay before navigating (replace with actual login logic)
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigation.navigate("MainAppStack");
    }, 500); // Simulating 2 seconds delay
  };

  function SignupHandler() {
    setLoading(true); // Show loader

    // Simulating a delay before navigating (replace with actual signup logic)
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigation.navigate("Signup");
    }, 500); // Simulating 2 seconds delay
  }

  function forgotHandler() {
    setLoading(true); // Show loader

    // Simulating a delay before navigating (replace with actual signup logic)
    setTimeout(() => {
      setLoading(false); // Hide loader
      navigation.navigate("Forget");
    }, 500); // Simulating 2 seconds delay
  }

  return (
    <LinearGradient
      colors={["#A01B3A", "#2C1738"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          style={hideScrollbar}
        >
          {/* Loader */}
          {loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}

          <View style={styles.titleContainer}>
          <Text style={styles.login}>Let's {`\n`}Started</Text>
          </View>

          <View style={styles.fullContainer}>
            <View style={styles.inputBox}>
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
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
                  />
                  <IconButton
                    icon={showPassword ? "eye-off" : "eye"}
                    color="#777"
                    style={styles.icon}
                    size={24}
                    onPress={toggleShowPassword}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={forgotHandler}
                style={styles.forgotPasswordContainer}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              style={styles.buttonContainer}
              disabled={loading} // Disable button when loading
            >
              <LinearGradient
                colors={["#A01B3A", "#2C1738"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.orText}>OR Continue With</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
                  }}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.GooglebuttonText}>G+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.haveAccount}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <TouchableOpacity>
                <Text onPress={SignupHandler} style={styles.signupbtn} >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  signupBtn: {
    marginTop: "top",
  },
  haveAccount: {
    flexDirection: "row",
    marginTop: 20,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  signupbtn: {
    color: "#A01B3A",
    fontWeight: "500",
    
  },  
  fullContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 100,
    paddingTop: 40,
    top: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
    marginTop: 80,
  },
  titleContainer: {
    alignItems: "center",
    width: "90%",
    marginBottom: scale(20),
  },

  login: {
    fontSize: scale(40),
    fontWeight: "bold",
    width: "90%",
    marginBottom: scale(20),
    color: "white",

    fontFamily: "  ",
    textAlign: "s",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#9F1B3A",
    justifyContent: "flex-start",
    left: 17,
    marginBottom: 5,
  },
  inputBox: {
    width: "90%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#641939",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: -2,
  },
  forgotPasswordText: {
    color: "blue",
  },
  button: {
    width: "90%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    paddingLeft: 50,
    paddingRight: 50,
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
    fontSize: scale(15),
    marginVertical: 10,
    textAlign: "center",
  },
  signupText: {
    // marginTop: 20,
    // color: "blue",
    // textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: scale(40),
    height: scale(40),
    marginHorizontal: 10,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
