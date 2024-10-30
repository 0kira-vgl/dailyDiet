import { Pressable, PressableProps, View, Text } from "react-native";

const YesButton = ({ ...rest }: PressableProps) => {
  return (
    <Pressable
      {...rest}
      className="h-16 flex-1 rounded-md bg-gray-200 flex-row items-center justify-center gap-2 active:bg-[#E5F0DB] active:border-[#639339] active:border"
    >
      <View className="size-2 bg-[#639339] rounded-full" />

      <Text className="font-bold">Sim</Text>
    </Pressable>
  );
};

const NoButton = ({ ...rest }: PressableProps) => {
  return (
    <Pressable
      {...rest}
      className="h-16 flex-1 rounded-md bg-gray-200 flex-row items-center justify-center gap-2 active:bg-[#F4E6E7] active:border-[#BF3B44] active:border"
    >
      <View className="size-2 bg-[#BF3B44] rounded-full" />

      <Text className="font-bold">Não</Text>
    </Pressable>
  );
};

export { YesButton, NoButton };
