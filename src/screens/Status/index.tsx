import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export function Status() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-lg font-bold text-[#333638]">
        Estatísticas gerais
      </Text>

      <View className="w-full">
        <View className="items-center justify-center bg-[#EFF0F0] rounded-lg h-28 mb-5">
          <Text className="font-bold text-2xl pb-1.5">22</Text>
          <Text className="text-lg text-[#333638]">
            das refeições dentro da dieta
          </Text>
        </View>

        <View className="items-center justify-center bg-[#EFF0F0] rounded-lg h-28 mb-5">
          <Text className="font-bold text-2xl pb-1.5">109</Text>
          <Text className="text-lg text-[#333638]">refeições registradas</Text>
        </View>

        <View className="justify-between items-center flex-row gap-5">
          <View className="items-center justify-center bg-[#E5F0DB] rounded-lg h-28 w-40 py-9 px-5 flex-1">
            <Text className="font-bold text-2xl pb-1.5">99</Text>
            <Text className="text-lg text-[#333638]">
              refeições dentro da dieta
            </Text>
          </View>

          <View className="items-center justify-center bg-[#F4E6E7] rounded-lg h-28 w-40 py-9 px-5 flex-1">
            <Text className="font-bold text-2xl pb-1.5">10</Text>
            <Text className="text-lg text-[#333638]">
              refeições fora da dieta
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
