import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import IconBitnovo from "@/assets/icons/bitnovo_pay_logo.svg";

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
          color: "rgba(0,40,89,1)",
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
            backgroundColor: "rgba(255,255,255,1)",
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
          headerLeft: () => (
            <Pressable
              onPressIn={() => {
                router.back();
              }}
              style={({ pressed }) => [
                styles.buttonBack,
                {
                  backgroundColor: pressed
                    ? "rgba(167, 170, 173, 0.3)"
                    : "rgba(239,242,247,1)",
                },
              ]}
            >
              <AntDesign name="arrowleft" size={13} color="rgba(0,40,89,1)" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="checking-payment"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "rgba(255,255,255,1)",
          },
        }}
      />
      <Stack.Screen
        name="select-country"
        options={{
          headerTitle: "Seleccionar país",
          contentStyle: {
            backgroundColor: "rgba(255,255,255,1)",
          },
        }}
      />
      <Stack.Screen
        name="qr"
        options={{
          headerTitle: "",
          contentStyle: {
            backgroundColor: "rgba(3,90,197,1)",
          },
        }}
      />
      <Stack.Screen
        name="payment-completed"
        options={{
          header: ({ options }) => (
            <SafeAreaView>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 56,
                  width: "100%",
                  borderBottomWidth: 0.5,
                  borderColor: "rgba(190, 190, 190, 0.4)",
                }}
              >
                <IconBitnovo />
              </View>
            </SafeAreaView>
          ),
          contentStyle: {
            backgroundColor: "rgba(255,255,255,1)",
          },
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerButtonContainer: {
    borderRadius: 24,
    backgroundColor: "rgba(211,220,230,0.3)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 70,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  headerButtonText: {
    fontFamily: "MulishBold",
    fontSize: 12,
    color: "rgba(0,40,89,1)",
  },
  buttonBack: {
    borderRadius: 24,
    backgroundColor: "rgba(211,220,230,0.3)",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
});
