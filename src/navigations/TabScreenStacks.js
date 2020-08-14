import * as React from "react";
import UserSatck from "./UserStack";
import Building from "../screens/Building";
import CreateUser from "../screens/CreateUser";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          tabStyle: {
            backgroundColor: "#FF4E4E",
          },
        }}
      >
        <Tab.Screen
          name="User"
          component={UserSatck}
          options={{
            tabBarIcon: () => <Feather name="user" size={25} color={"#FFF"} />,
          }}
        />
        <Tab.Screen
          name="CreateUser"
          component={CreateUser}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <Feather name="plus-square" size={25} color={"#FFF"} />
            ),
          }}
        />
        <Tab.Screen
          name="building"
          component={Building}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <FontAwesome5 name="building" size={25} color={"#FFF"} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
