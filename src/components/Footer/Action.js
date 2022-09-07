import React from 'react';
import PropTypes from 'prop-types';
import './Footer.style.css';

Action.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleChange: PropTypes.func,
};

function Action(props) {
  const { name, isDisabled, handleChange } = props;

  return (
    <div className='ActionItems'>
      <div className='Label'>{name}</div>
      <button
        className='ButtonLess'
        disabled={isDisabled}
        onClick={() => handleChange(name, false)}
      >
        Less
      </button>
      <button className='ButtonMore' onClick={() => handleChange(name, true)}>
        More
      </button>
    </div>
  );
}

export default Action;
