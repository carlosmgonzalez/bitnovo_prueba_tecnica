import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconTickCircle from "@/assets/icons/tick_circle.svg";
import { BlurView } from "@react-native-community/blur";

export default function RequestSendScreen({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <BlurView
        style={[StyleSheet.absoluteFillObject, { zIndex: 50 }]}
        blurAmount={2}
        overlayColor="rgba(0,40,89,0.3)"
      />
      <View
        style={{
          zIndex: 100,
          bottom: 0,
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          height: 413,
          marginBottom: 18,
          alignSelf: "center",
          borderRadius: 24,
          paddingTop: 64,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 32,
            paddingBottom: 44,
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <IconTickCircle />
            <Text
              style={{
                fontFamily: "MulishBold",
                fontSize: 26,
                color: "rgba(0,40,89,1)",
              }}
            >
              Solicitud enviada
            </Text>
            <Text
              style={{
                fontFamily: "MulishRegular",
                fontSize: 14,
                color: "rgba(100,113,132,1)",
                textAlign: "center",
              }}
            >
              Tu solicitud de pago enviada ha sido enviado con éxito por
              WhatsApp .
            </Text>
          </View>
          <Pressable
            onPress={() => setIsModalOpen(false)}
            style={{
              width: "100%",
              height: 56,
              backgroundColor: "rgba(3,90,197,1)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "MulishSemiBold",
                fontSize: 16,
                color: "rgba(255,255,255,1)",
              }}
            >
              Entendido
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
