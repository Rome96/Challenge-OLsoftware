import React from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import Header from "@Components/header";
import User from "./User";

const UserList = ({ navigation }) => {
  const [value, onChangeText] = React.useState("");
  const users = useSelector((state) => state.users);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="User" />
      <View style={{ marginHorizontal: 20 }}>
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
        <FlatList
          data={users}
          renderItem={({ item }) => <User {...item} navigation={navigation} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    borderRadius: 20,
    marginVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderColor: "#C6C6C6",
    borderWidth: 1,
  },
  input: {
    height: 40,
  },
  containerIconSearch: {
    marginRight: 15
  }
});

export default UserList;
