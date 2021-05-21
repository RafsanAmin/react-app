const Button = (props) => {
  const { count, inCount } = props;
  return (
    <div>
      <button type="button" onClick={inCount}>
        Button Clickced {count}
      </button>
    </div>
  );
};
export default Button;
