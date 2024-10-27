import { View, Text } from "react-native";

export function FoodCard() {
  return (
    <View className="flex-row border justify-between mb-3 items-center rounded-md h-14 border-[#DDDEDF] p-4">
      <View className="flex-row items-center justify-center">
        <Text className="font-bold">20:00</Text>

        <View className="h-4 bg-[#B9BBBC] w-px mx-4" />

        <Text>Whey protein com leite</Text>
      </View>

      <View className="size-4 bg bg-[#CBE4B4] rounded-full" />
    </View>
  );
}
