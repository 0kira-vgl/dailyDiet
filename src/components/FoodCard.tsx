import { View, Text, Pressable, PressableProps } from "react-native";

type FoodCardProps = PressableProps & {
  title: string;
  hour: string;
};

export function FoodCard({ title, hour, ...rest }: FoodCardProps) {
  return (
    <Pressable
      {...rest}
      className="flex-row border justify-between mb-3 items-center rounded-md h-14 border-[#DDDEDF] p-4"
    >
      <View className="flex-row items-center justify-center">
        <Text className="font-bold">{hour}</Text>

        <View className="h-4 bg-[#B9BBBC] w-px mx-4" />

        <Text>{title}</Text>
      </View>

      <View className="size-4 bg bg-[#CBE4B4] rounded-full" />
    </Pressable>
  );
}
