import { Colors } from "@/constants/CustumColors";
import { StyleSheet } from "react-native";

export const inputs = StyleSheet.create({
  concept: {
    fontSize: 14,
    fontFamily: "MulishRegular",
    color: Colors.darkBlue,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  amount: {
    fontSize: 40,
    fontFamily: "MulishBold",
    color: "rgba(3,90,197,1)",
  },
});
