export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      status: undefined;
      newMeal: undefined;
      nextNewMeal: {
        meal: string;
        withinDiet: boolean;
      };
      mealDetails: {
        withinDiet: boolean;
      };
    }
  }
}
