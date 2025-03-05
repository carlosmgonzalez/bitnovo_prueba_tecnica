import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { CurrencyProps } from "@/hooks/useStoreApp";
import { formatAmount } from "@/utils/formatAmount";

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

  return (
    <View style={styles.inputContainer}>
      {isSymbolCurrency == "$" && (
        <Text
          style={{
            ...styles.textCurrency,
            color:
              amount.length == 0 ? "rgba(192,204,218,1)" : "rgba(3,90,197,1)",
          }}
        >
          {isSymbolCurrency}
        </Text>
      )}
      <TextInput
        onChangeText={setAmount}
        value={amount}
        placeholder={"0.00"}
        keyboardType="numeric"
        multiline={false}
        numberOfLines={1}
        placeholderTextColor={"rgba(192,204,218,1)"}
        style={{
          fontSize: 40,
          fontFamily: "MulishBold",
          color: "rgba(3,90,197,1)",
        }}
        cursorColor="rgba(3,90,197,1)"
        onEndEditing={() => formatInputAmount(amount)}
      />
      {(isSymbolCurrency === "€" || isSymbolCurrency === "£") && (
        <Text
          style={{
            ...styles.textCurrency,
            color:
              amount.length == 0 ? "rgba(192,204,218,1)" : "rgba(3,90,197,1)",
          }}
        >
          {isSymbolCurrency}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 35,
  },
  textCurrency: {
    fontSize: 40,
    fontFamily: "MulishBold",
  },
});
