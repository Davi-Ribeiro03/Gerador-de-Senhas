import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalPassword } from "../../components/ModalPassword/ModalPassword.js";

const char =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?-";

export function Home() {
  const [size, setSize] = useState(10);
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const generatePassword = () => {
    let passwordRandom = "";

    for (i = 0; i < size; i++) {
      let randomNumber = Math.floor(Math.random() * char.length);

      passwordRandom += char[randomNumber];
    }
    setPassword(passwordRandom);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={{ fontSize: 20 }}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={password} setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  logo: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 6,
  },
  button: {
    backgroundColor: "#fff",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 15,
  },
});
