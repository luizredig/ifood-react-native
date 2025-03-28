import { View, Pressable, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full h-16 bg-white justify-between items-center flex-row px-4">
      <Pressable className="h-10 w-10 bg-white rounded-full justify-center items-center shadow-md">
        <Ionicons name="menu" size={20} color={"#121212"} />
      </Pressable>

      <View className="flex flex-col">
        <Text className="text-sm text-slate-600">Localização</Text>

        <View className="flex flex-row items-center justify-center gap-2">
          <Feather name="map-pin" size={14} color={"#ff0000"} />

          <Text className="text-lg font-bold">Curitiba</Text>
        </View>
      </View>

      <Pressable className="h-10 w-10 bg-white rounded-full justify-center items-center shadow-md">
        <Feather name="bell" size={20} color={"#121212"} />
      </Pressable>
    </View>
  );
}
