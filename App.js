import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Harsh");
  const [people, setPeople] = useState([
    "Harsh",
    "Tanya",
    "Sinha",
    "Tejasvita",
    "Anshu",
    "Anurag",
    "Abhijeet",
    "Mridul",
  ]);

  const UpdateNameHandler = () => {
    let oldName = name;

    if (oldName == "Harsh") {
      setName("Harsh Sinha");
    } else {
      setName("Harsh");
    }
  };

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
      <Text style={styles.State}>Lets start learning states</Text>
      <Text>I am {name}</Text>
      <Button title="Update Name" onPress={UpdateNameHandler} />
      <View style={styles.inputContainer}>
        <Text> Enter Your name</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="e.g Harsh Sinha"
            onChangeText={(val) => setName(val)}
          />
        </View>
      </View>
      <Text>View List of items</Text>
      <ScrollView>
        {people.map((item, index) => {
          return (
            <View>
              <Text style={styles.item}>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    backgroundColor: "yellow",
    padding: 20,
    marginBottom: 10,
    marginTop: 30,
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
  State: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  item: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "pink",
  },
});
