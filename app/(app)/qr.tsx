import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import IconInfoCircle from "@/assets/icons/info_circle.svg";
import QRCode from "react-native-qrcode-svg";
import { useStoreApp } from "@/hooks/useStoreApp";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { Stack, useRouter } from "expo-router";
import IconArrowLeft from "@/assets/icons/arrow_left.svg";

export default function qr() {
  const router = useRouter();

  const webUrl = useStoreApp((state) => state.webUrl);
  const amount = useStoreApp((state) => state.amount);
  const currency = useStoreApp((state) => state.currency);
  const paymentStatus = useStoreApp((state) => state.paymentStatus);
  const isSymbolCurrency = symbolCurrency(currency);

  useEffect(() => {
    if (paymentStatus === "completed") {
      router.dismissTo("/payment-completed");
    }
  }, [paymentStatus]);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable
              onPressIn={router.back}
              style={({ pressed }) => [
                {
                  width: 32,
                  height: 32,
                  borderRadius: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                  backgroundColor: pressed
                    ? "rgba(239, 242, 247, 0.78)"
                    : "rgba(239,242,247,1)",
                },
              ]}
            >
              <IconArrowLeft />
            </Pressable>
          ),
        }}
      />
      <View style={styles.alertaInfoContainer}>
        <IconInfoCircle />
        <Text style={styles.textInfo}>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </Text>
      </View>
      <View style={{ gap: 24 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 324,
            borderRadius: 6,
            backgroundColor: "rgba(255,255,255,1)",
            padding: 12,
          }}
        >
          <QRCode value={webUrl} size={270} color="rgba(0,40,89,1)" />
        </View>
        <Text style={styles.textAmount}>
          {isSymbolCurrency == "$" && isSymbolCurrency + " "}
          {amount}
          {(isSymbolCurrency == "€" || isSymbolCurrency == "£") &&
            " " + isSymbolCurrency}
        </Text>
        <Text style={styles.textInfoFooter}>
          Esta pantalla se actualizará automáticamente.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    flexDirection: "column",
    paddingTop: 18,
    paddingHorizontal: 18,
  },
  alertaInfoContainer: {
    width: "100%",
    height: 60,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(234,243,255,1)",
    borderRadius: 6,
    flexDirection: "row",
    gap: 5,
  },
  textInfo: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    color: "rgba(0,40,89,1)",
    textAlign: "left",
  },
  textAmount: {
    fontFamily: "MulishBold",
    fontSize: 26,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  textInfoFooter: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
});
