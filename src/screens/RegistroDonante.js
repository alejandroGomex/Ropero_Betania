import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Pressable,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export const RegistroDonante = ({
  modalRegistroDonante,
  setModalRegistroDonante,
}) => {
  const [nombreDonante, setNombreDonante] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos ingresados, como enviarlos a un servidor o almacenarlos localmente.
    console.log("Nombre Donante:", nombreDonante);
    console.log("Cédula:", cedula);
    console.log("Teléfono:", telefono);
    console.log("Correo Electrónico:", correoElectronico);
  };

  return (
    <Modal animationType="slide" visible={modalRegistroDonante}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Información del Donante: </Text>
        </View>
        <Text style={styles.label}>Nombre Donante:</Text>
        <TextInput
          style={styles.input}
          value={nombreDonante}
          onChangeText={(text) => setNombreDonante(text)}
          placeholder="Ingrese el nombre del donante"
        />

        <Text style={styles.label}>Cédula:</Text>
        <TextInput
          style={styles.input}
          value={cedula}
          onChangeText={(text) => setCedula(text)}
          placeholder="Ingrese la cédula"
        />

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
          placeholder="Ingrese el teléfono"
        />

        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          value={correoElectronico}
          onChangeText={(text) => setCorreoElectronico(text)}
          placeholder="Ingrese el correo electrónico"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "left",
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "#000000",
    fontWeight: "800",
    marginTop: 10,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    height: 45,
    /*  width: 100,*/
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: "70%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
