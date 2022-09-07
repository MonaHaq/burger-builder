import "./Ingredients.style.css";

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
