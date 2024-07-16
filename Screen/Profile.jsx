import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { ToastAndroid } from "react-native";
function Profile() {
  const navigation = useNavigation();
  
  const logoutHandler = async () => {
    try {
      await AsyncStorage.removeItem("user");
      ToastAndroid.show("Logged Out Successfully", ToastAndroid.SHORT);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error removing data from AsyncStorage:", error);
      alert("Error logging out. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      {/* Other content related to profile */}
      <Button mode="contained" onPress={logoutHandler} style={styles.button}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
  },
});

export default Profile;
