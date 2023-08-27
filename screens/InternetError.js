import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const InternetError = () => {
  return (
    <View style={styles.internetError}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg6.png")}
      />
      <Image
        style={[styles.backdropIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/backdrop2.png")}
      />
      <Text style={[styles.enterPickupAnd, styles.nextTypo]}>
        Enter Pickup and Dropoff
      </Text>
      <View style={styles.internetErrorChild} />
      <View style={[styles.vectorParent, styles.pryButtonFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.sorryNoResult, styles.resultTypo]}>
          Sorry! No result found
        </Text>
        <Text style={[styles.noResultWas, styles.resultTypo]}>
          No result was found for the search made
        </Text>
      </View>
      <View style={[styles.pryButton, styles.pryButtonFlexBox]}>
        <Text style={styles.nextTypo}>Back</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    color: Color.mainWhite,
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  pryButtonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  resultTypo: {
    marginTop: 10,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  bgIcon: {
    top: 0,
    width: 1041,
    height: 976,
  },
  backdropIcon: {
    top: 85,
    width: 0,
    height: 0,
  },
  enterPickupAnd: {
    width: "42.03%",
    top: "24.44%",
    left: "9.66%",
    position: "absolute",
  },
  internetErrorChild: {
    top: 128,
    left: -9,
    backgroundColor: Color.whitesmoke_700,
    width: 433,
    height: 419,
    display: "none",
    position: "absolute",
  },
  vectorIcon: {
    width: 132,
    height: 120,
  },
  sorryNoResult: {
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.ptBoldHeader5CardTitles_size,
  },
  noResultWas: {
    fontFamily: FontFamily.ptRegularNormalText,
    opacity: 0.57,
  },
  vectorParent: {
    top: 288,
    left: 56,
  },
  pryButton: {
    top: 783,
    left: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 334,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
  },
  internetError: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default InternetError;
