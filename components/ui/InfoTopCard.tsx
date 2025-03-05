import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconSolicitud from "@/assets/icons/icono_solicitud.svg";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { CurrencyProps } from "@/hooks/useStoreApp";

export default function InfoTopCard({
  amount,
  currency,
}: {
  amount: string;
  currency: CurrencyProps;
}) {
  const isSymbolCurrency = symbolCurrency(currency);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <IconSolicitud />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.textSolicitud}>Solicitud de pago</Text>
          <Text style={styles.textAmount}>
            {isSymbolCurrency == "$" && isSymbolCurrency + " "}
            {amount}
            {(isSymbolCurrency == "€" || isSymbolCurrency == "£") &&
              " " + isSymbolCurrency}
          </Text>
        </View>
      </View>
      <Text style={styles.belowContainer}>
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 114,
    borderRadius: 12,
    backgroundColor: "rgba(249,250,252,1)",
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textSolicitud: {
    fontFamily: "MulishRegular",
    fontSize: 14,
    color: "rgba(100,113,132,1)",
  },
  textAmount: {
    fontFamily: "MulishBold",
    fontSize: 30,
    color: "rgba(0,40,89,1)",
  },
  belowContainer: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    color: "rgba(100,113,132,1)",
  },
});
