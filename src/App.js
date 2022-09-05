import { useState, createContext, useContext } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Burger from "./components/Burger/Burger";
import Footer from "./components/Footer/Footer";

import "./styles.css";

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

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
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

  const handleLoginClick = () => {
    // showLogin = true;
    setShowLogin(true);
    console.log("log in clicked");
  };

  return (
    <div className="App">
      <Header onLoginClick={handleLoginClick} />
      {showLogin && <LoginForm />}

      {!showLogin && (
        <BurgerContext.Provider value={contextValue}>
          <Burger />
          <Footer />
        </BurgerContext.Provider>
      )}
    </div>
  );
}
