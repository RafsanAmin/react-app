/* eslint-disable jsx-a11y/mouse-events-have-key-events */

const HoverCounter = (props) => {
  const { count, inCount, theme, st } = props;
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
      <p>It is {theme} theme</p>
      <h1 style={myStyle} type="button" onMouseOver={inCount}>
        Header Hovered {count} Times
      </h1>
      <button type="button" onClick={st}>
        Change
      </button>
    </div>
  );
};
export default HoverCounter;
