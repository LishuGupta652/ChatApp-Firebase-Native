import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.headerContainer}>
            <Text
              onPress={() => {
                console.log("heelo");
                Alert.alert("This is title", "OK");
              }}
              style={styles.headerText}
            >
              My App
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://unsplash.it/600" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://unsplash.it/600" }}
          style={styles.image}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput
          style={styles.input}
          placeholder="What do you want ..."
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    height: 30,
    margin: 10,
    borderColor: "#222",
    borderWidth: 5,
  },
  header: {
    marginTop: 22,
    height: 40,
    height: 50,
    backgroundColor: "#33cc33",
  },
  headerContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "white",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
});
