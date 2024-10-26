import { ArrowUpRight } from "lucide-react-native";
import { View, Text } from "react-native";

export function PercentCard() {
  return (
    <View className="w-full h-36 bg-[#E5F0DB] rounded-lg flex-col items-center justify-center">
      <View className="absolute top-4 right-4">
        <ArrowUpRight color="#639339" size={25} />
      </View>
      <Text className="font-bold text-3xl">90,86%</Text>
      <Text className="text-lg text-[#333638]">
        das refeições dentro da dieta
      </Text>
    </View>
  );
}
