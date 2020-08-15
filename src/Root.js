import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";

import { SafeAreaView, View, StatusBar } from "react-native";
import MyTabs from "@Navigations/TabScreenStacks";

import AuthSatck from "@Navigations/AuthStack";
import { useSelector } from "react-redux";

export default function Root() {
  const [logged, setLogged] = useState(true);
  const users = useSelector((state) => state.users);
  return (
    <>
      <StatusBar/>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{!logged ? <AuthSatck /> : <MyTabs />}</View>
      </SafeAreaView>
    </>
  );
}
