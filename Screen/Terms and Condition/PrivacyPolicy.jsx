import React from "react";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Privacypolicy() {
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
  <Text style={styles.title}>Privacy Policy</Text>
</View>

<View style={styles.content}>
  <Text style={styles.heading}>Privacy Policy Instructions</Text>
  <Text style={styles.paragraph}>
    Welcome to our Privacy Policy. Your privacy is critically important to us.
    We have a few fundamental principles:
  </Text>
  <Text style={styles.paragraph}>
    - We don’t ask you for personal information unless we truly need it.
  </Text>
  <Text style={styles.paragraph}>
    - We don’t share your personal information with anyone except to comply
    with the law, develop our products, or protect our rights.
  </Text>
  <Text style={styles.paragraph}>
    - We don’t store personal information on our servers unless required for
    the ongoing operation of one of our services.
  </Text>
  <Text style={styles.paragraph}>
    Below is our privacy policy which incorporates these goals:
  </Text>
  <Text style={styles.paragraph}>
    If you have questions about accessing or correcting your personal data
    please contact our support team.
  </Text>
</View>

<View style={styles.contentMore}>
  <Text style={styles.heading}>Privacy of Customer Data</Text>
  <Text style={styles.paragraph}>
    a) This document is an electronic record in terms of the Information
    Technology Act, 2000 and rules thereunder as applicable and the amended
    provisions pertaining to electronic records in various statutes as amended
    by the Information Technology Act, 2000. This electronic record is generated
    by a computer system and does not require any physical or digital
    signatures.
  </Text>
  <Text style={styles.paragraph}>
    b) This document is published in accordance with the provisions of Rule 3
    (1) of the Information Technology (Intermediaries guidelines) Rules, 2011
    that require publishing the rules and regulations, privacy policy and Terms
    of Use for access or usage of myitronline.com.
  </Text>
  <Text style={styles.paragraph}>
    c) The domain name www.myitronline.com ("Website"), is owned and operated by
    Myitronline Global Services Private limited. Company by shares, incorporated
    under the provisions of the Companies Act, 2013, and having its registered
    office: at 301, 3rd Floor Plot No. 51, Hasanpur, IP Extension, Patparganj,
    Delhi - 110092 where such expression shall, unless repugnant to the context
    thereof, be deemed to include its respective representatives,
    administrators, employees, directors, officers, agents and their successors
    and assigns.
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
