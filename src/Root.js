import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView, View } from "react-native";
import MyTabs from "@Navigations/TabScreenStacks";

import AuthSatck from "@Navigations/AuthStack";
import { useSelector } from "react-redux";

export default function Root() {
  const [logged, setLogged] = useState(true);
  const users = useSelector((state) => state.users);
  console.log("USEERS:", users);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{!logged ? <AuthSatck /> : <MyTabs />}</View>
      </SafeAreaView>
    </>
  );
}
