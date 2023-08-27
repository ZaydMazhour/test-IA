import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const AboutApp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutApp}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg7.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <Pressable
        style={styles.backButtonParent}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.backButtonIcon}
          contentFit="cover"
          source={require("../assets/back-button1.png")}
        />
        <Text style={styles.scheduleADelivery}>About App</Text>
      </Pressable>
      <View style={styles.aboutAppChild} />
      <View style={styles.version10Parent}>
        <Text style={[styles.version10, styles.version10Typo]}>
          Version 1.0
        </Text>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/backdrop2.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <View style={[styles.titleWrapper, styles.titleLayout]}>
          <Text style={[styles.title, styles.titleLayout]}>Parcel</Text>
        </View>
        <Text
          style={[styles.parcelIsThe, styles.version10Typo]}
        >{`Parcel is the Africa’s leading local delivery platform where users experience seamless placement of pickup and delivery of their items, gifts, packages, etc.

We work with a large ecosystem of riders, restaurants, shops and partners. From prepared meals to groceries, flowers, coffee, medicine… our fleets deliver whatever you need – fast, easy and to your door.

Percel is the world’s leading local delivery platform where users experience seamless placement of pickup and delivery of their items, gifts, packages, etc.

`}</Text>
        <Image
          style={styles.parcel11}
          contentFit="cover"
          source={require("../assets/parcel-1-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  version10Typo: {
    fontFamily: FontFamily.ptRegularNormalText,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  titleLayout: {
    height: 38,
    width: 186,
    left: "50%",
    position: "absolute",
  },
  bgIcon: {
    top: 0,
    width: 1041,
    height: 976,
    left: 0,
    position: "absolute",
  },
  backdropIcon: {
    top: 85,
    left: 0,
  },
  backButtonIcon: {
    width: 21,
    height: 12,
  },
  scheduleADelivery: {
    color: Color.notBlack,
    marginLeft: 39,
    textAlign: "left",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
  },
  backButtonParent: {
    top: 45,
    left: 42,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  aboutAppChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  version10: {
    top: 67,
    fontSize: FontSize.size_lg,
    lineHeight: 32,
    color: Color.black,
    left: 125,
  },
  frameChild: {
    top: 437,
    left: 125,
  },
  vectorIcon: {
    height: "0.19%",
    width: "1.18%",
    top: "44.82%",
    right: "51.52%",
    bottom: "54.99%",
    left: "47.3%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.3,
    position: "absolute",
    overflow: "hidden",
  },
  title: {
    marginLeft: -93,
    bottom: 0,
    color: Color.textPrimary,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    width: 186,
    left: "50%",
    alignItems: "center",
  },
  titleWrapper: {
    marginLeft: -92.5,
    bottom: 1024,
  },
  parcelIsThe: {
    top: 105,
    fontSize: FontSize.boldNormalHeading_size,
    lineHeight: 24,
    color: "rgba(0, 0, 0, 0.8)",
    width: 338,
    height: 291,
    left: 0,
  },
  parcel11: {
    top: 34,
    left: 104,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  version10Parent: {
    top: 92,
    left: 39,
    width: 337,
    height: 490,
    position: "absolute",
  },
  aboutApp: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default AboutApp;
