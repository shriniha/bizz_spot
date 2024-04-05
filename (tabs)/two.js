import { View, Text } from 'react-native'
import React from 'react'

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f1f1', justifyContent: 'center', alignItems: 'center' }}>
      {/* Heading */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>QUERIES</Text>

      {/* HERE THE MAP WILL BE SHOWN */}
      <Text>FIND YOUR SUGGESTIONS HERE</Text>
    </View>
  );
};