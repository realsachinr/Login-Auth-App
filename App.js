import React from "react";
import LoginPage from "./Screen/LoginPage";
import HomePage from "./Screen/HomePage";
import SignupPage from "./Screen/SignupPage";
import { useTheme } from 'react-native-paper';
import ForgetUI from "./Screen/ForgetUI";
import Home from "./Screen/Home";
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialIcons";
import Profile from "./Screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";
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
      screenOptions={{
        headerLeft: () => (
          <Button
            onPress={() => navigation.goBack()}
            title="Back"
            color="#000"
          ></Button>
        ),
      }}
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
        headerLeft: () => (
          <Button
            onPress={() => navigation.goBack()}
            title="Go Back"
            color="#000"
          />
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
      headerShown:false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: theme.colors.primary, // Using theme colors
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Profile" component={ProfileStack} />
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
