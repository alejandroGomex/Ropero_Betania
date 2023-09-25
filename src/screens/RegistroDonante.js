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
    <View>
      <Text>Nombre Donante:</Text>
      <TextInput
        value={nombreDonante}
        onChangeText={(text) => setNombreDonante(text)}
        placeholder="Ingrese el nombre del donante"
      />

      <Text>Cédula:</Text>
      <TextInput
        value={cedula}
        onChangeText={(text) => setCedula(text)}
        placeholder="Ingrese la cédula"
      />

      <Text>Teléfono:</Text>
      <TextInput
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        placeholder="Ingrese el teléfono"
      />

      <Text>Correo Electrónico:</Text>
      <TextInput
        value={correoElectronico}
        onChangeText={(text) => setCorreoElectronico(text)}
        placeholder="Ingrese el correo electrónico"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
