import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../HomePage"; // Replace with your actual screen components
import Profile from "../Profile";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={Profile} />
        {/* Add more Tab.Screen components as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
