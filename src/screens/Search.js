import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from 'react-native'

const Search = props => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.containerInput}>
      <View style={styles.containerIconSearch}>
        <FontAwesome name="search" size={24} color="#C6C6C6" />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Buscar ..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    marginHorizontal: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderColor: "#C6C6C6",
  },
  input: {
    height: 40,
  },
  containerIconSearch: {
    marginRight: 15,
  },
});

export default Search
