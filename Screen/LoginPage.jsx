import React, { useState } from "react";
import logo from "../assets/Logo.png";

import { IconButton } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";
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
  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      styles.input.borderColor = "red";
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid Email");
      styles.input.borderColor = "red";
      return;
    }
    // Redirect to HomePage after login
    navigation.navigate("MainAppStack");
  };

  function SignupHandler() {
    navigation.navigate("Signup");
  }
  function forgotHandler() {
    navigation.navigate("Forget");
  }

  return (
    // <ImageBackground source={""} >

    // </ImageBackground>

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
          <View style={styles.titleContainer}>
            <Text style={styles.login}>Let's {`\n`}Started</Text>
          </View>

          <View style={styles.Fullcontainer}>
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
              <TouchableOpacity onPress={handleLogin}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
                  }}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.GooglebuttonText}>G+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupTextContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={SignupHandler}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </LinearGradient>
  );

  return <View style={{ flex: 1 }}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
  },
  Fullcontainer: {
    // flex: 1,
    width: "100%",
    top: 30,
    backgroundColor: "white",
    paddingTop: 40,
    borderRadius: 30,
    top: 70,
    paddingBottom: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingHorizontal: 10,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    // alignItems: "center",
    justifyContent: "flex-start",
    // alignItems:"flex-start",
    marginBottom: scale(20),
  },
  login: {
    fontSize: scale(40),
    fontWeight: "bold",
    marginBottom: scale(20),
    color: "white",
    top: 50,
    left: -90,
  },
  inputContainer: {
    width: "100%",
    // alignItems: "center",
    marginBottom: 20,
    // flex: 1,
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
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#518",
    borderRadius: 25,
    paddingLeft: 20,
    backgroundColor: "white",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
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
    width: "80%",
    // padding: 15,
    // backgroundColor: "#007BFF",
    borderRadius: 25,
    alignItems: "center",
    // marginTop: 20,
  },
  signupButton: {
    width: "50%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: scale(20),
    fontWeight: "600",
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
   
    color: "blue",
    textAlign: "center",
  },
  signupTextContainer: {
    flexDirection: "row",
    top:10,
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
});
``;
