import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabFiveScreen from './five';
import TabThreeScreen from './three';
import TabTwoScreen from './two';
import TabFourScreen from './four';
import Home from '.';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tab  = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      showlabel: false, // Set to false if you don't want labels
      tabBarHideOnKeyboard: false,
      tabBarInactiveTintColor: '#003a88',
      tabBarActiveTintColor: '#90b1db',
      tabBarStyle: {
        backgroundColor: '#dfe9f5',
        height: 80,
        borderRadius: 50,
        borderBottomWidth: 10,
        borderBlockEndColor:'white',
        borderCurve: 30,
        marginLeft: 10,
        marginRight: 10,
        shadowColor:'white',
      },
      tabBarItemStyle: {
        backgroundColor: '#dfe9f5',
        margin: 10,
        borderRadius: 60,
        height: 50,
      },
    }}>
      <Tab.Screen 
        name="index" component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color,size }) => <Entypo name="home" size={24} color="#003a88" tabBarActiveTintColor ='#90b1db' />
        }}
      />
      <Tab.Screen
        name="two" component={TabTwoScreen}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color:string }) => <AntDesign name="piechart" size={24} color="#003a88" />
        }}
      />
    <Tab.Screen
        name="three" component={TabThreeScreen}
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={24} color="#003a88" />
        }}
      />
    <Tab.Screen
        name="four" component={TabFourScreen}
        options={{
          title: 'Rankings',
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={24} color="#003a88" />
        }}
      />
    <Tab.Screen
        name="five" component={TabFiveScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color="#003a88" />
          
        }}
      />
      
    </Tab.Navigator>
  );
}
