import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './welcome';
import Loginscreen from './loginscreen';
import SignUpScreen from './Signupscreen';
import TabLayout from './app';
import EditProfile from './edit';

import Colors from '../../constants/Colors';

const Stack = createStackNavigator();



export default function StackLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WELCOME" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="LOGIN" component={Loginscreen} options={{headerShown: false}}/>
      <Stack.Screen name="SIGNUP" component={SignUpScreen} options={{headerShown: false}} />
      <Stack.Screen name="APP" component={TabLayout} options={{headerShown: false}} />
      <Stack.Screen name="edit" component={EditProfile}  options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


