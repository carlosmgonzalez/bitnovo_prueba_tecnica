import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconLink from "@/assets/icons/link.svg";
import IconScanBarcode from "@/assets/icons/scan_barcode.svg";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";

export default function ClipboardQrShare({ webUrl }: { webUrl: string }) {
  const router = useRouter();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(webUrl);
    Alert.prompt("Copiado correctamente");
  };

  const cutUrl = (url: string) => {
    return url.split("//")[1];
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        gap: 16,
      }}
    >
      <Pressable
        onPressIn={copyToClipboard}
        style={({ pressed }) => [
          styles.container,
          {
            flex: 1,
            borderColor: pressed ? "rgba(3,90,197,1)" : "rgba(211,220,230,1)",
          },
        ]}
      >
        <IconLink />
        <Text
          style={{
            fontFamily: "MulishRegular",
            fontSize: 14,
            color: "rgba(0,40,89,1)",
          }}
        >
          {cutUrl(webUrl)}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate("/qr");
        }}
        style={{
          width: 56,
          height: 56,
          borderRadius: 6,
          backgroundColor: "rgba(3,90,197,1)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconScanBarcode />
      </Pressable>
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
