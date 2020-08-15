import Constants from "expo-constants";
import Header from "@Components/header";
import { useDispatch } from "react-redux";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { deleteUser, updateUser } from "@Redux/actions";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("screen");

const FormUser = ({ navigation, route }) => {
  const {
    id,
    name,
    age,
    position,
    photo,
    lastName,
    index,
  } = route.params.props;
  const dispatch = useDispatch();
  const [Age, setAge] = useState(age);
  const [Name, setName] = useState(name);
  const [Photo, setPhoto] = useState(photo);
  const [LastName, setLastName] = useState(lastName);
  const [Position, setPosition] = useState(position);

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto(result.uri);
      }
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const _deleteUser = () => {
    dispatch(deleteUser(id));
    navigation.goBack();
  };

  const _updateUser = () => {
    if (
      Age.trim() === "" ||
      Name.trim() === "" ||
      Photo.trim() === "" ||
      Position.trim() === "" ||
      LastName.trim() === ""
    ) {
      Alert.alert("Ups!", "Todos los campos son obligatorios");
      return;
    }
    const user = {
      id: id,
      age: Age,
      name: Name,
      photo: Photo,
      lastName: LastName,
      position: Position,
    };

    dispatch(updateUser(user));
    navigation.navigate("UserList");
  };
  return (
    <View style={{ flex: 1 }}>
      <Header back={true} navigation={navigation} title="Detalle usuario" />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.containerImg} onPress={_pickImage}>
              {!Photo ? (
                <Text style={{ color: "#707070" }}>Suba una {"\n"} Imagen</Text>
              ) : (
                <Image
                  source={{ uri: Photo }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 140 / 2,
                  }}
                />
              )}
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.btn} onPress={_updateUser}>
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
