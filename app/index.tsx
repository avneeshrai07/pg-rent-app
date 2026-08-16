import { View, Text } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600">
        PG Rent App 🏠
      </Text>
      <Text className="text-gray-500 mt-2">NativeWind is working!</Text>
    </View>
  );
}