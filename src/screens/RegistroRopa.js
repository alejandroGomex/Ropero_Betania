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

export const RegistroRopa = ({ modalRegistroRopa, setModalRegistroRopa }) => {
  const [categoria, setCategoria] = useState("");
  const [talla, setTalla] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos ingresados.
    console.log("Nombre Donante:", nombreDonante);
    console.log("Cédula:", cedula);
    console.log("Teléfono:", telefono);
    console.log("Categoría:", categoria);
    console.log("Talla:", talla);
    console.log("Precio:", precio);
    console.log("Marca:", marca);
  };

  return (
    <View>
      <Text>Marca:</Text>
      <TextInput
        value={marca}
        onChangeText={(text) => setMarca(text)}
        placeholder="Ingrese la marca"
      />
      <Text>Categoría:</Text>
      <Picker
        selectedValue={categoria}
        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
      >
        <Picker.Item label="Seleccione una categoría" value="" />
        <Picker.Item label="Categoría 1" value="Categoria1" />
        <Picker.Item label="Categoría 2" value="Categoria2" />
        <Picker.Item label="Categoría 3" value="Categoria3" />
      </Picker>

      <Text>Talla:</Text>
      <TextInput
        value={talla}
        onChangeText={(text) => setTalla(text)}
        placeholder="Ingrese la talla"
      />

      <Text>Precio:</Text>
      <TextInput
        value={precio}
        onChangeText={(text) => setPrecio(text)}
        placeholder="Ingrese el precio"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};
