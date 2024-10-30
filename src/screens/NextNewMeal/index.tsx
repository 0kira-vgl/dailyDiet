import { View, Text, Image, Pressable } from "react-native";
import PeopleImg from "@/assets/peopleDiet/withinDiet/people.png";
import PeopleImg2 from "@/assets/peopleDiet/offDiet/people.png";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  params: {
    withinDiet: boolean;
  };
};

export function NextNewMeal() {
  const navigation = useNavigation();

  const route = useRoute<RouteProp<RouteParams, "params">>();
  const { withinDiet } = route.params;

  function handleHomeScreen() {
    navigation.navigate("home"); // navegação para quando o usuário clicar no botão
  }

  return (
    <View className="h-full justify-center items-center">
      {withinDiet ? (
        <View className="justify-center items-center">
          <Text className="text-[#639339] font-bold text-3xl mb-3">
            Continue assim!
          </Text>
          <Text className="text-[#1B1D1E] text-lg">
            Você continua {""}
            <Text className="font-bold">dentro da dieta.</Text> {""}
            Muito bem!
          </Text>

          <Image source={PeopleImg} className="mt-10" />

          <Pressable
            onPress={handleHomeScreen}
            className="bg-gray-800 h-16 rounded-md justify-center items-center flex-row px-8 mt-10"
          >
            <Text className="text-zinc-50 text-lg font-bold">
              Ir para a página inicial
            </Text>
          </Pressable>
        </View>
      ) : (
        <View className="justify-center items-center ">
          <Text className="text-[#BF3B44] font-bold text-3xl mb-3">
            Que pena!
          </Text>
          <Text className="text-[#1B1D1E] text-lg text-center">
            Você {""}
            <Text className="font-bold"> saiu da dieta</Text> {""}
            dessa vez, mas continue se esforçando e não desista!
          </Text>

          <Image source={PeopleImg2} className="mt-10" />

          <Pressable
            onPress={handleHomeScreen}
            className="bg-gray-800 h-16 rounded-md justify-center items-center flex-row px-8 mt-10"
          >
            <Text className="text-zinc-50 text-lg font-bold">
              Ir para a página inicial
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
