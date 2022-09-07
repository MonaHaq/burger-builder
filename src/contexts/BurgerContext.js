import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const basePrice = 3;

const defaultIngredients = [
  { name: 'cheese', price: 0.4, count: 0 },
  { name: 'lettuce', price: 1.3, count: 0 },
  { name: 'bacon', price: 0.7, count: 0 },
  { name: 'meat', price: 0.5, count: 0 },
];

const contextDefaultValue = {
  basePrice,
  ingredients: defaultIngredients,
  handleIngredientsChange: () => {},
};

const BurgerContext = createContext(contextDefaultValue);

export const useBurgerContext = () => useContext(BurgerContext);

BurgerProvider.propTypes = {
  children: PropTypes.node,
};

export function BurgerProvider(props) {
  const [ingredients, setIngredients] = useState(defaultIngredients);

  const handleIngredientsChange = (ingredientName, isIncrement) => {
    const newIngredients = [...ingredients];
    const index = ingredients.findIndex(ing => ing.name === ingredientName);
    const newIngredient = { ...newIngredients[index] };
    newIngredient['count'] = isIncrement ? newIngredient['count'] + 1 : newIngredient['count'] - 1;
    newIngredients[index] = newIngredient; //overriding
    setIngredients(newIngredients);
  };

  const contextValue = {
    basePrice,
    ingredients,
    handleIngredientsChange,
  };

  return <BurgerContext.Provider value={contextValue}>{props.children}</BurgerContext.Provider>;
}
