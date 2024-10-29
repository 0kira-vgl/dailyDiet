import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealsGetAll } from "./MealsGetAll";

export async function mealCreate(newMeal: string) {
  try {
    const storedMeals = await MealsGetAll(); // pega os dados do local storage

    const mealAlreadyExists = storedMeals.includes(newMeal); // verifica se esse grupo já existe

    if (mealAlreadyExists) {
      //   throw new AppError("Já existe um grupo cadastrado com esse nome.");
    } // é um "erro costumizado"

    const storage = JSON.stringify([...storedMeals, newMeal]);

    // o primeiro parametro: "GROUP_COLLECTION" é a chave, o segundo: "newGroup/storage" é o valor
    await AsyncStorage.setItem(MEAL_COLLECTION, storage); // "setItem" envia dados
  } catch (error) {
    throw error;
  }
}
