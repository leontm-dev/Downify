import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import About from "./screens/About";
import Playlists from "./screens/Playlists";
import Downloader from "./screens/Downloader";
import Player from "./screens/Player";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            if (focused) {
              return <Ionicons name="home-sharp" size={24} color="#9d8af6" />;
            } else {
              return <Ionicons name="home-outline" size={24} color="#9d8af6" />;
            }
          } else if (route.name === "Playlists") {
            if (focused) {
              return (
                <Ionicons name="musical-notes" size={24} color="#9d8af6" />
              );
            } else {
              return (
                <Ionicons
                  name="musical-notes-outline"
                  size={24}
                  color="#9d8af6"
                />
              );
            }
          } else if (route.name === "Downloader") {
            if (focused) {
              return <Ionicons name="md-download" size={24} color="#9d8af6" />;
            } else {
              return (
                <Ionicons
                  name="md-download-outline"
                  size={24}
                  color="#9d8af6"
                />
              );
            }
          } else if (route.name === "About") {
            if (focused) {
              return (
                <Ionicons name="information-circle" size={24} color="#9d8af6" />
              );
            } else {
              return (
                <Ionicons
                  name="information-circle-outline"
                  size={30}
                  color="#9d8af6"
                />
              );
            }
          } else if (route.name === "Player") {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="music-box-multiple"
                  size={24}
                  color="#9d8af6"
                />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="music-box-multiple-outline"
                  size={24}
                  color="#9d8af6"
                />
              );
            }
          }
        },
        tabBarActiveTintColor: "#9d8af6",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "grey" },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Playlists" component={Playlists} />
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="Downloader" component={Downloader} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
