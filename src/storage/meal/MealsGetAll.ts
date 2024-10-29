import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";

export async function MealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION); // "getItem" pega dados
    const meals: string[] = storage ? JSON.parse(storage) : []; // se tiver "conteudo" transfoma em objeto, caso contrario retorna um array vazio

    return meals;
  } catch (error) {
    throw error;
  }
}
