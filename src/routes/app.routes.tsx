import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Status } from "@/screens/Status";
import { NewMeal } from "@/screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator(); // desestrutura o que vai ser usado

export function AppRoutes() {
  return (
    // "initialRouteName" define a primeira rota a ser carregada
    // "headerShown" remove o header da navigation

    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="status" component={Status} />
      <Screen name="newMeal" component={NewMeal} />
    </Navigator>
  );
}
