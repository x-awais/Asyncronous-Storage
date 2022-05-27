import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { React, useState } from "react";
import { storeData } from "./Async";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.upperCon}>
        <Text style={styles.mainText}>Login</Text>
      </View>
      <View style={styles.formCon}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} onChangeText={setUsername} />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} onChangeText={setPassword} />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={() => {
              const value = { User: username, Pass: password };
              storeData(value);
              navigation.navigate("Profile");
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  upperCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fac12f",
  },
  formCon: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  mainText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
  },
  input: {
    padding: 5,
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    margin: 10,
    height: 30,
  },
});

export default Login;
