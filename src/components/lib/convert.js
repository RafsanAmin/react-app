function Convert(type, num) {
  if (type === 'c') {
    return ((num - 32) * 5) / 9;
  }
  if (type === 'f') {
    return (num * 9) / 5 + 32;
  }
}
export default Convert;
