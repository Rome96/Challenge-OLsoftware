import React from 'react'
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from '@Components/header'
import DetailUser from '../screens/user/DetailUser'

const CreateUser = ({navigation}) => {
  return (
    <View style={{ flex: 1}}>
      <Header
        menu={true}
      />
      <Text>Create user</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}

export default CreateUser
