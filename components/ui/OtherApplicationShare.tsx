import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Sharing from "expo-sharing";
import IconShare from "@/assets/icons/share.svg";

export default function OtherApplicationShare({ webUrl }: { webUrl: string }) {
  const shareLink = async () => {
    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      Alert.prompt("No se puede compartir en este dispositivo");
      return;
    }
    await Sharing.shareAsync(webUrl);
  };

  return (
    <Pressable
      onPress={shareLink}
      style={({ pressed }) => [
        styles.container,
        {
          borderColor: pressed ? "rgba(3,90,197,1)" : "rgba(211,220,230,1)",
        },
      ]}
    >
      <IconShare />
      <Text
        style={{
          fontFamily: "MulishRegular",
          fontSize: 14,
          color: "rgba(0,40,89,1)",
        }}
      >
        Compartir con otras aplicaciones
      </Text>
    </Pressable>
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
