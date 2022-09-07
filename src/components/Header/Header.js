import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Header.style.css';

Header.propTypes = {
  onLoginClick: PropTypes.func,
};

export default function Header() {
  return (
    <header className='Toolbar'>
      <Logo />
      <nav className='Toolbar'>
        <ul className='NavigationItems'>
          <li className='NavigationItem'>
            <Link to='/'>Burger Builder</Link>
          </li>
          <li className='NavigationItem'>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
