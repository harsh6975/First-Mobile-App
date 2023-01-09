import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Starting App Development with React Native{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          React Native do not support div or normal HTML elements.
        </Text>
        <Text style={styles.text}>
          React Native do not normal text. To write text wrap in Text element.
        </Text>
        <Text style={styles.text}>
          React Native do not support inheritence except for the Text element.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "yellow",
    padding: 20,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    padding: 5,
    backgroundColor: "pink",
    fontSize: 13,
  },
});
