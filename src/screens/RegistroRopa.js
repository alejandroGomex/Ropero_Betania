import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";
import { SelectList } from "react-native-dropdown-select-list";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { RegistroDonante } from "./RegistroDonante";
import { FIRESTORE_DB } from "../../firebaseConfig";
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
  const [selected, setSelected] = React.useState("");
  const [modalRegistroDonante, setModalRegistroDonante] = useState(false);
  const data = [
    { key: "1", value: "Ropero", disabled: true },
    { key: "2", value: "Bazar" },
    { key: "3", value: "Donar" },
  ];

  const handleSubmit = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, "Ropa"), {
      value: selected,
      talla,
      precio,
      marca,
    });
    console.log("Prenda registrada con ID: ", doc.id);
  };

  return (
    <Modal animationType="slide" visible={modalRegistroRopa}>
      <View style={styles.container}>
        <View style={styles.topBox} />
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.title}>Información Ropa</Text>
        </View>
        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          value={marca}
          onChangeText={(text) => setMarca(text)}
          placeholder="Ingrese la marca del articulo "
        />
        <View style={styles.label}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
        </View>
        <Text style={styles.label}>Talla</Text>
        <TextInput
          style={styles.input}
          value={talla}
          onChangeText={(text) => setTalla(text)}
          placeholder="Ingrese la talla "
        />

        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          value={precio}
          onChangeText={(text) => setPrecio(text)}
          placeholder="Ingrese el precio del articulo donado"
        />
      </View>
      <View>
        <Pressable
          style={[styles.button1]}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.buttonText}>Nuevo Registro</Text>
        </Pressable>
        <Text>{"\n"}</Text>
      </View>
      <View>
        <Pressable
          style={[styles.button2]}
          onPress={() => {
            setModalRegistroRopa(false);
          }}
        >
          <RegistroDonante
            modalRegistroDonante={modalRegistroDonante}
            setModalRegistroDonante={setModalRegistroDonante}
          ></RegistroDonante>
          <Text style={styles.buttonText}>Atras</Text>
        </Pressable>
        <Text>{"\n"}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}></View>
      </View>
      <View style={styles.bottomBox} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  topBox: {
    marginTop: -20,
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 126, // Set the height of the top box
    width: 450,
  },
  logo: {
    marginTop: -125,
    height: 125,
    width: 170,
    marginLeft: -30,
  },
  bottomBox: {
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 100, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
    marginBottom: 0,
  },
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
  button1: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 30,
    marginLeft: 100,
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  button2: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 30,
    marginLeft: 100,
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
