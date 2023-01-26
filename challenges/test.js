
const isValid = (id) => {
  if (id) {
    id = id.toString();
    id = id.trim();
    const reg = /^([a-zA-Z0-9]){12}$/;
    if (id.match(reg)) {
      return true;
    }
  }
  return false;
};

console.log(isValid("  2ertyhuirede"));
console.log(isValid("  2ertyhuir"));
console.log(isValid(123456789784));
console.log(isValid(12345678129784));
console.log(isValid());