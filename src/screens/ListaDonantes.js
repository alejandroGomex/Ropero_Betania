import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";
import { RegistroRopa } from "./RegistroRopa";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
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
  renderItem,
  TextInput,
} from "react-native";

export const ListaDonantes = ({
  modalListaDonantes,
  setModalListaDonantes,
}) => {
  const [donantes, setDonantes] = useState([]); // create state variable to hold data

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "donantes"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonantes(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.subtitle}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal animationType="slide" visible={modalListaDonantes}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={donantes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
  },
});
/* import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/LogoNegro.png";
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
import { RegistroRopa } from "./RegistroRopa";
import { FIRESTORE_DB } from "../../firebaseConfig";

import { collection, getDocs } from "firebase/firestore";

export const ListaDonantes = (modalListaDonantes, setModalListaDonantes) => {
  const [donantes, setDonantes] = useState([]);

  useEffect(() => {
    const fetchDonantes = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, "donantes"));
      const donantesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonantes(donantesData);
    };
    fetchDonantes();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.nombre}</Text>
      <Text style={styles.subtitle}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal animationType="slide" visible={modalListaDonantes}>
      <Text style={styles.title}>Lista de donantes</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 18,
  },
});
 */
