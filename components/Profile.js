import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { getData } from "./Async";

const Profile = ({ navigation }) => {
  const [value, setValue] = useState(null);

  const loadData = async () => {
    const res = await getData();
    setValue(res);
  };

  loadData();

  if (value) {
    return (
      <View style={styles.container}>
        <View style={styles.upperCon}>
          <Text style={styles.mainText}>Profile</Text>
        </View>
        <View style={styles.formCon}>
          <View style={styles.rowCon}>
            <Text style={styles.label}>Username: </Text>
            <Text style={styles.label}>{value["User"]}</Text>
          </View>
          <View style={styles.rowCon}>
            <Text style={styles.label}>Password: </Text>
            <Text style={styles.label}>{value["Pass"]}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Button
              title="Logout"
              onPress={() => navigation.navigate("Login")}
            ></Button>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text>Loading....</Text>
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
    backgroundColor: "white",
  },
  mainText: {
    fontSize: 30,
    color: "white",
  },
  rowCon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  label: {
    fontSize: 20,
    color: "black",
  },
});
export default Profile;
