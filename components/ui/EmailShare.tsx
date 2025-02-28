import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconMsm from "@/assets/icons/sms.svg";

export default function EmailShare() {
  return (
    <View style={styles.container}>
      <IconMsm />
      <Text
        style={{
          fontFamily: "MulishRegular",
          fontSize: 14,
          color: "rgba(0,40,89,1)",
        }}
      >
        Enviar por correo electrónico
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "rgba(211,220,230,1)",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
  },
});
