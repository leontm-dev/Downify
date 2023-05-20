import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
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
export default function Downloader(props: Props) {
  const [inputValue, setInputValue] = React.useState("");
  const [errors, setErrors] = React.useState("");
  function newError(errorCode: string) {
    setErrors(errorCode);
    setTimeout(() => {
      setErrors("");
    }, 5000);
  }

  function handleDownload() {
    if (inputValue.startsWith("https://open.spotify.com/")) {
    } else {
      newError("Link is not a valid spotify link");
    }
  }
  return (
    <SafeAreaView style={styles.downloadScreen}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/Download.png")}
          style={{ width: 170, height: 170 }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#9d8af6",
            textAlign: "center",
            margin: 10,
          }}
        >
          Download your favourite songs, playlists or albums
        </Text>
        <TextInput
          onChange={(val) => setInputValue(String(val))}
          placeholder="https://open.spotify.com/.../...?si=..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleDownload}>
          <Text style={{ fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, color: "red" }}>{errors}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  downloadScreen: {
    backgroundColor: "lightgrey",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    color: "#9d8af6",
    width: "90%",
    padding: 6,
    fontSize: 15,
    margin: 20,
  },
  button: {
    backgroundColor: "#9d8af6",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
