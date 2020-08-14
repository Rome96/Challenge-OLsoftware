import { v4 as uuidv4 } from "uuid";
import Constants from "expo-constants";
import {addUser} from'@Redux/actions';
import { useDispatch } from "react-redux";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Header from "@Components/header";

const { width } = Dimensions.get("screen");

const CreateUser = ({ navigation }) => {
  const dispatch = useDispatch()
  const [Age, setAge] = useState("");
  const [Name, setName] = useState("");
  const [Photo, setPhoto] = useState(null);
  const [LastName, setLastName] = useState("");
  const [Position, setPosition] = useState("");

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

  const aggUser = () => {
    if (
      Age.trim() === "" ||
      Name.trim() === "" ||
      Photo.trim() === "" ||
      Position.trim() === "" ||
      LastName.trim() === "" 
    ) {
      Alert.alert("Ups!", "Todos los campos son obligatorios", [
        {
          text: "Ok.",
        },
      ]);
      return;
    }

    const user = {
      age: Age,
      name: Name,
      photo: Photo,
      lastName: LastName,
      position: Position,
    }
    user.id = uuidv4()
    dispatch(addUser(user))
    navigation.navigate("UserList");
    setAge('')
    setName('')
    setPhoto(null)
    setLastName('')
    setPosition('')
  } 

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
              <TouchableOpacity
                style={styles.containerImg}
                onPress={_pickImage}
              >
                {!Photo ? (
                  <Text style={{ color: "#707070" }}>
                    Suba una {"\n"} Imagen
                  </Text>
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
                  placeholder={Name}
                  style={styles.input}
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
                  placeholder={Age}
                  style={styles.input}
                  keyboardType={'numeric'}
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
              <TouchableOpacity style={styles.btn} onPress={aggUser}>
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
    marginBottom: 20,
  },
  containerImg: {
    width: 140,
    height: 140,
    marginVertical: 20,
    alignItems: "center",
    borderRadius: 140 / 2,
    justifyContent: "center",
    backgroundColor: "#BFBFBF",
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
