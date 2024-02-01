import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, setModalVisible }) {
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItem("@pass", password);

    alert("Senha salva com sucesso!");

    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada </Text>

        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.voltar}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.salvarSenha}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
              onPress={handleCopyPassword}
            >
              Salvar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "80%",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  voltar: {
    backgroundColor: "#fff",
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  salvarSenha: {
    backgroundColor: "#392de9",
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
