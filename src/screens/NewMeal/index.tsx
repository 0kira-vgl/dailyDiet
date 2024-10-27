import { Label } from "@/components/Label";
import { ArrowLeft } from "lucide-react-native";
import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function NewMeal() {
  return (
    <View>
      <View className="bg-[#DDDEDF] h-36 justify-center pt-10">
        <View className="flex-row items-center justify-center relative">
          <Pressable className="left-7 absolute">
            <ArrowLeft size={30} color="#333638" />
          </Pressable>
          <Text className="font-bold text-xl">Nova Refeição</Text>
        </View>
      </View>

      <View className="px-7 pt-12">
        <View className="mb-10">
          <Label title="Nome" />
          <TextInput className="h-16 p-4 text-xl border border-[#DDDEDF] rounded-md" />
        </View>

        <View className="mb-10">
          <Label title="Descrição" />
          <TextInput className="h-60 p-4 text-xl border border-[#DDDEDF] rounded-md" />
        </View>
      </View>
    </View>
  );
}
