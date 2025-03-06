import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import IconSearch from "@/assets/icons/search_normal.svg";
import { containers } from "@/styles/containers";
import { typographys } from "@/styles/typography";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <View style={containers.search}>
      <IconSearch />
      <TextInput
        onChangeText={setSearch}
        value={search}
        placeholder="Buscar"
        placeholderTextColor={"rgba(192,204,218,1)"}
        multiline={true}
        maxLength={140}
        editable
        style={typographys.labelMediumRegularDarkBlue}
      />
    </View>
  );
}
