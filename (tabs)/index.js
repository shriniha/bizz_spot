import { View, Text } from 'react-native'
import React from 'react'

export default function TabOneScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f1f1', justifyContent: 'center', alignItems: 'center' }}>
      {/* Heading */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>MAP</Text>

      {/* HERE THE MAP WILL BE SHOWN */}
      <Text>PLACE RECOMMENDATION FOR SHOP</Text>
    </View>
  );
};