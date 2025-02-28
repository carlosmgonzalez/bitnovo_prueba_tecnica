import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FlagUsd from "../../assets/icons/flag_usd.svg";
import FlagEuro from "../../assets/icons/flag_euro.svg";
import FlagLibra from "../../assets/icons/flag_libras.svg";
import { CurrencyProps, useStoreApp } from "@/hooks/useStoreApp";
import TickCircle from "@/assets/icons/tick_circle_small.svg";
import { useRouter } from "expo-router";
import SearchBar from "@/components/ui/SearchBar";

export default function SelectCurrency() {
  const [searchCurrency, setSearchCurrency] = useState("");
  const currency = useStoreApp((state) => state.currency);
  const setCurrency = useStoreApp((state) => state.setCurrency);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <SearchBar search={searchCurrency} setSearch={setSearchCurrency} />
      <Pressable
        onPressIn={() => {
          setCurrency(CurrencyProps.EUR);
          router.back();
        }}
        style={({ pressed }) => [
          styles.selectCurrencyContainer,
          {
            backgroundColor: pressed
              ? "rgba(239,242,247,1)"
              : "rgba(255,255,255,1)",
          },
        ]}
      >
        <FlagEuro />
        <View style={styles.infoCurrencyContainer}>
          <Text style={styles.nameCurrency}>Euro</Text>
          <Text style={styles.codeCurrency}>EUR</Text>
        </View>
        {currency == CurrencyProps.EUR ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </Pressable>
      <Pressable
        onPressIn={() => {
          setCurrency(CurrencyProps.USD);
          router.back();
        }}
        style={({ pressed }) => [
          styles.selectCurrencyContainer,
          {
            backgroundColor: pressed
              ? "rgba(239,242,247,1)"
              : "rgba(255,255,255,1)",
          },
        ]}
      >
        <FlagUsd />
        <View style={styles.infoCurrencyContainer}>
          <Text style={styles.nameCurrency}>Dólar Estadounidense</Text>
          <Text style={styles.codeCurrency}>USD</Text>
        </View>
        {currency == CurrencyProps.USD ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </Pressable>
      <Pressable
        onPressIn={() => {
          setCurrency(CurrencyProps.GBP);
          router.back();
        }}
        style={({ pressed }) => [
          styles.selectCurrencyContainer,
          {
            backgroundColor: pressed
              ? "rgba(239,242,247,1)"
              : "rgba(255,255,255,1)",
          },
        ]}
      >
        <FlagLibra />
        <View style={styles.infoCurrencyContainer}>
          <Text style={styles.nameCurrency}>Libra Esterlina</Text>
          <Text style={styles.codeCurrency}>GBP</Text>
        </View>
        {currency == CurrencyProps.GBP ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18,
  },
  searchContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(229,233,242,1)",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 5,
    marginBottom: 15,
  },
  selectCurrencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
  },
  infoCurrencyContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  nameCurrency: {
    color: "rgba(0,40,89,1)",
    fontFamily: "MulishBold",
  },
  codeCurrency: {
    color: "rgba(100, 113, 132, 1)",
    fontFamily: "MulishRegular",
  },
});
