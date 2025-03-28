import { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import Header from "./components/layout/header";
import BannerPagerView from "./components/banners/banner-pager-view";
import { io } from "socket.io-client";

const socket = io(process.env.EXPO_PUBLIC_API_URL);

export default function Index() {
  useEffect(() => {
    socket.on("pedidoAtualizado", (data) => {
      Alert.alert("Pedido Atualizado", JSON.stringify(data));
    });

    return () => {
      socket.off("pedidoAtualizado");
      socket.disconnect();
    };
  }, []);

  const fazerPedido = () => {
    const pedido = {
      id: Math.floor(Math.random() * 1000),
      produto: "X-Burguer",
    };

    socket.emit("novoPedido", pedido);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-100"
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header />
        <BannerPagerView />

        <Pressable style={styles.botao} onPress={fazerPedido}>
          <Text style={styles.textoBotao}>Fazer Pedido</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 20,
    backgroundColor: "#10b981",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
