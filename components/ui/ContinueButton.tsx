import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export default function ContinueButton({
  createOrder,
  amount,
  isLoading,
}: {
  createOrder: () => void;
  amount: string;
  isLoading: boolean;
}) {
  const isNumber = Number(amount) > 0;

  return (
    <Pressable
      onPressIn={() => createOrder()}
      style={[
        styles.button,
        {
          backgroundColor: !isNumber
            ? "rgba(234,243,255,1)"
            : "rgba(3,90,197,1)",
        },
      ]}
      disabled={!isNumber}
    >
      {isLoading ? (
        <ActivityIndicator color={"rgba(255,255,255,1)"} />
      ) : (
        <Text
          style={[
            styles.textButton,
            {
              color: !isNumber ? "rgba(113,176,253,1)" : "rgba(255,255,255,1)",
            },
          ]}
        >
          Continuar
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 18,
  },
  textButton: {
    fontFamily: "MulishSemiBold",
    fontSize: 16,
  },
});
