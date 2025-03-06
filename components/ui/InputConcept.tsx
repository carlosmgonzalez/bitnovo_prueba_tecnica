import { TextInput, View } from "react-native";
import React from "react";
import { containers } from "@/styles/containers";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/CustumColors";
import { inputs } from "@/styles/inputs";

export default function InputConcept({
  concept,
  setConcept,
}: {
  concept: string;
  setConcept: (concept: string) => void;
}) {
  return (
    <View style={containers.concept}>
      <ThemedText variant="labelMediumBold">Concepto</ThemedText>
      <TextInput
        style={inputs.concept}
        onChangeText={setConcept}
        value={concept}
        placeholder="Añadir descripción del pago"
        placeholderTextColor={Colors.grey}
        multiline={true}
        maxLength={140}
        editable
      />
      {concept.length > 0 && (
        <ThemedText
          variant="labelSmallRegular"
          style={{ alignSelf: "flex-end" }}
        >
          {concept.length}/140caracteres
        </ThemedText>
      )}
    </View>
  );
}
