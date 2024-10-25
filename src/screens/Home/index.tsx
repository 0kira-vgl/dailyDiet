import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { Text } from "react-native";
import { PercentCard } from "@/components/PercentCard";

export function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        height: "100%",
        padding: 24,
      }}
    >
      <Header />
      <PercentCard />
    </SafeAreaView>
  );
}
