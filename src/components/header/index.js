import React from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HEIGHT = Platform.OS === "ios" ? 60 : 56;

const Header = ({back, title, navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            back ? navigation.goBack() : null
          }
          style={{padding: 5}}
        >
          {back ? (
            <Ionicons name="ios-arrow-back" size={25} color="black" />
          ) : (
            <Ionicons name="md-menu" size={25} color="black" />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
        <View/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
  },
});

export default Header;
