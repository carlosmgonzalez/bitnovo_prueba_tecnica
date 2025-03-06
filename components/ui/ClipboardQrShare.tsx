import { Alert, Pressable, Text, View } from "react-native";
import React from "react";
import IconLink from "@/assets/icons/link.svg";
import IconScanBarcode from "@/assets/icons/scan_barcode.svg";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import { buttons } from "@/styles/buttons";
import { ThemedText } from "../ThemedText";
import { containers } from "@/styles/containers";

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
    <View style={containers.clipboard}>
      <Pressable
        onPressIn={copyToClipboard}
        style={({ pressed }) => [
          buttons.clipboard,
          {
            borderColor: pressed ? "rgba(3,90,197,1)" : "rgba(211,220,230,1)",
          },
        ]}
      >
        <IconLink />
        <ThemedText variant="share">{cutUrl(webUrl)}</ThemedText>
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate("/qr");
        }}
        style={buttons.qr}
      >
        <IconScanBarcode />
      </Pressable>
    </View>
  );
}
