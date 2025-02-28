import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconWallet from "@/assets/icons/wallet_add.svg";
import { CountryProps, CurrencyProps, useStoreApp } from "@/hooks/useStoreApp";
import { useRouter } from "expo-router";

export default function NewRequestButton() {
  const router = useRouter();

  const setAmount = useStoreApp((state) => state.setAmount);
  const setCurrency = useStoreApp((state) => state.setCurrency);
  const setCountry = useStoreApp((state) => state.setCountry);
  const setWebUrl = useStoreApp((state) => state.setWebUrl);
  const setIdentifier = useStoreApp((state) => state.setIdentifier);
  const setConcept = useStoreApp((state) => state.setConcept);

  const newPaymentRequest = () => {
    setAmount("");
    setCurrency(CurrencyProps.EUR);
    setCountry(CountryProps.ESPAÑA);
    setWebUrl("");
    setIdentifier("");
    setConcept("");
    router.dismissAll();
  };

  return (
    <Pressable
      onPressIn={() => {
        newPaymentRequest();
      }}
      style={{
        width: "100%",
        height: 56,
        backgroundColor: "rgba(249,250,252,1)",
        borderRadius: 6,
        marginBottom: 44,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "MulishSemiBold",
          fontSize: 16,
          color: "rgba(3,90,197,1)",
        }}
      >
        Nueva solicitud
      </Text>
      <IconWallet />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
