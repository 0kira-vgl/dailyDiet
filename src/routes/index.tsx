import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";

export function Routes() {
  return (
    // evita o "glitch" ao trocar de tela
    <View className="flex-1 bg-GRAY_600">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
