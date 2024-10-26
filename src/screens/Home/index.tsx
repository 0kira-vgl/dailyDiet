import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { Pressable, Text } from "react-native";
import { PercentCard } from "@/components/PercentCard";
import { Plus, View } from "lucide-react-native";
import { Button } from "../../../components/Button";

export function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        flex: 1,
        padding: 24,
      }}
    >
      <Header />
      <PercentCard />

      <Text className="text-lg mt-10 mb-2">Refeições</Text>
      <Pressable className="w-full bg-gray-800 h-16 rounded-md justify-center items-center flex-row gap-2">
        <Plus size={24} color="#fafafa" />
        <Text className="text-zinc-50 text-lg font-bold">Nova refeição</Text>
      </Pressable>

      <Text className="text-lg mt-10 mb-2">Refeições</Text>
    </SafeAreaView>
  );
}
