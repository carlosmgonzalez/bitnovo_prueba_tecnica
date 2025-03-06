import { Colors } from "@/constants/CustumColors";
import { StyleSheet } from "react-native";

export const typographys = StyleSheet.create({
  share: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: Colors.darkBlue,
  },
  send: {
    fontFamily: "MulishBold",
    fontSize: 12,
    color: Colors.white,
  },
  infoCardTop: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: Colors.grey,
  },
  secondaryAmount: {
    fontFamily: "MulishBold",
    fontSize: 30,
    color: Colors.darkBlue,
  },
  infoCardBelow: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    color: Colors.grey,
  },

  //------------------------- Title -----------------------------------
  titleMedium: {
    fontFamily: "MulishBold",
    fontSize: 20,
    color: Colors.darkBlue,
  },
  titleLargeBoldWhite: {
    fontFamily: "MulishBold",
    fontSize: 26,
    color: Colors.white,
  },

  //------------------------- Subtitle --------------------------------
  subtitleMedium: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: Colors.grey,
  },

  //------------------------- Label -----------------------------------
  labelLargeSemibold: {
    fontFamily: "MulishSemiBold",
    fontSize: 16,
    color: Colors.blue,
  },
  labelSmallRegular: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    color: Colors.grey,
  },
  labelMediumBold: {
    fontFamily: "MulishBold",
    fontSize: 14,
    color: Colors.darkBlue,
  },
  labelSmallBold: {
    fontFamily: "MulishBold",
    fontSize: 12,
    color: Colors.darkBlue,
  },
  labelMediumRegular: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: Colors.white,
  },
  labelSmallRegularDarkBlue: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    color: "rgba(0,40,89,1)",
  },
  labelMediumRegularDarkBlue: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: "rgba(0,40,89,1)",
  },
  // ------------------- Buttons -----------------------
  primaryButton: {
    fontFamily: "MulishSemiBold",
    fontSize: 16,
    color: "rgba(255,255,255,1)",
  },
  primaryButtonDisable: {
    fontFamily: "MulishSemiBold",
    fontSize: 16,
    color: Colors.lightBlue,
  },
  currency: {
    fontSize: 40,
    fontFamily: "MulishBold",
    color: Colors.lightestGrey,
  },
});
