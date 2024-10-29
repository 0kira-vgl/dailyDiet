import { NoButton, YesButton } from "@/components/DietChoiceButton";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { mealCreate } from "@/storage/meal/mealCreate";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";

export function NewMeal() {
  const [meal, setMeal] = useState("");
  const navigation = useNavigation();

  async function handleHomeScreen() {
    await mealCreate(meal);
    navigation.navigate("home"); // navegação para quando o usuário clicar no botão
  }

  async function handleNewMeal() {
    try {
      if (meal.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da grupo.");
      } // verica se o input está vazio e não conta os espaços

      await mealCreate(meal); // armazena o groupo no local storage
      // navigation.navigate("players");
    } catch (error) {
      throw error;
    }
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
          <Input onChangeText={setMeal} />
        </View>

        <View className="mb-8">
          <Label title="Descrição" />
          <Input
            onChangeText={setMeal}
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
            <Input onChangeText={setMeal} placeholder="dd/mm/aaaa" />
          </View>

          <View className="w-36 flex-1">
            <Label title="Hora" />
            <Input onChangeText={setMeal} placeholder="hh:mm" />
          </View>
        </View>

        <Label title="Está dentro da dieta?" />
        <View className="ustify-between flex-row gap-7">
          <YesButton />
          <NoButton />
        </View>

        <Pressable
          onPress={handleNewMeal}
          className="w-full bg-gray-800 h-16 rounded-md justify-center items-center flex-row gap-2 mt-20"
        >
          <Text className="text-zinc-50 text-lg font-bold">Nova refeição</Text>
        </Pressable>
      </View>
    </View>
  );
}
