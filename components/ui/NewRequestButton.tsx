import { Pressable } from "react-native";
import React from "react";
import IconWallet from "@/assets/icons/wallet_add.svg";
import { useStoreApp } from "@/hooks/useStoreApp";
import { useRouter } from "expo-router";
import { buttons } from "@/styles/buttons";
import { ThemedText } from "../ThemedText";

export default function NewRequestButton() {
  const router = useRouter();

  const { setState } = useStoreApp();

  const newPaymentRequest = () => {
    setState({
      amount: "",
      webUrl: "",
      identifier: "",
      concept: "",
    });
    router.dismissAll();
  };

  return (
    <Pressable
      onPressIn={() => {
        newPaymentRequest();
      }}
      style={buttons.secondary}
    >
      <ThemedText variant="labelLargeSemibold">Nueva solicitud</ThemedText>
      <IconWallet />
    </Pressable>
  );
}
