import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from 'react-native';

// Dummy user data
const userData = {
  name: "Melissa Peters",
  email: "jmetperters@gmail.com",
  dob: "01/01/1990",
  shopName: "Mellisa's Emporium",
  shopType: "Clothing",
  profit: "$5000",
  address: "123 Main Street",
  phone: "+1 (555) 123-4567",
  
};

// Replace these with your actual images
const profileImage = require("./image1.jpg");

const ProfileDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      {/* Display user details */}
      <View style={{ backgroundColor: "#f2f1f1", padding: 10, borderRadius: 8 }}>
        <Image
          source={profileImage}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 10,
            top: 15,
            left: 15,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            color: "#003a88",
            top: 20,
            textAlign: "center",
          }}
        >
          {userData.name}
        </Text>
      </View>

      <View style={{ marginTop: 20, width: "80%" }}>
        {/* Additional Features */}
        <TouchableOpacity
          onPress={() => navigation.navigate("edit")}
          style={{
            backgroundColor: "#003a88",
            padding: 10,
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#f2f1f1",fontSize:16 }}>                       Edit Profile</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
        <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              EMAIL:  {userData.email}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              DOB:     {userData.dob}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              SHOP:   {userData.shopName}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              TYPE:    {userData.shopType}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              PROFIT: {userData.profit}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              ADDRESS:  {userData.address}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#dfe9f5",
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "#003a88" }}>
              PHONE:   {userData.phone}
            </Text>
          </View>
          {/* ... (Add more fields as needed) ... */}
        </View>
      </View>
    </View>
  );
};

const LikesRoutes = () => {
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2023');

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 10, 40, 95, 85, 20, 60], // Replace with your daily profit data
      },
    ],
  };

  const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  const years = ['2021', '2022', '2023', '2024']; // Add more years as needed

  const handlePrevMonth = () => {
    let newMonth = parseInt(selectedMonth, 10) - 1;
    let newYear = parseInt(selectedYear, 10);

    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    setSelectedMonth(newMonth.toString().padStart(2, '0'));
    setSelectedYear(newYear.toString());
  };

  const handleNextMonth = () => {
    let newMonth = parseInt(selectedMonth, 10) + 1;
    let newYear = parseInt(selectedYear, 10);

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }

    setSelectedMonth(newMonth.toString().padStart(2, '0'));
    setSelectedYear(newYear.toString());
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <View style={{ top: 40 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DropDownPicker
            items={months.map((m) => ({ label: m.label, value: m.value }))}
            defaultValue={selectedMonth}
            containerStyle={{ height: 40, width: 130 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => handleMonthChange(item.value)}
          />
          <DropDownPicker
            items={years.map((y) => ({ label: y, value: y }))}
            defaultValue={selectedYear}
            containerStyle={{ height: 40, width: 130, marginLeft: 10 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => handleYearChange(item.value)}
          />
        </View>
        <TouchableOpacity onPress={handleNextMonth}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10, top: 30 }}>
        {months.find((m) => m.value === selectedMonth)?.label} / {selectedYear}
      </Text>

      <LineChart
        data={data}
        width={350}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 58, 136, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 58, 136, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#003a88',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          top: 60,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#003a88',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});


const renderScene = SceneMap({
  first: ProfileDetails,
  third: LikesRoutes,
});

const Profile = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Profile" },
    { key: "third", title: "Tracking" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "lightblue",
      }}
      style={{
        backgroundColor: "#f2f1f1",
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text style={{ color: focused ? "#3e8f9c" : "black" }}>{route.title}</Text>
      )}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f2f1f1",
      }}
    >
      <StatusBar style="auto" />
      {/* ... (Your existing code for the profile header) ... */}

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
