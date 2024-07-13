// ExampleScreen.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>home Login Screen</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Forget")}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default HomePage;
