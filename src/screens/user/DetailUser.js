import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import Header from "@Components/header";

const DetailUser = ({navigation, route}) => {
  const { name, position, photo, lastName } = route.params.props;
  const [Name, setName] = useState(name)
  return (
    <View style={{ flex: 1 }}>
      <Header back={true} navigation={navigation} title="Detalle usuario" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerImg}>
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%", borderRadius: 140 / 2 }}
            />
          </View>
          <Text style={styles.position}>{position}</Text>
        </View>
        <View style={styles.containerForm}>
          <View>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              value={Name}
              style={{ height: 40, borderColor: "#D5D5D5", borderWidth: 1 }}
              placeholder={Name}
              onChangeText={(Name) => setName(Name)}
            />
          </View>
          <View>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              value={Name}
              style={{ height: 40, borderColor: "#D5D5D5", borderWidth: 1 }}
              placeholder={Name}
              onChangeText={(Name) => setName(Name)}
            />
          </View>
          <View>
            <Text style={styles.label}>Edad</Text>
            <TextInput
              value={Name}
              style={{ height: 40, borderColor: "#D5D5D5", borderWidth: 1 }}
              placeholder={Name}
              onChangeText={(Name) => setName(Name)}
            />
          </View>
          <View>
            <Text style={styles.label}>Cargo</Text>
            <TextInput
              value={Name}
              style={{ height: 40, borderColor: "#D5D5D5", borderWidth: 1 }}
              placeholder={Name}
              onChangeText={(Name) => setName(Name)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerImg: {
    width: 140,
    height: 140,
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
    marginVertical: 10
  }
});

export default DetailUser
