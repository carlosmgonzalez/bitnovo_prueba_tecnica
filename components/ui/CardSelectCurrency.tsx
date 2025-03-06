import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CurrencyProps } from "@/hooks/useStoreApp";
import { useRouter } from "expo-router";
import { buttons } from "@/styles/buttons";

export default function CardSelectCurrency({
  children,
  setCurrency,
  currency,
}: {
  children: React.ReactNode;
  setCurrency: (curr: CurrencyProps) => void;
  currency: CurrencyProps;
}) {
  const router = useRouter();

  return (
    <Pressable
      onPressIn={() => {
        setCurrency(currency);
        router.back();
      }}
      style={({ pressed }) => [
        buttons.cardCurrency,
        {
          backgroundColor: pressed
            ? "rgba(239,242,247,1)"
            : "rgba(255,255,255,1)",
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
