import { createContext, useState, useContext } from "react";

const ingredientsCount = {
  cheese: 0,
  meat: 0,
  bacon: 0,
  lettuce: 0,
};

const contextDefaultValue = {
  ingredientsCount,
  handleIngredientsChange: () => {},
};

const BurgerContext = createContext(contextDefaultValue);

export const useBurgerContext = () => useContext(BurgerContext); //custom hook for context

export const BurgerProvider = (props) => {
  const [ingredients, setIngredients] = useState(ingredientsCount);

  const handleIngredientsChange = (ingredientName, isIncrement) => {
    const newIngredients = { ...ingredients };
    newIngredients[ingredientName] = isIncrement
      ? newIngredients[ingredientName] + 1
      : newIngredients[ingredientName] - 1;
    setIngredients(newIngredients);
  };

  const contextValue = {
    ingredientsCount: ingredients,
    handleIngredientsChange,
  };

  return (
    <BurgerContext.Provider value={contextValue}>
      {props.children}
    </BurgerContext.Provider>
  );
};
