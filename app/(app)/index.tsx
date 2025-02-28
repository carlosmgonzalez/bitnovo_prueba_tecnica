import { useStoreApp } from "@/hooks/useStoreApp";
import { symbolCurrency } from "@/utils/symbolCurrency";
import { AntDesign } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [concept, setConcept] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const currency = useStoreApp((state) => state.currency);
  const amount = useStoreApp((state) => state.amount);
  const setAmount = useStoreApp((state) => state.setAmount);
  const setWebUrl = useStoreApp((state) => state.setWebUrl);
  const setIdentifier = useStoreApp((state) => state.setIdentifier);

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
    };

    fetch("https://payments.pre-bnvo.com/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": process.env.X_DEVICE_ID || "",
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
        <View style={styles.inputContainer}>
          <Text
            style={{
              ...styles.textCurrency,
              color:
                amount.length == 0 ? "rgba(192,204,218,1)" : "rgba(3,90,197,1)",
            }}
          >
            {symbolCurrency(currency)}
          </Text>
          <TextInput
            onChangeText={setAmount}
            value={amount.toString()}
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
          />
        </View>
        <View style={styles.containerConcept}>
          <Text style={styles.textConcept}>Concepto</Text>
          <TextInput
            onChangeText={setConcept}
            value={concept}
            placeholder="Añadir descripción del pago"
            placeholderTextColor={"rgba(192,204,218,1)"}
            multiline={true}
            maxLength={140}
            editable
            style={{
              fontSize: 14,
              fontFamily: "MulishRegular",
              color: "rgba(0,40,89,1)",
              borderWidth: 1,
              borderColor: "rgba(229,233,242,1)",
              borderRadius: 6,
              paddingHorizontal: 12,
              paddingVertical: 18,
            }}
          />
          {concept.length > 0 && (
            <Text style={styles.infoCharacter}>
              {concept.length}/140caracteres
            </Text>
          )}
        </View>
      </View>
      <View style={styles.containerButtonNext}>
        <Pressable
          onPressIn={() => createOrder()}
          style={[
            styles.buttonNext,
            {
              backgroundColor:
                amount.length == 0 ? "rgba(234,243,255,1)" : "rgba(3,90,197,1)",
            },
          ]}
          disabled={amount.length == 0}
        >
          {isLoading ? (
            <ActivityIndicator color={"rgba(255,255,255,1)"} />
          ) : (
            <Text
              style={[
                styles.textButtonNext,
                {
                  color:
                    amount.length == 0
                      ? "rgba(113,176,253,1)"
                      : "rgba(255,255,255,1)",
                },
              ]}
            >
              Continuar
            </Text>
          )}
        </Pressable>
      </View>
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
    marginHorizontal: 18,
  },
  border: {
    borderTopWidth: 0.5,
    borderTopColor: "rgba(199,199,199,0.5)",
  },
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
  containerConcept: {
    flexDirection: "column",
    gap: 5,
  },
  textConcept: {
    fontFamily: "MulishBold",
    color: "rgba(0,40,89,1)",
    fontSize: 14,
  },
  infoCharacter: {
    fontFamily: "MulishRegular",
    color: "rgba(100,113,132,1)",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  containerButtonNext: {
    width: "100%",
    marginBottom: 20,
  },
  buttonNext: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  textButtonNext: {
    fontFamily: "MulishSemiBold",
    fontSize: 16,
  },
});
