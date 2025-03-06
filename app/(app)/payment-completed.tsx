import { Pressable, View } from "react-native";
import React from "react";
import IconPaymentCompleted from "@/assets/icons/payment_completed_check.svg";
import { useRouter } from "expo-router";
import { useStoreApp } from "@/hooks/useStoreApp";
import { containers } from "@/styles/containers";
import { ThemedText } from "@/components/ThemedText";
import { buttons } from "@/styles/buttons";

export default function PaymentCompleted() {
  const router = useRouter();
  // const setIdentifier = useStoreApp((state) => state.setIdentifier);
  // const setAmount = useStoreApp((state) => state.setAmount);
  // const setPaymentStatus = useStoreApp((state) => state.setPaymentStatus);
  // const setConcept = useStoreApp((state) => state.setConcept);

  const { state, setState } = useStoreApp();

  return (
    <View style={containers.completed}>
      <View style={containers.subConpleted}>
        <IconPaymentCompleted />
        <ThemedText variant="titleMedium">Pago recibido</ThemedText>
        <ThemedText variant="subtitleMedium">
          El pago se ha confirmado con éxito
        </ThemedText>
      </View>
      <Pressable
        onPress={() => {
          // setIdentifier("");
          // setAmount("");
          // setPaymentStatus("close");
          // setConcept("");
          setState({
            identifier: "",
            amount: "",
            paymentStatus: "close",
            concept: "",
          });
          router.dismissAll();
        }}
        style={buttons.secondary}
      >
        <ThemedText variant="labelLargeSemibold">Finalizar</ThemedText>
      </Pressable>
    </View>
  );
}
