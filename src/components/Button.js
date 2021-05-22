const Button = (props) => {
  const { count, inCount, theme } = props;
  let myStyle;
  if (theme === 'dark') {
    myStyle = {
      backgroundColor: '#000000',
      color: '#ffffff',
    };
  } else if (theme === 'blue') {
    myStyle = {
      backgroundColor: 'navy',
      color: '#ffffff',
    };
  } else {
    myStyle = null;
  }
  return (
    <div>
      <button style={myStyle} type="button" onClick={inCount}>
        Button Clickced {count}
      </button>
    </div>
  );
};
export default Button;
