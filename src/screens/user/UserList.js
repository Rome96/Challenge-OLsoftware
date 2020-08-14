import React from "react";
import User from "./User";
import Search from '../Search'
import Header from "@Components/header";
import { useSelector } from "react-redux";
import { View, Text, FlatList } from "react-native";

const UserList = ({ navigation }) => {
  const users = useSelector((state) => state.users);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="User" />  
        <Search/>      
        <FlatList
          data={users}
          renderItem={({ item }) => <User {...item} navigation={navigation} />}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
};



export default UserList;
