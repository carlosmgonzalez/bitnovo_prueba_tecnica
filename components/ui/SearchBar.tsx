import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import IconSearch from "@/assets/icons/search_normal.svg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <View style={styles.searchContainer}>
      <IconSearch />
      <TextInput
        onChangeText={setSearch}
        value={search}
        placeholder="Buscar"
        placeholderTextColor={"rgba(192,204,218,1)"}
        multiline={true}
        maxLength={140}
        editable
        style={{
          fontSize: 14,
          fontFamily: "MulishRegular",
          color: "rgba(0,40,89,1)",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
