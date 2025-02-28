import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function InputConcept({
  concept,
  setConcept,
}: {
  concept: string;
  setConcept: (concept: string) => void;
}) {
  return (
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
        <Text style={styles.infoCharacter}>{concept.length}/140caracteres</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
