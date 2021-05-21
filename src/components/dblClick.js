const DblClick = (props) => {
  const { count, inCount } = props;
  return (
    <div>
      <button type="button" onDoubleClick={inCount}>
        Button Double Clickced {count}
      </button>
    </div>
  );
};
export default DblClick;
