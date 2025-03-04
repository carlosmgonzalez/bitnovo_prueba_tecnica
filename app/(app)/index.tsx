import ContinueButton from "@/components/ui/ContinueButton";
import InputAmount from "@/components/ui/InputAmount";
import InputConcept from "@/components/ui/InputConcept";
import { useStoreApp } from "@/hooks/useStoreApp";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const currency = useStoreApp((state) => state.currency);
  const amount = useStoreApp((state) => state.amount);
  const setAmount = useStoreApp((state) => state.setAmount);
  const setWebUrl = useStoreApp((state) => state.setWebUrl);
  const setIdentifier = useStoreApp((state) => state.setIdentifier);
  const concept = useStoreApp((state) => state.concept);
  const setConcept = useStoreApp((state) => state.setConcept);

  interface DataProps {
    identifier: string;
    web_url: string;
  }

  const createOrder = () => {
    setIsLoading(true);

    const data = {
      expected_output_amount: amount,
      fiat: currency,
      language: "ES",
      notes: concept,
    };

    fetch("https://payments.pre-bnvo.com/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": process.env.EXPO_PUBLIC_X_DEVICE_ID || "",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json().then((data: DataProps) => {
          setIdentifier(data.identifier);
          setWebUrl(data.web_url);
          console.log(data);
        });
      })
      .catch((err) => {
        console.log("Error en la solicitud", err);
      })
      .finally(() => {
        setIsLoading(false);
        router.navigate("/checking-payment");
      });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable
              onPressIn={() => {
                router.navigate("/select-currency");
              }}
              style={({ pressed }) => [
                styles.headerButtonContainer,
                {
                  backgroundColor: pressed
                    ? "rgba(167, 170, 173, 0.3)"
                    : "rgba(211,220,230,0.3)",
                },
              ]}
            >
              <Text style={styles.headerButtonText}>{currency}</Text>
              <AntDesign name="down" size={13} color="rgba(0,40,89,1)" />
            </Pressable>
          ),
        }}
      />
      <View style={{ flex: 1 }}>
        <InputAmount
          amount={amount}
          setAmount={setAmount}
          currency={currency}
        />
        <InputConcept concept={concept} setConcept={setConcept} />
      </View>
      <ContinueButton
        amount={amount}
        isLoading={isLoading}
        createOrder={createOrder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerButtonContainer: {
    borderRadius: 24,
    backgroundColor: "rgba(211,220,230,0.3)",
    opacity: 30,
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
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(200,200,200,0.3)",
  },
});
