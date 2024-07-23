import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

// Importing Screens
import LoginPage from "./Screen/LoginPage";
import HomePage from "./Screen/HomePage";
import SignupPage from "./Screen/SignupPage";
import ForgetUI from "./Screen/ForgetUI";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";
import TermsAndServices from "./Screen/Terms and Condition/TermsAndServices";
import RefundPolicy from "./Screen/Terms and Condition/RefundPolicy";
import PrivacyPolicy from "./Screen/Terms and Condition/PrivacyPolicy";
import CookiePolicy from "./Screen/Terms and Condition/CookiePolicy";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create stack navigators for Home and Profile
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "transparent", // Transparent background to overlay gradient
        },
        headerTitleAlign: "center", // Center align the header title
        headerTitleStyle: {
          color: "black", // Optional: Customize header text color
        },
        headerBackground: () => (
          <LinearGradient
            colors={["#d9bac1", "#fff"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
        headerLeft: () => {
          if (route.name === "Home") {
            // Hide back button on HomeScreen
            return null;
          } else {
            // Show back button on other screens
            return (
              <Button
                onPress={() => navigation.goBack()}
                title="Back"
                color="#000"
              />
            );
          }
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      {/* Add more screens in the Home stack as needed */}
    </Stack.Navigator>
  );
};

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent", // Transparent background to overlay gradient
        },
        headerTitleAlign: "center", // Center align the header title
        headerTitleStyle: {
          color: "black", // Optional: Customize header text color
        },
        headerBackground: () => (
          <LinearGradient
            colors={["#d9bac1", "#fff"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
        headerLeft: () => (
          <Text style={styles.icon}>
            <Icon
              name="arrow-back"
              size={30}
              onPress={() => navigation.goBack()}
            />
          </Text>
        ),
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      {/* Add more screens in the Profile stack as needed */}
    </Stack.Navigator>
  );
};

// Define MainAppStack as a separate component
const MainAppStack = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home";
          } else if (route.name === "ProfileTab") {
            iconName = "user";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
      {/* Add more Tab.Screen components as needed */}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Forget" component={ForgetUI} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="TermsAndService" component={TermsAndServices} />
        <Stack.Screen name="RefundPolicy" component={RefundPolicy} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="CookiePolicy" component={CookiePolicy} />
        <Stack.Screen name="MainAppStack" component={MainAppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20, // Adjust the value to set the desired left gin
  },
});
