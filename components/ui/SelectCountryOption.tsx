import { Pressable, StyleSheet, Text, View } from "react-native";

import IconTickCircle from "@/assets/icons/tick_circle_small.svg";
import React from "react";
import { CountryProps, useStoreApp } from "@/hooks/useStoreApp";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { countryInfo } from "@/utils/countryInfo";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/CustumColors";
import { containers } from "@/styles/containers";

interface Props {
  country: CountryProps;
}

export default function SelectCountryOption({ country }: Props) {
  const router = useRouter();

  const { state, setState } = useStoreApp();

  return (
    <Pressable
      onPressIn={() => {
        setState({ country });
        router.back();
      }}
      style={({ pressed }) => [
        containers.country,
        {
          backgroundColor: pressed ? Colors.lightestBlue : Colors.white,
        },
      ]}
    >
      {countryInfo(country).icon}
      <View style={containers.infoCountry}>
        <ThemedText variant="labelMediumBold">
          {countryInfo(country).sufijo}
        </ThemedText>
        <ThemedText variant="labelSmallRegular">
          {countryInfo(country).name}
        </ThemedText>
      </View>
      {country == state.country ? (
        <IconTickCircle />
      ) : (
        <AntDesign name="right" size={15} color={Colors.grey} />
      )}
    </Pressable>
  );
}
