import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const authCtx = useContext(AuthContext);
  const [fetchMessage, setFetchMessage] = useState("");
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://expense-app-36c12-default-rtdb.asia-southeast1.firebasedatabase.app/messeage.json?auth=" +
          token
      )
      .then((response) => {
        setFetchMessage(response.data);
      });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
