import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const AddToAddress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addToAddress}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.background, styles.headerPosition]} />
        <Text style={[styles.contactList, styles.hFlexBox]}>Contact List</Text>
        <Image
          style={styles.icMoreIcon}
          contentFit="cover"
          source={require("../assets/icmore.png")}
        />
        <Pressable
          style={styles.leftArrow11}
          onPress={() => navigation.navigate("AccountPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/leftarrow-1-1.png")}
          />
        </Pressable>
        <View style={styles.statusbar}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={styles.battery}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.iconLayout]}
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
      <View style={[styles.layer2, styles.layerLayout]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hFlexBox]}>3h</Text>
      </View>
      <View style={[styles.layer3, styles.layerLayout]}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.h, styles.hFlexBox]}>3h</Text>
      </View>
      <View style={[styles.password, styles.passwordPosition]}>
        <View style={styles.info}>
          <Text style={styles.johnChinedu}>John Chinedu</Text>
        </View>
      </View>
      <View style={styles.password1}>
        <View style={styles.info}>
          <Pressable
            style={[styles.addContact, styles.borderPosition]}
            onPress={() => navigation.navigate("AddNewContact")}
          >
            <Text style={styles.addContact1}>Add contact</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.password2, styles.passwordPosition]}>
        <View style={styles.info}>
          <Text style={styles.johnChinedu}>John Chinedu</Text>
        </View>
      </View>
      <View style={[styles.password3, styles.passwordPosition]}>
        <View style={styles.info}>
          <Text style={styles.johnChinedu}>John Chinedu</Text>
        </View>
      </View>
      <Image
        style={[styles.addToAddressChild, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.addToAddressItem, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={[styles.addToAddressInner, styles.addLayout]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <Text style={[styles.bWoleAriyo, styles.woleTypo]}>
        14b wole ariyo street, Lekki phase 1
      </Text>
      <Text style={[styles.bWoleAriyo1, styles.woleTypo]}>
        14b wole ariyo street, Lekki phase 1
      </Text>
      <Text style={[styles.bWoleAriyo2, styles.woleTypo]}>
        14b wole ariyo street, Lekki phase 1
      </Text>
      <Text style={[styles.text, styles.textTypo]}>0812902934</Text>
      <Text style={[styles.text1, styles.textTypo]}>0812902934</Text>
      <Text style={[styles.text2, styles.textTypo]}>0812902934</Text>
      <Pressable
        style={[styles.icModeEdit24px1, styles.modePosition]}
        onPress={() => navigation.navigate("EditContact")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ic-mode-edit-24px-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.icModeEdit24px2, styles.modePosition]}
        onPress={() => navigation.navigate("EditContact")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ic-mode-edit-24px-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icModeEdit24px3Icon, styles.modePosition]}
        contentFit="cover"
        source={require("../assets/ic-mode-edit-24px-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.addChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10924.png")}
      />
      <Image
        style={[styles.addToAddressChild1, styles.addChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10924.png")}
      />
      <Image
        style={[styles.addToAddressChild2, styles.addChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10924.png")}
      />
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
  hFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  layerLayout: {
    width: "3.74%",
    height: "1.73%",
    position: "absolute",
  },
  passwordPosition: {
    left: "16.36%",
    right: "60.75%",
    width: "22.9%",
    height: "2.27%",
    position: "absolute",
  },
  addLayout: {
    left: "16.24%",
    height: "0.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  woleTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    left: "16.36%",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.darkgray_300,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    left: "16.36%",
    textAlign: "left",
    position: "absolute",
  },
  modePosition: {
    left: 358,
    height: 24,
    width: 24,
    position: "absolute",
  },
  addChildLayout: {
    height: 35,
    width: 35,
    left: 27,
    position: "absolute",
  },
  background: {
    top: 6,
    backgroundColor: Color.backgroundBackground4,
    height: 47,
  },
  contactList: {
    marginLeft: -143,
    fontSize: FontSize.h3Header320ptMediumRoboto_size,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.dark,
    top: 63,
    textAlign: "left",
    left: "50%",
  },
  icMoreIcon: {
    marginLeft: 165,
    height: 24,
    width: 24,
    top: 63,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  leftArrow11: {
    left: 27,
    height: 24,
    width: 24,
    top: 63,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    width: "14.4%",
    top: "50%",
    left: "5.6%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.darkslategray_400,
    textAlign: "center",
    position: "absolute",
  },
  statusbar: {
    top: 0,
    width: 375,
    height: 44,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  header: {
    top: -6,
    height: 87,
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#384144",
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
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
    color: Color.mainWhite,
  },
  layer2: {
    top: "45.03%",
    right: "88.08%",
    bottom: "53.24%",
    left: "8.18%",
  },
  layer3: {
    right: "86.21%",
    bottom: "80.35%",
    left: "10.05%",
    top: "17.93%",
  },
  johnChinedu: {
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  info: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  password: {
    bottom: "79.81%",
    top: "17.93%",
  },
  addContact1: {
    color: Color.slategray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.boldNormalHeading_size,
    textAlign: "left",
  },
  addContact: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  password1: {
    width: "20.33%",
    top: "12.85%",
    right: "8.18%",
    bottom: "84.88%",
    left: "71.5%",
    height: "2.27%",
    position: "absolute",
  },
  password2: {
    top: "29.37%",
    bottom: "68.36%",
  },
  password3: {
    top: "39.42%",
    bottom: "58.32%",
  },
  addToAddressChild: {
    top: "26.51%",
    bottom: "73.38%",
    width: "83.76%",
    left: "16.24%",
    height: "0.11%",
    right: "0%",
  },
  addToAddressItem: {
    top: "37.85%",
    bottom: "62.04%",
    width: "83.76%",
    left: "16.24%",
    height: "0.11%",
    right: "0%",
  },
  addToAddressInner: {
    width: "84.35%",
    top: "48%",
    right: "-0.58%",
    bottom: "51.89%",
    left: "16.24%",
    height: "0.11%",
  },
  bWoleAriyo: {
    top: "20.19%",
  },
  bWoleAriyo1: {
    top: "31.86%",
  },
  bWoleAriyo2: {
    top: "42.12%",
  },
  text: {
    top: "22.46%",
  },
  text1: {
    top: "34.34%",
  },
  text2: {
    top: "44.38%",
  },
  icModeEdit24px1: {
    top: 178,
  },
  icModeEdit24px2: {
    top: 279,
  },
  icModeEdit24px3Icon: {
    top: 372,
    overflow: "hidden",
  },
  groupIcon: {
    top: 173,
  },
  addToAddressChild1: {
    top: 279,
  },
  addToAddressChild2: {
    top: 372,
  },
  addToAddress: {
    backgroundColor: Color.mainWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddToAddress;
