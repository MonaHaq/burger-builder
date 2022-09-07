import PropTypes from 'prop-types';

import './Ingredients.style.css';

Ingredients.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};

export default function Ingredients(props) {
  const { name, count } = props;

  return (
    <>
      {Array(count)
        .fill(null)
        .map(() => (
          <div key={Math.random()} className={name}></div>
        ))}
    </>
  );
}
