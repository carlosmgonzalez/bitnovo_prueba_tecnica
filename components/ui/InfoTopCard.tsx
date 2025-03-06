import { View } from "react-native";
import React from "react";
import IconSolicitud from "@/assets/icons/icono_solicitud.svg";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { CurrencyProps } from "@/hooks/useStoreApp";
import { ThemedText } from "../ThemedText";
import { containers } from "@/styles/containers";

export default function InfoTopCard({
  amount,
  currency,
}: {
  amount: string;
  currency: CurrencyProps;
}) {
  const isSymbolCurrency = symbolCurrency(currency);

  return (
    <View style={containers.card}>
      <View style={containers.internalCard}>
        <IconSolicitud />
        <View style={{ flexDirection: "column" }}>
          <ThemedText variant="infoCardTop">Solicitud de pago</ThemedText>
          <ThemedText variant="secondaryAmount">
            {isSymbolCurrency == "$" && isSymbolCurrency + " "}
            {amount}
            {(isSymbolCurrency == "€" || isSymbolCurrency == "£") &&
              " " + isSymbolCurrency}
          </ThemedText>
        </View>
      </View>
      <ThemedText variant="infoCardBelow">
        Comparte el enlace de pago con el cliente
      </ThemedText>
    </View>
  );
}
