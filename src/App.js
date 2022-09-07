import { useState } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import Burger from "./components/Burger/Burger";
import Footer from "./components/Footer/Footer";
import { BurgerProvider } from "./contexts/BurgerContext";

import "./styles.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      <Header onLoginClick={handleLoginClick} />
      {showLogin && <LoginForm />}

      {!showLogin && (
        <BurgerProvider>
          <Burger />
          <Footer />
        </BurgerProvider>
      )}
    </div>
  );
}
