import { View } from "react-native";
import React, { useState } from "react";
import SelectCountryOption from "@/components/ui/SelectCountryOption";
import { CountryProps } from "@/hooks/useStoreApp";
import SearchBar from "@/components/ui/SearchBar";
import { Stack } from "expo-router";
import { containers } from "@/styles/containers";
import HeaderLeftButton from "@/components/ui/HeaderLeftButton";

export default function SelectCountry() {
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <View style={containers.pageSelect}>
      <Stack.Screen
        options={{
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <SearchBar search={searchCountry} setSearch={setSearchCountry} />
      {Object.values(CountryProps).map((country) => (
        <SelectCountryOption country={country} key={country} />
      ))}
    </View>
  );
}
