import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { buttons } from "@/styles/buttons";
import IconArrowLeft from "@/assets/icons/arrow_left.svg";

export default function HeaderLeftButton() {
  const router = useRouter();
  return (
    <Pressable
      onPressIn={() => {
        router.back();
      }}
      style={({ pressed }) => [
        buttons.headerLeft,
        {
          backgroundColor: pressed
            ? "rgba(167, 170, 173, 0.3)"
            : "rgba(239,242,247,1)",
        },
      ]}
    >
      <IconArrowLeft />
    </Pressable>
  );
}
