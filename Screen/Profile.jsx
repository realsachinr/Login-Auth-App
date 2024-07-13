import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Import View and Text from react-native

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      {/* Other content related to profile */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire space available
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
});

export default Profile;
