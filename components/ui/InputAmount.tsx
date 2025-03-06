import { TextInput, View } from "react-native";
import React from "react";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { CurrencyProps } from "@/hooks/useStoreApp";
import { formatAmount } from "@/utils/formatAmount";
import { inputs } from "@/styles/inputs";
import { Colors } from "@/constants/CustumColors";
import { ThemedText } from "../ThemedText";
import { containers } from "@/styles/containers";

export default function InputAmount({
  amount,
  setAmount,
  currency,
}: {
  amount: string;
  setAmount: (amount: string) => void;
  currency: CurrencyProps;
}) {
  const isSymbolCurrency = symbolCurrency(currency);

  const formatInputAmount = (text: string) => {
    if (text.length == 0) {
      return;
    } else if (!(Number(text) > 0)) {
      setAmount("");
      return;
    }
    const formatted = formatAmount(text);
    setAmount(formatted);
  };

  const handleChangeAmount = (text: string) => {
    let formattedText = text.replace(/[^0-9.]/g, "");

    const dotCount = (formattedText.match(/\./g) || []).length;
    if (dotCount > 1) return;

    if (formattedText.includes(".")) {
      const [integer, decimal] = formattedText.split(".");
      if (decimal.length > 2) return;
      formattedText = integer + "." + decimal;
    }

    const numericAmount = parseFloat(formattedText);
    if (numericAmount > 10000000) return;

    setAmount(formattedText);
  };

  return (
    <View style={containers.amount}>
      {isSymbolCurrency == "$" && (
        <ThemedText
          variant="currency"
          style={{
            color:
              amount.length == 0 ? "rgba(192,204,218,1)" : "rgba(3,90,197,1)",
          }}
        >
          {isSymbolCurrency}
        </ThemedText>
      )}
      <TextInput
        onChangeText={handleChangeAmount}
        value={amount}
        placeholder={"0.00"}
        keyboardType="numeric"
        multiline={false}
        numberOfLines={1}
        placeholderTextColor={"rgba(192,204,218,1)"}
        style={inputs.amount}
        cursorColor="rgba(3,90,197,1)"
        onEndEditing={() => formatInputAmount(amount)}
      />
      {(isSymbolCurrency === "€" || isSymbolCurrency === "£") && (
        <ThemedText
          variant="currency"
          style={{
            color: amount.length == 0 ? Colors.lightestGrey : Colors.blue,
          }}
        >
          {isSymbolCurrency}
        </ThemedText>
      )}
    </View>
  );
}
