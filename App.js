
import * as React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Entypo, Fontisto } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
   
      <View style={styles.view1}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.username}>
          <FontAwesome
            style={styles.iconUser}
            name="user"
            size={50}
            color="black"
          />
          <TextInput style={styles.nametext} placeholder="Name" />
        </View>
        <View style={styles.password}>
          <Fontisto name="locked" size={50} color="black" />
          <TextInput style={styles.passwordtext} placeholder="password" />
          <Entypo name="eye" size={50} color="black" />
        </View>
      </View>

      <View style={styles.view3}>
        <Text style={styles.textLogin2}>Login</Text>
      </View>

      <View style={styles.view4}>
        <Text style={styles.textForgot}>Forgot Your Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "linear-gradient( #FBCB00 , #BF9A00)",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  view1: {
    flex: 1,
    textAlign: "left",
    width: "100%",
    height: "50",
  },

  textLogin: {
    marginTop : 30,
    fontSize: 50,
    fontWeight: 700,
  },
  view2: {
    flex: 1,
    marginTop: "30",
    width: "80%",
    height: "50",
  },
  username: {
    width: "100%",
    height: "60px",
    borderRadius: "1",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },


  nametext: {
    width: "100%",
    height: "60px",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  password: {
    marginTop: "10px",
    width: "330",
    height: "54px",
    borderRadius: "1",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  passwordtext: {
    width: "100%",
    height: "60px",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  view3: {
    flex: 1,
    width: "80%",
    height: "50",
  },
  textLogin2: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    borderRadius: "0",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "black",
  },
  view4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textForgot: {
    textAlign: "center",
    fontSize: 30,
  },
});