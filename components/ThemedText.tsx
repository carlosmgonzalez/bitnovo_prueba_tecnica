import { View, Text, TextProps } from "react-native";
import React from "react";
import { typographys } from "@/styles/typography";

export const ThemedText = ({
  children,
  variant,
  style,
  ...props
}: {
  children: React.ReactNode;
  variant: keyof typeof typographys;
} & TextProps) => {
  return (
    <Text style={[typographys[variant], style]} {...props}>
      {children}
    </Text>
  );
};
