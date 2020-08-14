import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Header from "@Components/header";

const {width} = Dimensions.get('screen')

const CreateUser = ({ navigation}) => {
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState("");
  const [Position, setPosition] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Header navigation={navigation} title="Crear usuario" />
        <ScrollView>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <View style={styles.containerImg}>
                {/* <Image
                source={{ uri: photo }}
                style={{ width: "100%", height: "100%", borderRadius: 140 / 2 }}
              /> */}
              </View>
              <Text style={styles.position}>{Position}</Text>
            </View>
            <View style={styles.containerForm}>
              <View>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                  value={Name}
                  style={styles.input}
                  placeholder={Name}
                  onChangeText={(Name) => setName(Name)}
                />
              </View>
              <View>
                <Text style={styles.label}>Apellido</Text>
                <TextInput
                  value={LastName}
                  style={styles.input}
                  placeholder={LastName}
                  onChangeText={(LastName) => setLastName(LastName)}
                />
              </View>
              <View>
                <Text style={styles.label}>Edad</Text>
                <TextInput
                  value={Age}
                  style={styles.input}
                  placeholder={Age}
                  onChangeText={(Age) => setAge(Age)}
                />
              </View>
              <View>
                <Text style={styles.label}>Cargo</Text>
                <TextInput
                  value={Position}
                  style={styles.input}
                  placeholder={Position}
                  onChangeText={(Position) => setPosition(Position)}
                />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Crear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  containerImg: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  position: {
    fontSize: 25,
    color: "#686363",
  },
  containerForm: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  label: {
    marginVertical: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "#D5D5D5",
  },
  btn: {
    height: 45,
    borderRadius: 10,
    width: width - 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4E4E",
  },
  textBtn: {
    color: "#FFF",
    fontSize: 18,
  },
});

export default CreateUser;
