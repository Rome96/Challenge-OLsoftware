import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { logged } from "@Redux/actions";
import {
  View,
  Text,
  Image,
  Alert,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const {width, height} = Dimensions.get('screen')

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const _logged = () => {
    if (
      user.trim() === "" ||
      password.trim() === ""
    ) {
      Alert.alert("Ups!", "Todos los campos son obligatorios");
      return;
    }
    dispatch(logged(true))
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          source={require("../../../assets/Logo.png")}
        />
      </View>
      <View>
        <TextInput
          value={user}
          placeholder="Usuario"
          style={styles.textInput}
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          value={password}
          secureTextEntry
          style={styles.textInput}
          placeholder="Contraseña"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={_logged}
          style={[styles.btn, { backgroundColor: "#FF4E4E" }]}
        >
          <Text style={[styles.textBtn, { color: "#FFF" }]}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { borderColor: "#FF4E4E", borderWidth: 1 }]}
        >
          <Text style={[styles.textBtn, { color: "#FF4E4E" }]}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: width - 200,
        }}
      >
        <Text style={styles.textFooter}>Powerared by OLSoftware</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  containerImg: {
    width: 130,
    height: 130,
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width: width - 70,
    marginVertical: 10,
    borderColor: "#D5D5D5",
  },
  btn: {
    height: 50,
    width: width - 70,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    fontSize: 16
  },
  textFooter: {
    fontSize: 20,
    fontWeight: '500'
  }
});

export default Login
