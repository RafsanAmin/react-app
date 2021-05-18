export default function BoilingBool(props) {
  let { value, boil } = props;
  value = parseFloat(value);
  if (!value) {
    return <p>Hmm Number Only</p>;
  }
  if (boil >= 99) {
    return <p>Water is Boiling</p>;
  }
  if (boil <= 0) {
    return <p>Water is now Ice</p>;
  }

  return <p>Water is not Boiling</p>;
}
