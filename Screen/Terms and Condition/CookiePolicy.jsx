import React from "react";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CookiePolicy() {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={["#A01B3A", "#2C1738"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <StatusBar style="auto" />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false} // hide the vertical scroll indicator
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity style={styles.arrowBack} onPress={backHandler}>
          <Button
            icon={() => <Icon name="arrow-back" size={40} color="white" />} // Example icon with specific size and color
            onPress={backHandler}
            style={styles.button}
            labelStyle={styles.label}
          ></Button>
        </TouchableOpacity>

        <View>
  <Text style={styles.title}>Cookie Policy</Text>
</View>

<View style={styles.content}>
  <Text style={styles.heading}>Introduction</Text>
  <Text style={styles.paragraph}>
    Welcome to our Cookie Policy. This policy explains how Myitronline uses cookies and similar technologies to recognize you when you visit our website at www.myitronline.com.
  </Text>
  <Text style={styles.paragraph}>
    It explains what these technologies are and why we use them, as well as your rights to control our use of them. 
  </Text>
  <Text style={styles.paragraph}>
    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
  </Text>
  <Text style={styles.contentHeading}>
    Please read this Cookie Policy carefully to understand how we use cookies and similar technologies.
  </Text>
</View>

<View style={styles.contentMore}>
  <Text style={styles.heading}>Types of Cookies We Use</Text>
  <Text style={styles.paragraph}>
    a) Essential Cookies: These cookies are strictly necessary to provide you with services available through our websites and to use some of its features, such as access to secure areas.
  </Text>
  <Text style={styles.paragraph}>
    b) Performance and Functionality Cookies: These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
  </Text>
  <Text style={styles.paragraph}>
    c) Analytics and Customization Cookies: These cookies collect information that is used either in aggregate form to help us understand how our websites are being used or how effective our marketing campaigns are, or to help us customize our websites for you.
  </Text>
  <Text style={styles.paragraph}>
    d) Advertising Cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
  </Text>
</View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    top:15,
    fontWeight: "bold",
  },
  arrowBack: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
  },
  container: {
    marginTop: 50,
    width: "90%",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  contentMore: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  content: {
    marginTop: 80,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  contentHeading: {
    fontSize: 20,
    backgroundColor: "#461738",
    padding: 10,
    borderRadius: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
    color: "black",
  },
});
