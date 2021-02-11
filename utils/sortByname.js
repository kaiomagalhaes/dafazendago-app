export default (a, b) => {
  const va = a.name[0];
  const vb = b.name[0];

  if (va > vb) {
    return 1
  } if (va < vb) {
    return -1
  } else {
    return 0
  }
}