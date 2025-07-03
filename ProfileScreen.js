import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' }}>
      <Text style={{ color: 'white', fontSize: 22 }}>👤 User Profile</Text>
    </View>
  );
}
