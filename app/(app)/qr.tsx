import { View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import IconInfoCircle from "@/assets/icons/info_circle.svg";
import QRCode from "react-native-qrcode-svg";
import { useStoreApp } from "@/hooks/useStoreApp";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { Stack, useRouter } from "expo-router";
import { containers } from "@/styles/containers";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/CustumColors";
import HeaderLeftButton from "@/components/ui/HeaderLeftButton";

export default function qr() {
  const router = useRouter();
  const { state } = useStoreApp();

  const screenWidth = Dimensions.get("screen").width;

  const isSymbolCurrency = symbolCurrency(state.currency);

  useEffect(() => {
    if (state.paymentStatus === "completed") {
      router.dismissTo("/payment-completed");
    }
  }, [state.paymentStatus]);

  return (
    <View style={containers.qr}>
      <Stack.Screen
        options={{
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <View style={containers.alertQr}>
        <IconInfoCircle />
        <ThemedText
          variant="labelSmallRegularDarkBlue"
          style={{ flexShrink: 1 }}
        >
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </ThemedText>
      </View>
      <View style={{ gap: 24, alignItems: "center" }}>
        <View style={containers.subQr}>
          <QRCode
            value={state.webUrl}
            size={screenWidth * 0.8}
            color={Colors.darkBlue}
          />
        </View>
        <ThemedText variant="titleLargeBoldWhite">
          {isSymbolCurrency == "$" && isSymbolCurrency + " "}
          {state.amount}
          {(isSymbolCurrency == "€" || isSymbolCurrency == "£") &&
            " " + isSymbolCurrency}
        </ThemedText>
        <ThemedText variant="labelMediumRegular">
          Esta pantalla se actualizará automáticamente.
        </ThemedText>
      </View>
    </View>
  );
}
