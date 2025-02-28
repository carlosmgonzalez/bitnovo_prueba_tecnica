import { Pressable, StyleSheet, Text, View } from "react-native";

import IconTickCircle from "@/assets/icons/tick_circle_small.svg";
import React from "react";
import { CountryProps, useStoreApp } from "@/hooks/useStoreApp";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { countryInfo } from "@/utils/countryInfo";

interface Props {
  country: CountryProps;
}

export default function SelectCountryOption({ country }: Props) {
  const router = useRouter();

  const selectedCountry = useStoreApp((state) => state.country);
  const setSelectedCountry = useStoreApp((state) => state.setCountry);

  return (
    <Pressable
      onPressIn={() => {
        setSelectedCountry(country);
        router.back();
      }}
      style={({ pressed }) => [
        styles.selectCountryContainer,
        {
          backgroundColor: pressed
            ? "rgba(239,242,247,1)"
            : "rgba(255,255,255,1)",
        },
      ]}
    >
      {countryInfo(country).icon}
      <View style={styles.infoCountryContainer}>
        <Text style={styles.nameCountry}>{countryInfo(country).name}</Text>
        <Text style={styles.sufijoCountry}>{countryInfo(country).sufijo}</Text>
      </View>
      {country == selectedCountry ? (
        <IconTickCircle />
      ) : (
        <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  selectCountryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  infoCountryContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  nameCountry: {
    color: "rgba(0,40,89,1)",
    fontFamily: "MulishBold",
  },
  sufijoCountry: {
    color: "rgba(100, 113, 132, 1)",
    fontFamily: "MulishRegular",
  },
});
