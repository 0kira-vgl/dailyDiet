import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

type MealDetailsProps = {
  name: string;
  discription: string;
  date: string;
  hour: string;
};

export function MealDetails({
  name,
  discription,
  date,
  hour,
}: MealDetailsProps) {
  const navigation = useNavigation();

  async function handleHomeScreen() {
    navigation.navigate("home"); // navegação para quando o usuário clicar no botão
  }

  return (
    <View>
      <View className="bg-[#DDDEDF] h-36 justify-center pt-10">
        <View className="flex-row items-center justify-center relative">
          <Pressable onPress={handleHomeScreen} className="left-7 absolute">
            <ArrowLeft size={30} color="#333638" />
          </Pressable>
          <Text className="font-bold text-xl">Nova Refeição</Text>
        </View>
      </View>

      <View className="px-7 pt-12">
        <View className="mb-7">
          <Text className="text-xl font-bold ">{name}</Text>
          <Text className="text-lg">{discription}</Text>
        </View>

        <Text className="text-xl font-bold mb-1.5">Data e hora</Text>
        <View className="flex-row mb-7">
          <Text className="text-xl">{date} </Text>
          <Text className="text-xl">ás </Text>
          <Text className="text-xl">{hour}</Text>
        </View>

        <View className="flex-row items-center gap-2.5 bg-zinc-200 rounded-full w-44 h-10 justify-center">
          <View className="size-2.5 bg-[#639339] rounded-full" />
          <Text className="text-lg">dentro da dieta</Text>
        </View>
      </View>
    </View>
  );
}
