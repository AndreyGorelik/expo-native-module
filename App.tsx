import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Settings from "./modules/expo-settings";
export default function App() {
  const theme = Settings.getTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "black" : "white" },
      ]}
    >
      <Text
        style={{
          fontSize: 44,
          color: theme === "dark" ? "white" : "black",
          textAlign: "center",
        }}
      >
        Open up App.tsx to start working on your app!
      </Text>
      <Button title="Hello" onPress={() => Alert.alert(Settings.hello())} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
