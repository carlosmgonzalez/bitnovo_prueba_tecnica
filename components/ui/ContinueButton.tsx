import { ActivityIndicator, Pressable } from "react-native";
import { buttons } from "@/styles/buttons";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/CustumColors";

export default function ContinueButton({
  createOrder,
  amount,
  isLoading,
}: {
  createOrder: () => void;
  amount: string;
  isLoading: boolean;
}) {
  const isNumber = Number(amount) > 0;

  return (
    <Pressable
      onPressIn={() => createOrder()}
      style={isNumber ? buttons.primary : buttons.primaryDisable}
      disabled={!isNumber}
    >
      {isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <>
          {isNumber ? (
            <ThemedText variant="primaryButton">Continuar</ThemedText>
          ) : (
            <ThemedText variant="primaryButtonDisable">Continuar</ThemedText>
          )}
        </>
      )}
    </Pressable>
  );
}
