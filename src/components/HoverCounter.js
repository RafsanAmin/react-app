/* eslint-disable jsx-a11y/mouse-events-have-key-events */

const HoverCounter = (props) => {
  const { count, inCount } = props;
  return (
    <div>
      <h1 type="button" onMouseOver={inCount}>
        Header Hovered {count} Times
      </h1>
    </div>
  );
};
export default HoverCounter;
