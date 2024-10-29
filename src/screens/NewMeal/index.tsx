import { NoButton, YesButton } from "@/components/DietChoiceButton";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { View, Text, Pressable } from "react-native";

export function NewMeal() {
  const navigation = useNavigation();

  function handleHomeScreen() {
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
        <View className="mb-8">
          <Label title="Nome" />
          <Input />
        </View>

        <View className="mb-8">
          <Label title="Descrição" />
          <Input
            multiline // transforma em um "textarea"
            className="h-36"
            style={{
              textAlignVertical: "top",
            }}
          />
        </View>

        <View className="mb-8 justify-between flex-row gap-7">
          <View className="flex-1">
            <Label title="Data" />
            <Input placeholder="dd/mm/aaaa" />
          </View>

          <View className="w-36 flex-1">
            <Label title="Hora" />
            <Input placeholder="hh:mm" />
          </View>
        </View>

        <Label title="Está dentro da dieta?" />
        <View className="ustify-between flex-row gap-7">
          <YesButton />
          <NoButton />
        </View>

        <Pressable className="w-full mt-20 h-16 rounded-md justify-center items-center flex-row gap-2 bg-gray-800">
          <Text className="font-bold text-zinc-50">Teste</Text>
        </Pressable>
      </View>
    </View>
  );
}
