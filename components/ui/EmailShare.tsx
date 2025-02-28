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

export default function EmailShare() {
  const [recipientEmail, setRecipientEmail] = useState("");
  const webUrl = useStoreApp((state) => state.webUrl);
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
      body: `Link: ${webUrl}`,
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
        <Pressable onPress={() => setIsOpen(true)} style={styles.container}>
          <IconMsm />
          <Text
            style={{
              fontFamily: "MulishRegular",
              fontSize: 14,
              color: "rgba(0,40,89,1)",
            }}
          >
            Enviar por correo electrónico
          </Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.container,
            { borderColor: "rgba(3,90,197,1)", gap: 8 },
          ]}
        >
          <IconMsm />
          <TextInput
            style={{
              flex: 1,
              fontFamily: "MulishRegular",
              fontSize: 14,
              height: 20,
            }}
            placeholder="example@gmail.com"
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
});
