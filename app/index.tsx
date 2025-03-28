import { ScrollView, View } from "react-native";
import { Header } from "./components/layout/header";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-100"
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header />
      </View>
    </ScrollView>
  );
}
