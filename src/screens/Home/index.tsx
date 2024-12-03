import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { FlatList, Pressable, Text, View } from "react-native";
import { PercentCard } from "@/components/PercentCard";
import { Plus } from "lucide-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FoodCard } from "@/components/FoodCard";
import { useCallback, useState } from "react";
import { Button } from "@/components/Button";
import { MealsGetAll } from "@/storage/meal/MealsGetAll";

export function Home() {
  const [foods, setFoods] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleStatusScreen() {
    navigation.navigate("status"); // navegação para quando o usuário clicar no botão
  }

  function handleNewMealScreen() {
    navigation.navigate("newMeal"); // navegação para quando o usuário clicar no botão
  }

  function handleOpenMeal(meal: string) {
    navigation.navigate("mealDetails", { meal }); // abre a lista de pessoas no grupo
  }

  async function fetchMeals() {
    try {
      const data = await MealsGetAll(); // pega a lista de groups
      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals(); // carrega as grupos ao iniciar a tela
    }, [])
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
        padding: 24,
      }}
    >
      <Header />
      <PercentCard
        onPress={handleStatusScreen}
        title="90,86"
        subtitle="das refeições dentro da dieta"
      />

      <Text className="text-lg mt-10 mb-2">Refeições</Text>
      <Pressable
        onPress={handleNewMealScreen}
        className="w-full bg-gray-800 h-16 rounded-md justify-center items-center flex-row gap-2"
      >
        <Plus size={24} color="#fafafa" />
        <Text className="text-zinc-50 text-lg font-bold">Nova refeição</Text>
      </Pressable>

      <Text className="text-lg font-bold mt-9 mb-1.5">12/08/22</Text>

      <FlatList
        data={foods}
        scrollEnabled={true}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={foods.length === 0 && { flex: 1 }} // "centraliza" o ListEmpty caso a lista estiver vazia
        renderItem={({ item }) => (
          <FoodCard
            onPress={() => handleOpenMeal(item)}
            title={item}
            hour={item}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>Sem refeições cadastradas</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
