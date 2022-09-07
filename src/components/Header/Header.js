import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './Header.style.css';

Header.propTypes = {
  onLoginClick: PropTypes.func,
};

export default function Header(props) {
  const { onLoginClick } = props;

  return (
    <header className='Toolbar'>
      <Logo />
      <nav className='Toolbar'>
        <ul className='NavigationItems'>
          <li className='NavigationItem'>
            <a aria-current='true' href='/' className='active'>
              Burger Builder
            </a>
          </li>
          <li className='NavigationItem'>
            <span onClick={onLoginClick}>Login</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
