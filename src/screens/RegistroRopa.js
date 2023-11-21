import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";
import { SelectList } from "react-native-dropdown-select-list";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { RegistroDonante } from "./RegistroDonante";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImagePicker } from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
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
  FlatList,
  TextInput,
} from "react-native";

export const RegistroRopa = ({ modalRegistroRopa, setModalRegistroRopa }) => {
  const [categoria, setCategoria] = useState("");
  const [talla, setTalla] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [selected, setSelected] = React.useState("");
  const [modalListaRopa, setModalListaRopa] = useState(false);
  const [modalRegistroDonante, setModalRegistroDonante] = useState(false);
  const [image, setImage] = useState(null);
  const [Ropa, setRopa] = useState([]);
  const [state, setState] = useState({
    photo: " ",
  });

  const data = [
    { key: "1", value: "Ropero Calle", disabled: true },
    { key: "2", value: "Ropero medio" },
    { key: "3", value: "Ropero Ezquina" },
    { key: "4", value: "Bazar" },
    { key: "5", value: "Donar" },
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

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "Ropa"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRopa(data);
    };
    fetchData();
  }, []);

  const RopaItem = ({ item }) => {
    const ref = doc(FIRESTORE_DB, `Ropa/${item.id}`);
    const deleteRopa = async () => {
      deleteDoc(ref);
      console.log("Prenda eliminada con ID: ", item.id);
    };

    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>Marca: {item.marca}</Text>
        <Text style={styles.itemText}>Talla: {item.talla}</Text>
        <Text style={styles.itemText}>categoria:{item.categoria}</Text>
        <Text style={styles.itemText}>Precio: {item.precio}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="delete"
              size={24}
              color="black"
              onPress={() => {
                deleteRopa();
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal animationType="slide" visible={modalRegistroRopa}>
      <View style={styles.container}>
        <View style={styles.topBox} />
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.title}>Registro Ropa</Text>
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

        <View style={styles.imagePickerContainer}>
          {state.photo == "" ? (
            <Text></Text>
          ) : (
            <Image source={{ uri: state.photo }} />
          )}
        </View>

        <View flexDirection={"row"}>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              handleSubmit();
              setMarca("");
              setSelected("");
              setTalla("");
              setPrecio("");
              setImagen(null);
            }}
          >
            <Text style={styles.buttonText}>Nuevo Registro</Text>
          </Pressable>
          <Pressable
            style={[styles.button]}
            onPress={() => {
              setModalListaRopa(true);
            }}
          >
            <Text style={styles.buttonText}>Ver Inventario</Text>
          </Pressable>
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Pressable
            style={[styles.button1]}
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
        </View>
      </View>

      {/* render modal with list of prendas */}
      <Modal animationType="slide" visible={modalListaRopa}>
        <View style={styles.container}>
          <View style={styles.topBox} />
          <Image source={Logo} style={styles.logo} />
          <View style={styles.bottomBox} />
          <View>
            <Text style={styles.title}>Inventario de prendas</Text>
          </View>

          <FlatList
            style={{ width: "100%", height: "40%", marginBottom: 50 }}
            data={Ropa}
            renderItem={({ item }) => <RopaItem item={item} />}
            keyExtractor={(item) => item.id}
          />

          <Pressable
            style={[styles.button]}
            onPress={() => {
              setModalListaRopa(false);
            }}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.bottomBox} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  topBox: {
    marginTop: -70,
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 126, // Set the height of the top box
    width: 450,
  },
  bottomBox: {
    backgroundColor: "rgba(67, 179, 169,0.8)", // Set your desired color
    height: 100, // Set the height of the bottom box
    width: 450,
    position: "absolute",
    bottom: 0,
  },
  logo: {
    marginTop: -125,
    height: 125,
    width: 170,
    marginLeft: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  button1: {
    height: 45,
    width: 200,
    padding: 10,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#0069a3",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
