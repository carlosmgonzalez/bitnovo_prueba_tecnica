import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import IconArrowDown from "@/assets/icons/arrow_down.svg";
import IconWhatsapp from "@/assets/icons/whatsapp.svg";
import { useStoreApp } from "@/hooks/useStoreApp";
import { countryInfo } from "@/utils/countryInfo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";

export default function WhatsappShare({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const country = useStoreApp((state) => state.country);
  const [number, setNumber] = useState("");
  const [isSelectedWp, setIsSelectedWp] = useState(false);
  const sufijo = countryInfo(country).sufijo;

  const sendWhatsappMessage = () => {
    const phoneNumber = `${sufijo}${number}`;
    const message = "Hola este es el link para el pago: pay.bitnovo.com/59f9g9";
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    Linking.canOpenURL(url)
      .then(() => {
        return Linking.openURL(url);
      })
      .catch((err) => console.error("Errror al abirir whatsapp", err))
      .finally(() => {
        setIsModalOpen(true);
      });
  };

  return (
    <>
      {!isSelectedWp ? (
        <Pressable
          onPressIn={() => setIsSelectedWp(true)}
          style={styles.container}
        >
          <IconWhatsapp />
          <Text
            style={{
              fontFamily: "MulishRegular",
              fontSize: 14,
              color: "rgba(0,40,89,1)",
            }}
          >
            Enviar por número de WhatsApp
          </Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.container,
            { borderColor: "rgba(3,90,197,1)", gap: 8 },
          ]}
        >
          <IconWhatsapp />
          <Pressable
            style={{
              width: 50,
              height: 20,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
            onPressIn={() => {
              router.navigate("/select-country");
            }}
          >
            <Text
              style={{
                fontFamily: "MulishRegular",
                fontSize: 14,
                color: "rgba(0,40,89,1)",
              }}
            >
              {sufijo}
            </Text>
            <IconArrowDown />
          </Pressable>
          <TextInput
            style={{ flex: 1, fontFamily: "MulishRegular", fontSize: 14 }}
            placeholder="300 678 9087"
            onChangeText={setNumber}
            value={number}
            multiline={false}
            keyboardType="phone-pad"
          />
          <Pressable
            onPressIn={() => {
              sendWhatsappMessage();
            }}
            style={{
              width: 53,
              height: 24,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(3,90,197,1)",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontFamily: "MulishBold",
                fontSize: 12,
                color: "rgba(255,255,255,1)",
              }}
            >
              Enviar
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "rgba(211,220,230,1)",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  infoContainer: {
    width: "100%",
    backgroundColor: "withe",
    borderWidth: 2,
    borderColor: "black",
    height: 413,
    marginHorizontal: 5,
    borderRadius: 24,
    paddingTop: 64,
  },
});
