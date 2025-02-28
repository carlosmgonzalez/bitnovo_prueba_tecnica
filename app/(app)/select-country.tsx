import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SelectCountryOption from "@/components/ui/SelectCountryOption";
import { CountryProps } from "@/hooks/useStoreApp";
import SearchBar from "@/components/ui/SearchBar";
import { Stack, useRouter } from "expo-router";
import IconArrowLeft from "@/assets/icons/arrow_left.svg";

export default function SelectCountry() {
  const [searchCountry, setSearchCountry] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable
              onPressIn={router.back}
              style={({ pressed }) => [
                {
                  width: 32,
                  height: 32,
                  borderRadius: 24,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                  backgroundColor: pressed
                    ? "rgba(239, 242, 247, 0.78)"
                    : "rgba(239,242,247,1)",
                },
              ]}
            >
              <IconArrowLeft />
            </Pressable>
          ),
        }}
      />
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
    paddingHorizontal: 18,
  },
});
