import React from "react";
import LoginPage from "./Screen/LoginPage";
import HomePage from "./Screen/HomePage";
import SignupPage from "./Screen/SignupPage";
import ForgetUI from "./Screen/ForgetUI";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TermsAndServices from "./Screen/Terms and Condition/TermsAndServices";
import RefundPolicy from "./Screen/Terms and Condition/RefundPolicy";
import PrivacyPolicy from "./Screen/Terms and Condition/PrivacyPolicy";
import CookiePolicy from "./Screen/Terms and Condition/CookiePolicy";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define MainAppStack as a separate component
const MainAppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      {/* Add more Tab.Screen components as needed */}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Forget" component={ForgetUI} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="TermsAndService" component={TermsAndServices} />
        <Stack.Screen name="Refundpolicy" component={RefundPolicy} />
        <Stack.Screen name="Privacypolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Cookiepolicy" component={CookiePolicy} />

        <Stack.Screen name="MainAppStack" component={MainAppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
