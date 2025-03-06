import { ThemedText } from "@/components/ThemedText";
import ContinueButton from "@/components/ui/ContinueButton";
import InputAmount from "@/components/ui/InputAmount";
import InputConcept from "@/components/ui/InputConcept";
import { Colors } from "@/constants/CustumColors";
import { useStoreApp } from "@/hooks/useStoreApp";
import { buttons } from "@/styles/buttons";
import { containers } from "@/styles/containers";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { setState, state } = useStoreApp();

  interface DataProps {
    identifier: string;
    web_url: string;
  }

  const createOrder = () => {
    setIsLoading(true);

    const data = {
      expected_output_amount: state.amount,
      fiat: state.currency,
      language: "ES",
      notes: state.concept,
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
          setState({ identifier: data.identifier });
          setState({ webUrl: data.web_url });
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
    <View style={containers.page}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable
              onPressIn={() => {
                router.navigate("/select-currency");
              }}
              style={({ pressed }) => [
                buttons.headerRight,
                {
                  backgroundColor: pressed
                    ? Colors.transparentGrey
                    : Colors.transparentLightGrey,
                },
              ]}
            >
              <ThemedText variant="labelSmallBold">{state.currency}</ThemedText>
              <AntDesign name="down" size={13} color={Colors.darkBlue} />
            </Pressable>
          ),
        }}
      />
      <View style={{ flex: 1 }}>
        <InputAmount
          amount={state.amount}
          setAmount={(amount) => setState({ amount: amount })}
          currency={state.currency}
        />
        <InputConcept
          concept={state.concept}
          setConcept={(e) => setState({ concept: e })}
        />
      </View>
      <ContinueButton
        amount={state.amount}
        isLoading={isLoading}
        createOrder={createOrder}
      />
    </View>
  );
}
