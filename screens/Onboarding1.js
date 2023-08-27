import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding1}>
      <Pressable
        style={styles.title}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={styles.paakej}>paakej</Text>
      </Pressable>
      <Image
        style={styles.box1Icon}
        contentFit="cover"
        source={require("../assets/box-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paakej: {
    marginLeft: -93,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.boldNormalHeading,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 186,
    height: 38,
  },
  title: {
    left: "50%",
    bottom: 410,
    position: "absolute",
  },
  box1Icon: {
    top: 288,
    left: 127,
    width: 160,
    height: 160,
    position: "absolute",
  },
  onboarding1: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding1;
