import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const User = ({ navigation, name, age, lastName, position, photo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.containerImg}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 60 / 2,
            }}
            source={{ uri: photo }}
          />
        </View>
        <View style={{ flex: 1, marginRight: 35 }}>
          <Text style={styles.name}>
            {name} {lastName}
          </Text>
          <Text>{position}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.containerIcon}
        onPress={() =>
          navigation.navigate("FormUser", {
            props: { name, age, position, photo, lastName },
          })
        }
      >
        <FontAwesome5 name="arrow-right" size={30} color="#FF4E4E" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerInfo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
  containerImg: {
    height: 60,
    width: 60,
    marginRight: 15,
  },
  containerIcon: {
    padding: 10,
  },
  name: {
    fontSize: 19,
    color: "#171515",
  },
  position: {
    fontSize: 16,
    color: "#707070",
  },
});

export default User;
