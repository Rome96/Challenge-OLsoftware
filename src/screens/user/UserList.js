import React, {useState, useEffect} from "react";
import User from "./User";
import { FontAwesome } from "@expo/vector-icons";
import Header from "@Components/header";
import { useSelector } from "react-redux";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";

const UserList = ({ navigation }) => {
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState([]);
  const [value, onChangeText] = useState("");

  const handleSearch = (text) => {
    onChangeText(text);
    const userList = users.filter((item) => {
      const itemData = `
        ${item.name.toUpperCase()}
        ${item.lastName.toUpperCase()}
        ${item.position.toUpperCase()}
      `;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setUser(userList);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="User" />
      <View style={styles.containerInput}>
        <View style={styles.containerIconSearch}>
          <FontAwesome name="search" size={24} color="#C6C6C6" />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleSearch(text)}
          value={value}
          placeholder="Buscar ..."
        />
      </View>
      <FlatList
        data={!value ? users : user}
        renderItem={({ item, index }) => <User index={index} {...item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

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
    flex: 1,
  },
  containerIconSearch: {
    marginRight: 15,
  },
});

export default UserList;
