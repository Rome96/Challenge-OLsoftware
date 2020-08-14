import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../screens/user/User";
import UserList from "../screens/user/UserList";
import FormUser from "../screens/user/FormUser";
const Stack = createStackNavigator();

const UserSatck = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormUser"
        component={FormUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserSatck;
