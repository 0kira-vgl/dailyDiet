import { Pressable, PressableProps, View, Text } from "react-native";

const YesButton = ({ ...rest }: PressableProps) => {
  return (
    <Pressable
      {...rest}
      className="h-16 flex-1 rounded-md bg-gray-200 flex-row items-center justify-center gap-2"
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
      className="h-16 flex-1 rounded-md bg-gray-200 flex-row items-center justify-center gap-2"
    >
      <View className="size-2 bg-[#BF3B44] rounded-full" />

      <Text className="font-bold">Não</Text>
    </Pressable>
  );
};

export { YesButton, NoButton };
