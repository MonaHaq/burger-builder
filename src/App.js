import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Burger from './components/Burger/Burger';
import Footer from './components/Footer/Footer';
import { BurgerProvider } from './contexts/BurgerContext';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <BurgerProvider>
                  <Burger />
                  <Footer />
                </BurgerProvider>
              }
            />
            <Route path='login' element={<LoginForm />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
