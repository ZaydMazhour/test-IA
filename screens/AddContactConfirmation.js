import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const AddContactConfirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addContactConfirmation}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={[styles.editContact, styles.nameFlexBox]}>
          Edit contact
        </Text>
        <Image
          style={[styles.icMoreIcon, styles.icMoreIconLayout]}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Pressable
          style={[styles.leftArrow11, styles.icMoreIconLayout]}
          onPress={() => navigation.navigate("AddToAddress")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leftarrow-1-1.png")}
          />
        </Pressable>
        <View style={[styles.statusbar, styles.statusbarPosition]}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderBorder]} />
        <Image
          style={[styles.capIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={styles.layer3}>
        <Image
          style={[styles.vectorIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hClr]}>3h</Text>
      </View>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={[styles.info, styles.infoLayout]}>
          <Text style={[styles.johnChinedu, styles.johnChineduTypo]}>
            John Chinedu
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Name</Text>
      </View>
      <View style={[styles.password1, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={[styles.info1, styles.infoLayout]}>
          <Text style={[styles.johnChinedu, styles.johnChineduTypo]}>
            14B Wole Ariyo Street, Lekki Phase 1
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Location</Text>
      </View>
      <View style={[styles.password2, styles.passwordPosition]}>
        <View style={[styles.passwordChild, styles.borderBorder]} />
        <View style={[styles.info2, styles.infoLayout]}>
          <Text style={[styles.johnChinedu, styles.johnChineduTypo]}>
            08128292934
          </Text>
        </View>
        <Text style={[styles.name, styles.namePosition]}>Contact Number</Text>
      </View>
      <Text style={[styles.deleteContact, styles.johnChineduTypo]}>
        Delete contact
      </Text>
      <Pressable
        style={styles.pryButton}
        onPress={() => navigation.navigate("AddToAddress")}
      >
        <Text style={[styles.next, styles.hClr]}>Update</Text>
      </Pressable>
      <Image
        style={[styles.backdropBaseIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/backdrop-base.png")}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.contactWasSuccessfully, styles.timeTypo]}>
          Contact was successfully added
        </Text>
        <Image
          style={[styles.groupChild, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <View style={styles.next1}>
          <Pressable
            style={[styles.rectangleCopy, styles.iconPosition]}
            onPress={() => navigation.navigate("AddToAddress")}
          >
            <Image
              style={[styles.icon1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-copy.png")}
            />
          </Pressable>
          <Text style={[styles.continue, styles.hClr]}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  nameFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icMoreIconLayout: {
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  statusbarPosition: {
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  hClr: {
    color: Color.mainWhite,
    textAlign: "left",
  },
  passwordPosition: {
    left: "7.48%",
    right: "7.48%",
    width: "85.05%",
    height: "12.42%",
    position: "absolute",
  },
  infoLayout: {
    height: "23.48%",
    position: "absolute",
  },
  johnChineduTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  namePosition: {
    left: "0%",
    top: "0%",
  },
  iconPosition: {
    right: "0%",
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  editContact: {
    marginLeft: -143,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontFamily: FontFamily.rubikBold,
    color: Color.dark,
    fontWeight: "700",
    top: 63,
    textAlign: "left",
    left: "50%",
  },
  icMoreIcon: {
    marginLeft: 165,
    left: "50%",
    overflow: "hidden",
  },
  icon: {
    overflow: "hidden",
  },
  leftArrow11: {
    left: 27,
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    top: "50%",
    left: "5.6%",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
  },
  statusbar: {
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
    top: 0,
  },
  header: {
    top: -6,
    height: 87,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: "#384144",
    opacity: 0.35,
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    backgroundColor: Color.darkslategray_400,
    position: "absolute",
  },
  battery: {
    height: "1.22%",
    width: "5.68%",
    top: "1.19%",
    right: "5.69%",
    bottom: "97.59%",
    left: "88.63%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  vectorIcon: {
    right: "0%",
    position: "absolute",
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  h: {
    top: 3,
    left: 3,
    fontSize: FontSize.size_5xs,
    lineHeight: 10,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  layer3: {
    height: "1.73%",
    width: "3.74%",
    top: "12.85%",
    right: "86.21%",
    bottom: "85.42%",
    left: "10.05%",
    position: "absolute",
  },
  passwordChild: {
    height: "74.78%",
    width: "100.27%",
    top: "25.65%",
    right: "-0.14%",
    bottom: "-0.43%",
    left: "-0.14%",
    borderRadius: Border.br_9xs,
    borderColor: "#c4c4c4",
    backgroundColor: Color.mainWhite,
  },
  johnChinedu: {
    color: Color.black,
    left: "0%",
    top: "0%",
  },
  info: {
    width: "34.89%",
    top: "51.3%",
    right: "54.95%",
    bottom: "25.22%",
    left: "10.16%",
  },
  name: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray_300,
    opacity: 0.5,
    top: "0%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: "11.56%",
    bottom: "76.03%",
  },
  info1: {
    width: "85.71%",
    top: "56.52%",
    right: "3.3%",
    bottom: "20%",
    left: "10.99%",
  },
  password1: {
    top: "26.24%",
    bottom: "61.34%",
  },
  info2: {
    width: "32.42%",
    top: "49.57%",
    right: "53.57%",
    bottom: "26.96%",
    left: "14.01%",
  },
  password2: {
    top: "40.93%",
    bottom: "46.65%",
  },
  deleteContact: {
    top: "64.58%",
    left: "31.54%",
    color: Color.slategray_200,
  },
  next: {
    fontSize: FontSize.boldNormalHeading_size,
    fontFamily: FontFamily.boldNormalHeading,
    fontWeight: "700",
  },
  pryButton: {
    top: 525,
    left: 69,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colourMain2,
    width: 281,
    flexDirection: "row",
    paddingHorizontal: Padding.p_126xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  backdropBaseIcon: {
    right: -39,
    bottom: -33,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "109.41%",
    width: "112.23%",
    top: "-2.35%",
    right: "-9.17%",
    bottom: "-7.06%",
    left: "-3.06%",
    position: "absolute",
  },
  contactWasSuccessfully: {
    top: "53.18%",
    left: "15.29%",
    fontFamily: FontFamily.quicksandRegular,
    color: "#313942",
  },
  groupChild: {
    height: "49.18%",
    width: "61.77%",
    top: "6.82%",
    right: "21.41%",
    bottom: "44%",
    left: "16.82%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  rectangleCopy: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  continue: {
    top: "27.08%",
    left: "33.11%",
    fontSize: 17,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  next1: {
    height: "11.29%",
    width: "68.5%",
    top: "67.76%",
    right: "17.13%",
    bottom: "20.94%",
    left: "14.37%",
    position: "absolute",
  },
  groupParent: {
    height: "45.9%",
    width: "76.4%",
    top: "21.6%",
    right: "10.75%",
    bottom: "32.51%",
    left: "12.85%",
    position: "absolute",
  },
  addContactConfirmation: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.mainWhite,
  },
});

export default AddContactConfirmation;
