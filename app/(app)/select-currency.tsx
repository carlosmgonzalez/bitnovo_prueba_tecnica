import { View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FlagUsd from "../../assets/icons/flag_usd.svg";
import FlagEuro from "../../assets/icons/flag_euro.svg";
import FlagLibra from "../../assets/icons/flag_libras.svg";
import { CurrencyProps, useStoreApp } from "@/hooks/useStoreApp";
import TickCircle from "@/assets/icons/tick_circle_small.svg";
import SearchBar from "@/components/ui/SearchBar";
import { containers } from "@/styles/containers";
import CardSelectCurrency from "@/components/ui/CardSelectCurrency";
import { ThemedText } from "@/components/ThemedText";

export default function SelectCurrency() {
  const [searchCurrency, setSearchCurrency] = useState("");

  const { state, setState } = useStoreApp();

  return (
    <View style={containers.pageSelect}>
      <SearchBar search={searchCurrency} setSearch={setSearchCurrency} />
      <CardSelectCurrency
        setCurrency={(e) => setState({ currency: e })}
        currency={CurrencyProps.EUR}
      >
        <FlagEuro />
        <View style={containers.subSelectCurrency}>
          <ThemedText variant="labelMediumBold">Euro</ThemedText>
          <ThemedText variant="labelSmallRegular">EUR</ThemedText>
        </View>
        {state.currency == CurrencyProps.EUR ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </CardSelectCurrency>
      <CardSelectCurrency
        setCurrency={(e) => setState({ currency: e })}
        currency={CurrencyProps.USD}
      >
        <FlagUsd />
        <View style={containers.subSelectCurrency}>
          <ThemedText variant="labelMediumBold">
            Dólar Estadounidense
          </ThemedText>
          <ThemedText variant="labelSmallRegular">USD</ThemedText>
        </View>
        {state.currency == CurrencyProps.USD ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </CardSelectCurrency>
      <CardSelectCurrency
        setCurrency={(e) => setState({ currency: e })}
        currency={CurrencyProps.GBP}
      >
        <FlagLibra />
        <View style={containers.subSelectCurrency}>
          <ThemedText variant="labelMediumBold">Libra Esterlina</ThemedText>
          <ThemedText variant="labelSmallRegular">GBP</ThemedText>
        </View>
        {state.currency == CurrencyProps.GBP ? (
          <TickCircle />
        ) : (
          <AntDesign name="right" size={15} color="rgba(100,113,132,1)" />
        )}
      </CardSelectCurrency>
    </View>
  );
}
