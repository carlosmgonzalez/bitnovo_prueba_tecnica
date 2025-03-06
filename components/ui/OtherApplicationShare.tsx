import { Pressable } from "react-native";
import React from "react";
import Share from "react-native-share";
import IconShare from "@/assets/icons/share.svg";
import { containers } from "@/styles/containers";
import { ThemedText } from "../ThemedText";

export default function OtherApplicationShare({ webUrl }: { webUrl: string }) {
  const handleShareLink = () => {
    Share.open({ url: webUrl })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Pressable
      onPress={handleShareLink}
      style={({ pressed }) =>
        pressed ? containers.shareActive : containers.share
      }
    >
      <IconShare />
      <ThemedText variant="share">Compartir con otras aplicaciones</ThemedText>
    </Pressable>
  );
}
