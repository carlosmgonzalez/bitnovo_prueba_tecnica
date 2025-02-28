import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectCountryOption from "@/components/ui/SelectCountryOption";
import { CountryProps } from "@/hooks/useStoreApp";
import SearchBar from "@/components/ui/SearchBar";

export default function SelectCountry() {
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar search={searchCountry} setSearch={setSearchCountry} />
      {Object.values(CountryProps).map((country) => (
        <SelectCountryOption country={country} key={country} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18,
  },
});
