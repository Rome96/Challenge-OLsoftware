import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../screens/user/User";
import UserList from "../screens/user/UserList";
import DetailUser from "../screens/user/DetailUser";
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
        name="DetailUser"
        component={DetailUser}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default UserSatck;
