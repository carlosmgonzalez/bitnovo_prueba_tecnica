import { Pressable, TextInput, View } from "react-native";
import React, { useState } from "react";
import IconArrowDown from "@/assets/icons/arrow_down.svg";
import IconWhatsapp from "@/assets/icons/whatsapp.svg";
import { useStoreApp } from "@/hooks/useStoreApp";
import { countryInfo } from "@/utils/countryInfo";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { ThemedText } from "../ThemedText";
import { containers } from "@/styles/containers";
import { buttons } from "@/styles/buttons";
import { Colors } from "@/constants/CustumColors";

export default function WhatsappShare({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const { state } = useStoreApp();

  const [number, setNumber] = useState("");
  const [isSelectedWp, setIsSelectedWp] = useState(false);
  const sufijo = countryInfo(state.country).sufijo;

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
          style={containers.share}
        >
          <IconWhatsapp />
          <ThemedText variant="share">Enviar por número de WhatsApp</ThemedText>
        </Pressable>
      ) : (
        <View
          style={[
            containers.share,
            { borderColor: "rgba(3,90,197,1)", gap: 8 },
          ]}
        >
          <IconWhatsapp />
          <Pressable
            style={buttons.sufijo}
            onPressIn={() => {
              router.navigate("/select-country");
            }}
          >
            <ThemedText variant="share">{sufijo}</ThemedText>
            <IconArrowDown />
          </Pressable>
          <TextInput
            style={{ flex: 1, fontFamily: "MulishRegular", fontSize: 14 }}
            placeholder="300 678 9087"
            placeholderTextColor={Colors.grey}
            onChangeText={setNumber}
            value={number}
            multiline={false}
            keyboardType="phone-pad"
          />
          <Pressable
            onPressIn={() => {
              sendWhatsappMessage();
            }}
            style={buttons.send}
          >
            <ThemedText variant="send">Enviar</ThemedText>
          </Pressable>
        </View>
      )}
    </>
  );
}
