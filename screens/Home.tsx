import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Ionicons, AntDesign, Foundation } from "@expo/vector-icons";
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { BottomTabNavigationHelpers } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

interface Props {
  navigation: BottomTabNavigationHelpers;
}

export default function Home(props: Props) {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <View style={styles.iconView}>
        <Image
          style={{ width: 100, height: 100, aspectRatio: 1 / 1 }}
          source={require("../assets/favicon.png")}
        />
        <Text style={{ fontSize: 50, textAlign: "center" }}>Downify</Text>
      </View>
      <View style={styles.buttonList}>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Downloader")}
            style={styles.button}
          >
            <Foundation
              style={{ margin: 10 }}
              name="download"
              size={30}
              color="white"
            />
            <Text style={{ margin: 10, fontSize: 18 }}>
              Open the Downloader
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Playlists")}
            style={styles.button}
          >
            <Ionicons
              style={{ margin: 10 }}
              name="musical-notes"
              size={30}
              color="white"
            />
            <Text style={{ margin: 10, fontSize: 18 }}>
              Check your playlists
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "lightgrey",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  iconView: {
    marginTop: 200,
    alignItems: "center",
  },
  buttonList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#9d8af6",
    borderRadius: 20,
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
