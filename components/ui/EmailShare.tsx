import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import IconMsm from "@/assets/icons/sms.svg";
import * as MailComposer from "expo-mail-composer";
import { useStoreApp } from "@/hooks/useStoreApp";
import { ThemedText } from "../ThemedText";
import { buttons } from "@/styles/buttons";
import { Colors } from "@/constants/CustumColors";

export default function EmailShare() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const { state } = useStoreApp();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();

    if (!isAvailable) {
      Alert.prompt("Error, no se puede enviar el email");
      return;
    }

    MailComposer.composeAsync({
      recipients: [recipientEmail],
      subject: "Link de pago",
      body: `Link: ${state.webUrl}`,
    })
      .then((result) => {
        if (result.status === "sent") {
          Alert.prompt("Exito", "Correo enviado correctamente");
        }
      })
      .catch(() => {
        Alert.prompt("Error", "Hubo un problema al enviar el correo.");
      });
  };

  return (
    <>
      {!isOpen ? (
        <Pressable onPress={() => setIsOpen(true)} style={buttons.email}>
          <IconMsm />
          <ThemedText variant="share">Enviar por correo electrónico</ThemedText>
        </Pressable>
      ) : (
        <View style={[buttons.emailActive]}>
          <IconMsm />
          <TextInput
            style={{
              flex: 1,
              fontFamily: "MulishRegular",
              fontSize: 14,
              height: 20,
            }}
            placeholder="example@gmail.com"
            placeholderTextColor={Colors.grey}
            onChangeText={setRecipientEmail}
            value={recipientEmail}
            multiline={false}
            keyboardType="email-address"
            scrollEnabled
          />
          <Pressable
            onPressIn={() => {
              sendEmail();
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
