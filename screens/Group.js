import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Group = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeIndicatorParent}>
      <View style={styles.homeIndicator}>
        <View style={styles.line} />
      </View>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.deliveryBox14, styles.deliveryPosition]}
          contentFit="cover"
          source={require("../assets/deliverybox-1-4.png")}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.send, styles.sendTypo]}>Send</Text>
        <Text style={[styles.history, styles.sendTypo]}>History</Text>
        <Image
          style={[styles.history11, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/history-1-1.png")}
        />
        <Text style={[styles.account, styles.sendTypo]}>Account</Text>
        <Text style={[styles.receive, styles.sendTypo]}>Receive</Text>
        <Image
          style={[styles.iconProfile, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--profile.png")}
        />
        <Pressable
          style={[styles.iconHome, styles.iconLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon--home.png")}
          />
        </Pressable>
        <Image
          style={[styles.deliveryBox1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/deliverybox-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 101,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
  },
  deliveryPosition: {
    top: 27,
    overflow: "hidden",
  },
  sendTypo: {
    top: 62,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  line: {
    marginTop: 4.5,
    marginLeft: -67.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray_200,
    width: 135,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    left: 1,
    width: 413,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.mainWhite,
  },
  deliveryBox14: {
    left: 102,
    width: 28,
    height: 23,
    overflow: "hidden",
    position: "absolute",
  },
  home: {
    top: 63,
    left: 20,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.ptRegularNormalText,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  send: {
    left: 188,
  },
  history: {
    left: 267,
  },
  history11: {
    left: 275,
    top: 24,
    width: 26,
    overflow: "hidden",
  },
  account: {
    left: 349,
  },
  receive: {
    left: 94,
  },
  iconProfile: {
    left: 359,
    top: 24,
    width: 26,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconHome: {
    left: 22,
    top: 25,
  },
  deliveryBox1Icon: {
    left: 189,
    overflow: "hidden",
    top: 27,
  },
  homeIndicatorParent: {
    flex: 1,
    height: 138,
    width: "100%",
  },
});

export default Group;
