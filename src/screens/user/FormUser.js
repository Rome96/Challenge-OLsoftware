import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "@Redux/actions";

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Header from "@Components/header";

const {width} = Dimensions.get('screen')

const FormUser = ({ navigation, route }) => {
  const { id, name, age, position, photo, lastName } = route.params.props;
  const dispatch = useDispatch();
  const [Age, setAge] = useState(age);
  const [Name, setName] = useState(name);
  const [LastName, setLastName] = useState(lastName);
  const [Position, setPosition] = useState(position);

  const _deleteUser = () => {
    dispatch(deleteUser(id));
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <Header back={true} navigation={navigation} title="Detalle usuario" />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerImg}>
              <Image
                source={{ uri: photo }}
                style={{ width: "100%", height: "100%", borderRadius: 140 / 2 }}
              />
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
              <Text style={styles.textBtn}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_deleteUser}
              style={[
                styles.btn,
                {
                  borderWidth: 1,
                  borderColor: "#FF4E4E",
                  backgroundColor: "#FFF",
                },
              ]}
            >
              <Text style={[styles.textBtn, { color: "#FF4E4E" }]}>
                Eliminar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 20,
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

export default FormUser;
