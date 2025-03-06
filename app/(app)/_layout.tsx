import { View } from "react-native";
import React, { useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBitnovo from "@/assets/icons/bitnovo_pay_logo.svg";
import { Colors } from "@/constants/CustumColors";
import { containers } from "@/styles/containers";
import HeaderLeftButton from "@/components/ui/HeaderLeftButton";

export default function _layout() {
  const [session, setSession] = useState(true);
  const router = useRouter();

  if (!session) {
    return <Redirect href="./sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          color: Colors.darkBlue,
          fontSize: 18,
          fontFamily: "MulishBold",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Crear pago",
          contentStyle: {
            backgroundColor: Colors.white,
          },
        }}
      />
      <Stack.Screen
        name="select-currency"
        options={{
          headerTitle: "Selecciona una divisa",
          contentStyle: {
            backgroundColor: "rgba(255,255,255,1)",
          },
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Stack.Screen
        name="checking-payment"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.white,
          },
        }}
      />
      <Stack.Screen
        name="select-country"
        options={{
          headerTitle: "Seleccionar país",
          contentStyle: {
            backgroundColor: Colors.white,
          },
        }}
      />
      <Stack.Screen
        name="qr"
        options={{
          headerTitle: "",
          contentStyle: {
            backgroundColor: Colors.blue,
          },
        }}
      />
      <Stack.Screen
        name="payment-completed"
        options={{
          header: () => (
            <SafeAreaView>
              <View style={containers.header}>
                <IconBitnovo />
              </View>
            </SafeAreaView>
          ),
          contentStyle: {
            backgroundColor: Colors.white,
          },
        }}
      />
    </Stack>
  );
}
