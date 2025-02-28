import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconPaymentCompleted from "@/assets/icons/payment_completed_check.svg";
import { useRouter } from "expo-router";
import { useStoreApp } from "@/hooks/useStoreApp";

export default function PaymentCompleted() {
  const router = useRouter();
  const setIdentifier = useStoreApp((state) => state.setIdentifier);
  const setAmount = useStoreApp((state) => state.setAmount);
  const setPaymentStatus = useStoreApp((state) => state.setPaymentStatus);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <IconPaymentCompleted />
        <Text
          style={{
            fontFamily: "MulishBold",
            fontSize: 20,
            color: "rgba(0,40,89,1)",
          }}
        >
          Pago recibido
        </Text>
        <Text
          style={{
            fontFamily: "MulishRegular",
            fontSize: 14,
            color: "rgba(100,113,132,1)",
          }}
        >
          El pago se ha confirmado con éxito
        </Text>
      </View>
      <Pressable
        onPress={() => {
          router.dismissAll();
          setIdentifier("");
          setAmount("");
          setPaymentStatus("close");
        }}
        style={{
          width: "100%",
          height: 56,
          borderRadius: 6,
          backgroundColor: "rgba(249,250,252,1)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "MulishSemiBold",
            fontSize: 16,
            color: "rgba(3,90,197,1)",
          }}
        >
          Finalizar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 44,
  },
});
